
import cors from 'cors'
import { Request, Response, Router } from 'express'
import { setupConfigRoute } from './config'
import puppeteer  from 'puppeteer'
import path from 'path'
import fs from 'fs'
import os from 'os'

import { BuilderService } from '@/services'
import { ImageKitService } from '@/services'

export const apiRouter = Router({ strict: true, caseSensitive: true })

apiRouter.options('*', cors(APP_CONFIG.apiOptions.cors))
apiRouter.use('*', cors(APP_CONFIG.apiOptions.cors))

apiRouter.get('/', (req: Request, res: Response) => {
  res.json({ server_timestamp: Date.now() })
})

apiRouter.put('/print', async (req: Request, res: Response) => {
  const [ pageUrl, uuid, fname, title ] = [ req.body.pageUrl, req.body.uuid, req.body.fname, req.body.title ]

  const { docpath } = BuilderService.getCreatedPath(uuid)
  const pdfPath = path.resolve(docpath, `${uuid}.pdf`)

  const browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome-stable', ignoreHTTPSErrors: true })
  const window = await browser.newPage()

  await window.emulateMediaType('screen')
  await window.goto(pageUrl, { 
    waitUntil: 'networkidle2',
    timeout: 0,
  })

  const pdf = await window.pdf({
    path: pdfPath,
    margin: { top: 0, bottom: 0, right: 0, left: 0 },
    preferCSSPageSize: true,
    printBackground: true,
    pageRanges: '1-2',
    format: 'A4',
    displayHeaderFooter: false,
  })

  await browser.close()
  
  // @dup
  fs.copyFile(pdfPath, path.resolve(os.homedir(), `Documents/Candidates/${fname} (${title}).pdf`), null)

  res.status(200).download(pdfPath)
})

apiRouter.use('/@onboard_builder',
  Router()
  .post('/create', (req: Request, res: Response) => 
    res
      .status(202)
      .json(BuilderService.create(req))
  )
  .put('/update/:docId', (req: Request, res: Response) => {
    const docId = req.params.docId
    BuilderService.writeDocJSON(docId, req.body.data)
    res.json({})
  })
  .get('/signature', (req: Request, res: Response) => {
    const ikit = new ImageKitService
    res.json(ikit.signature)
  })
)

setupConfigRoute(apiRouter)
