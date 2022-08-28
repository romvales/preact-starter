// @ts-ignore
import { HelmetOptions } from 'helmet'
import { CookieParseOptions } from 'cookie-parser'
import morgan from 'morgan'
import { FetchStateStatus } from '@/helpers'
import { StateUpdater } from 'preact/hooks'
import { FunctionComponent } from 'preact'
import { Request, Response } from 'express'

declare global {
  
  type FetchResultCallback<T> = (cb: (fetchResults: T) => void) => void

  type FetchState<T = string> = {
    status: FetchStateStatus,
    message?: T,
  }

  type FetchOptions = {
    onServer?: boolean,
    reuse?: boolean,
  }

  type AppConfig = {
    title?: string
    serverHost?: string
    serverPort?: number
    secretPhrase?: string
    helmetOptions?: HelmetOptions
    cookieParserOptions?: CookieParseOptions
    morganOptions?: morgan.Options<Request, Response>
    clientRuntimeConfig?: { [key: string]: any }
    serverRuntimeConfig?: { [key: string]: any }
    meta?: { [key: string]: any }
  }

  type ServerContextRef = {
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

  var pendingAsyncDataFetches: {
    C: () => Promise<any>,
    options: FetchOptions,
  }[]

}
