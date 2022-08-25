import { Request, Response, Router } from 'express'
import { JSDOM } from 'jsdom'
import { render } from 'preact-render-to-string'
import toughCookie from 'tough-cookie'
import path from 'path'
import devalue from 'devalue'

import { initAppState, initUniStore, isDevelopment } from '@/helpers'
import { ServerContext } from '@/server/SSRContext'
import { App } from '@/App'

const ssrRouter = Router({ strict: true })

ssrRouter.get('**', async (req, res) => {
  res.status(200)
    .set('Content-Type', 'text/html')
    .send(await renderDoc(req, res))
    .end()
})

async function renderDoc(req: Request, res: Response) {
  const url = `${req.protocol}://${req.headers.host}${req.originalUrl}`
  const doc = await JSDOM.fromFile(path.resolve('dist', 'index.html'), {
    url,
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
    
  renderApp(initAppState, initStore)
  
  document.body.innerHTML += `
  <script crossorigin="use-credentials">
    window.__APP_STATE__ = ${devalue(initState)}
    window.__UNISTORE_STATE__ = ${devalue(initStore.getState())}
  </script>
  `

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

function setupCookieJar(req: Request, currentUrl: string) {
  const cookieJar = new toughCookie.CookieJar(undefined, {
    allowSpecialUseDomain: true,
    rejectPublicSuffixes: false,
  })

  for (const key in req.cookies) {
    cookieJar.setCookieSync(new toughCookie.Cookie({ key, value: req.cookies[key] }), currentUrl)
  }

  return cookieJar
}

export default ssrRouter
