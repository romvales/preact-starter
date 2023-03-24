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

  type MappedRouteTree = {
    __fallback?: {
      [key: string]: MappedRouteTreeChild
    }
    __global?: {
      [key: string]: MappedRouteTreeChild
    }
    [key: string]: {
      [key: string]: MappedRouteTreeChild
    }
  }

  type MappedRouteTreeChild = {
    [key: string]: MappedRouteTreeChild
    url: string
    _importPath: string
    options: RouteOptions
  }

  type RouteOptions = { 
    altUrl?: string,
    flag?: '?' | '*' | '+'
    default?: boolean, 
    name?: string,
    lazy?: boolean,
    loading?: () => JSX.Element,
    statusCode?: number,
  }
  
  type Route = {
    name: string
    url: string
    component: FunctionComponent
    options: RouteOptions
  }

  type Routes = Route[]

  type AppConfig = {
    title?: string
    mode?: 'ssr' | 'spa',
    serverHost?: string
    serverPort?: number
    serverRoutes?: string,
    secretPhrase?: string
    helmetOptions?: HelmetOptions | boolean
    cookieParserOptions?: CookieParseOptions
    morganOptions?: morgan.Options<Request, Response>
    clientRuntimeConfig?: { [key: string]: any }
    serverRuntimeConfig?: { [key: string]: any }
    meta?: { [key: string]: any }
    apiOptions?: { 
      [key: string]: any,
      endpoints?: string[],
      cors?: { [key: string]: any },
    }
  }

  type ViewImporter<T> = (path: string) => T

  type ServerContextRef = {
    req: Request
    res: Response
  }

  var APP_CONFIG: AppConfig
  
  var clientRuntimeConfig: { 
    [key: string]: any,
    validDomains?: string[],
  }

  var serverRuntimeConfig: { [key: string]: any }

  var pendingServerSideProps: {
    C: FunctionComponent<any>,
    aF: (ctx: ServerContextRef) => Promise<any>,
  }[]

  var portalPendingRender: any[]

  var pendingAsyncDataFetches: {
    fState: any[],
    C: ([]: any) => Promise<any>,
    options: FetchOptions,
  }[]

  type CachedAppLocaleContents = {
    md: { [key: string]: string },
    json: { [key: string]: any },
    txt: { [key: string]: string },

    // unimplemented
    toml: { [key: string]: any },
  }

  var __remoteConfig: RemoteConfig
}
