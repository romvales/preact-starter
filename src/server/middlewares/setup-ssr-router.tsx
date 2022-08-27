import { Request, Response, Router } from 'express'
import { JSDOM } from 'jsdom'
import { render } from 'preact-render-to-string'
import path from 'path'
import devalue from 'devalue'

import { initAppState, initUniStore, resolvePendingProps } from '@/helpers'
import { ServerContext } from '@/server/SSRContext'
import { App } from '@/App'
import { resolvePendingAsyncDataFetches } from '@/helpers/ssr-utils'

const ssrRouter = Router({ strict: true })

ssrRouter.get('**', async (req, res) => {
  res.status(200)
    .set('Content-Type', 'text/html')
    .send(await renderDoc(req, res))
    .end()
})

async function renderDoc(req: Request, res: Response) {
  const currentUrl = `${req.protocol}://${req.headers.host}${req.originalUrl}`
  const doc = await JSDOM.fromFile(path.resolve('dist', 'index.html'), {
    url: currentUrl,
    userAgent: req.headers['user-agent'],
    contentType: req.headers['content-type'],
    referrer: req.headers['referer'],
    pretendToBeVisual: true,
    resources: 'usable',
    runScripts: 'dangerously',
    cookieJar: null,
  })

  // @ts-ignore
  global.window = doc.window
  global.document = window.document

  const initState = initAppState()
  const initStore = initUniStore()

  await resolvePendingProps({ req, res })
  await resolvePendingAsyncDataFetches()

  renderApp(initAppState, initStore)

  // Setup the index.html here that will be send to the browser
  document.body.innerHTML += `
  <script crossorigin="use-credentials">
    window.__APP_STATE__ = ${devalue(initState)}
    window.__UNISTORE_STATE__ = ${devalue(initStore.getState())}
    window.clientRuntimeConfig = window.__APP_STATE__.clientRuntimeConfig
  </script>
  `  

  //
  document.querySelector('.app-root').innerHTML = renderApp()

  return doc.serialize()
}

function renderApp(appState?: any, store?: any) {
  return render(
    <ServerContext value={appState ?? initAppState()} store={store ?? initUniStore()}>
      <App />
    </ServerContext>,
    null,
    { pretty: true },
  )
}

export default ssrRouter
