// @ts-ignore
import { HelmetOptions } from 'helmet'
import { CookieParseOptions } from 'cookie-parser'
import morgan from 'morgan'
import { IGunInstance } from 'gun'
import { FetchStateStatus } from '@/helpers'
import { FunctionComponent } from 'preact'
import { Request, Response } from 'express'

declare global {
  type EmailForm = { name?: string, email?: string, mobile?: string, message?: string }
  type ImageProps = { lazy?: boolean, src?: string, alt?: string, className?: string, onClick?: (ev: Event) => void }
  type InfoProps = { path?: string, id?: string, breeds?: Breeds, breed?: Breed, lovedBreeds?: LovedBreeds }
  type StatProps = { data?: WorldStat, className?: string }

  type CatalogProps = { [key: string]: any }
  type CatalogOptions = {
    name?: string,
    itemCount?: number,
    cursor: number,
    filters?: {
      group?: string,
      location?: string,
      size?: string,
    }
  }

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
  type Route<T = any> = { default?: boolean, path: string, component: FunctionComponent<T>, lazy?: boolean, loading?: () => JSX.Element }
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

  interface Window {
    Gun: IGunInstance
  }

  type WorldComment = {
    timestamp: number,
    message: string,
  }

  type WorldStat = {
    viewCount: number,
    shareCount: number,
    loveCount: number,
    comments?: WorldComment[],
  }

  type World = {
    helpCount?: number,
    pages?: {
      [pageId: string]: WorldStat,
    }
  }
}
