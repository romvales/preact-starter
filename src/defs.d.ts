// @ts-ignore
import { HelmetOptions } from 'helmet'
import { CookieParseOptions } from 'cookie-parser'
import morgan from 'morgan'
import { FunctionComponent } from 'preact'
import { Request, Response } from 'express'


declare global {
  interface AppConfig {
    title?: string
    serverHost?: string
    serverPort?: number
    secretPhrase?: string
    helmetOptions?: HelmetOptions
    cookieParserOptions?: CookieParseOptions
    morganOptions?: morgan.Options<Request, Response>
    clientRuntimeConfig?: { [key: string]: any }
    serverRuntimeConfig?: { [key: string]: any }
  }

  interface ServerContextRef {
    req: Request
    res: Response
  }

  var APP_CONFIG: AppConfig
  var clientRuntimeConfig: { [key: string]: any }
  var serverRuntimeConfig: { [key: string]: any }
  var pendingServerSideProps: {
    C: FunctionComponent<any>,
    aF: (ctx: ServerContextRef) => Promise<any>,
  }[]
}
