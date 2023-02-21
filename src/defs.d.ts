// @ts-ignore
import { HelmetOptions } from 'helmet'
import { CookieParseOptions } from 'cookie-parser'
import morgan from 'morgan'
import { FetchStateStatus } from '@/helpers'
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
    forced?: boolean,
    reuse?: boolean,
  }

  // @ts-ignore
  type Route<T = any> = { 
    default?: boolean, 
    path: string, 
    component: FunctionComponent<T>, 
    lazy?: boolean, 
    loading?: () => JSX.Element,
    statusCode?: number,
  }
  type Routes = Route[]

  type AppConfig = {
    title?: string
    mode?: 'ssr' | 'spa',
    serverHost?: string
    serverPort?: number
    secretPhrase?: string
    helmetOptions?: HelmetOptions | boolean
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
    fState: any[],
    C: ([]: any) => Promise<any>,
    options: FetchOptions,
  }[]
  
}
