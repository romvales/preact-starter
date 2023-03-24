import { useAppLocale, VALID_LOCALES } from '@/contents'
import { useEffect, useState, useContext } from 'preact/hooks'
import { useSelector, useStore } from '@preact-hooks/unistore'
import { environment, isDevelopment } from './constants'
import { Request } from 'express'

import expressContext from '@/server/middlewares/express-context'

export {
  initAppState,
  initUniStore,
  getServerSideProps,
  resolvePendingProps,
  resolvePendingAsyncDataFetches,
  useAsyncDataFetch,
  FetchStateStatus,

} from './ssr-utils'

export {
  isDevelopment,
  isProduction,
  environment,
} from './constants'

export {
  useAppTheme,
  useRouterChangeEffect,
  useDocMetadata,
  setDocMetadata,

} from './hooks'

export function enableDevTools() {
  import('preact/devtools')
  import('preact/debug')
}

/**
 * useAppContentByLocale
 * 
 * @param path 
 * @param fallbackValue 
 * @param cached 
 * @param forceLocale 
 * @returns 
 */
export function useAppContentByLocale<T>(path: string, fallbackValue?: T, cached?: boolean, forceLocale?: VALID_LOCALES): T {
  const __cacheExt__ = /jsonp?|toml/i
  const __extension__ = getContentExt(path)
  const { appLocale } = useAppLocale()
  const [content, setContent] = useState<T>(__get_default_value(fallbackValue, appLocale, path, __extension__))

  const contents: Map<string, T> = new Map()

  useSelector<{ locales: CachedAppLocaleContents }, any>(S => {
    const updateContent = (locale: VALID_LOCALES) => {
      const localePath = `${(forceLocale ?? locale) ?? 'en'}/${path}`
      const isDefaultCached = __cacheExt__.test(__extension__)

      const requireContent = () => contents.set(localePath, require_content(localePath))
      const refContentFromStore = () => contents.set(localePath, S.locales[__extension__][localePath])

      const possiblyHasCache = isDefaultCached && !cached
      const possiblyDontHaveACache = !isDefaultCached && cached

      // ??????
      if ((possiblyHasCache || possiblyDontHaveACache) && environment.isServer) {
        requireContent()
      } else if ((possiblyHasCache || possiblyDontHaveACache) && contents.get(localePath)) {
      } else if ((possiblyHasCache || possiblyDontHaveACache) && S.locales[__extension__][localePath] === undefined) {
        requireContent()
      } else if (possiblyHasCache || possiblyDontHaveACache) {
        if (isDevelopment) requireContent()
        else refContentFromStore()
      } else {
        requireContent()
      }

      setContent(contents.get(localePath))
      return localePath
    }
    
    if (environment.isServer) {
      const { req } = useContext(expressContext.getContext<{ req: Request }>())
      const appLocale = req.cookies?.appCurrentLocale

      const contentPath = updateContent(appLocale)

      // By default, these extensions are included within the locales cached data.
      if (__cacheExt__.test(__extension__)) S.locales[__extension__][contentPath] = content

      // If a specific locale data is enforced to be cached and server rendered then
      // it is included in the store.
      else if (cached) S.locales[__extension__][contentPath] = content
    }

    useEffect(() => { 
      updateContent(appLocale)
      return () => updateContent(undefined)
    }, [ appLocale ])
  }) 

  return content
}

// To avoid calling `.getState()` multiple times, we will memoize its value into 
// this local __cacheLocales variable.
let __cacheLocales: CachedAppLocaleContents

/**
 * __get_default_value
 * 
 * @param defVal 
 * @param locale 
 * @param path 
 * @param ext 
 * @returns 
 */
function __get_default_value<T>(defVal: T, locale: string, path: string, ext: string): T {
  let locales: CachedAppLocaleContents

  if (!__cacheLocales) 
    __cacheLocales = locales = useStore<{ locales: CachedAppLocaleContents }>().getState().locales
  else
    locales = __cacheLocales

  return locales[ext][`${locale}/${path}`] ?? defVal
}

// getContentExt is a simple utility function for determining the file extension of a path.
function getContentExt(path: string) {
  const rexp = /\.(?<extension>[a-z]+)$/i
  return path.match(rexp).groups.extension ?? 'md'
}

/**
 * require_content
 * 
 * @param path 
 * @returns 
 */
function require_content(path: string): any {
  let mod: any
  try {
    mod = require(`@/contents/${path}`)
  } catch(err) {
    if (environment.isBrowser) {
      throw err
    }
  }

  return mod
}

import path from 'path'
import fs from 'fs'
import { view_import } from '@/views'
import { RemoteConfigService } from '@/services'
import { FunctionComponent } from 'preact'
import Router, { RouterOnChangeArgs } from 'preact-router'
import AsyncRoute from 'preact-async-route'
import expressCtx from '@/server/middlewares/express-context'

/**
 * Note that subdomains can only be defined in the top-level of the `views` folder.
 * The __mapViewRoutes will throw an error once a subdomain folder is found in a subdirectory.
 */
const subdomainPatt = /^@(?<subdomain>[a-z]+?)(?<ext>(\.tsx))?$/
const paramPatt = /^_(?<param>[a-z]+?)(?<ext>(\.tsx))?$/
const ignorePatt = /^%[^.]+(?<ext>\.[a-z0-9]+)?$/
const normalPatt = /^(?<routeName>[^.]+?)(?<ext>(\.tsx))?$/

/** The subdomain that is defined in this constant will be flagged as a global.  */
const __fallback_subdomain_identifier = 'default'

/**
 * __mapViewRoutes is a function used to map all views stored in the directory 'views'. This is a utility function
 * used by the function that automatically registers all route defined in the 'views' folder.
 *
 * @param rootDir string
 * @param webPath any
 * @param level number
 * @param moduleImportPath string
 * @returns 
 */
export function __mapViewRoutes(rootDir?: string, webPath: string = '/', level: number = 0, moduleImportPath: string = '') {
  const route_tree: MappedRouteTree = {}

  if (window.__APP_STATE__.appRoutes) {
    return window.__APP_STATE__.appRoutes
  }
  
  if (environment.isServer) {
    const sub_root = rootDir ?? path.resolve(process.cwd(), 'src/views')

    const entries = fs.readdirSync(sub_root, { withFileTypes: true })

    for (const entry of entries) {
      const isSubdomain = subdomainPatt.test(entry.name)
      const isParameterizedRoute = paramPatt.test(entry.name)
      const isIgnore = ignorePatt.test(entry.name)
      const isNormal = normalPatt.test(entry.name)

      if (isIgnore) continue

      let out_tree: MappedRouteTreeChild

      const getRouteTree = (subject: string, path: string) => {
        let sub_route_tree: MappedRouteTreeChild
        if (entry.isDirectory()) {
          // It is reasonable to pass '/' in the webPath parameter when an entry is a subdomain.
          sub_route_tree = __mapViewRoutes(`${sub_root}/${entry.name}`, path, level+1, `${moduleImportPath}/${entry.name}`.trim()) as MappedRouteTreeChild
        } else {
          sub_route_tree = __construct_route_object(`${moduleImportPath}/${subject}`, path)
        }

        return  sub_route_tree
      }

      // Check whether the file entry has a starting character name '@' indicating 
      // that there was an error in the route definitions.
      if (level != 0 && isSubdomain)
        throw new InvalidRouteDefinitionError(`You are defining a subdomain route in an invalid route level (${entry.name}, level: ${level})`)
      
      // Subdomain level routes
      if (isSubdomain) {
        const { subdomain } = entry.name.match(subdomainPatt).groups
        
        out_tree = getRouteTree('@'+subdomain, '/')

        if (subdomain === __fallback_subdomain_identifier)
          route_tree.__fallback = out_tree
        else
          route_tree[subdomain] = out_tree

        continue
      }

      // Parameterized routes
      if (isParameterizedRoute) {
        const { param } = entry.name.match(paramPatt).groups

        // __global
        if (level === 0) {
          out_tree = getRouteTree(param, `/:${param}`)

          // If route_tree.__global is undefined, we define it. Further down the line of the level 0
          // we will reference this __global to store globally accessible routes.
          if (route_tree.__global === undefined) route_tree.__global = {}
          
          route_tree.__global[`_${param}`] = out_tree
        } else {
          out_tree = getRouteTree(param, (webPath != '/' ? webPath+'/' : webPath) + `:${param == 'index' ? 'page' : param}`)
          route_tree[`_${param}`] = out_tree
        }

        continue
      }

      // Normal routes
      if (isNormal) {
        const { routeName } = entry.name.match(normalPatt).groups

        // __global
        if (level === 0) {
          out_tree = getRouteTree(routeName, `/${routeName}`)

          // If route_tree.__global is undefined, we define it. Further down the line of the level 0
          // we will reference this __global to store globally accessible routes.
          if (route_tree.__global === undefined) route_tree.__global = {}
          route_tree.__global[routeName] = out_tree
        } else {
          out_tree = getRouteTree(routeName, (webPath != '/' ? webPath+'/' : webPath) + routeName)
          route_tree[routeName] = out_tree
        }
      }
    }
  } else {
    return window.__APP_STATE__.appRoutes
  }

  if (level === 0) {
    window.__APP_STATE__.appRoutes = route_tree
  }

  return route_tree
}

export type AppRouterProps = {
  currentUrl: string
  onChange: (ev: RouterOnChangeArgs) => void
}

export const __cache_subdomain = new Map()

/**
 * AppRouter
 * 
 * @param props 
 * @returns 
 */
export const AppRouter: FunctionComponent<AppRouterProps> = props => {
  const { security: { validHostnames } } = (new RemoteConfigService).config()
  const _curr = window.location.hostname
  const routes = __mapViewRoutes()

  let subdomain: string;

  if (!__cache_subdomain.has(_curr)) {
    validHostnames.map(hostname => new RegExp(hostname).test(_curr) && (subdomain = _curr.replace(new RegExp(`\.?${hostname}`), '')))
    __cache_subdomain.set(_curr, subdomain)
  } else {
    subdomain = __cache_subdomain.get(_curr)
  }

  const _routes_ = collapse_routes_metadata_to_components(subdomain, routes)

  return (
    <Router url={props.currentUrl} onChange={props.onChange}>
      {_routes_.map(route => {
        const path = route.options.altUrl ?? route.url
        const routeUi = route.options.lazy ?
            <AsyncRoute 
              getComponent={() => Promise.resolve(route.component)} loading={route.options.loading} path={path} default={route.options.default}>
            </AsyncRoute>
            :
            <route.component path={path} default={route.options.default} />
          
          // When a route component does not match the current url, we considered it 
          // as a whitelist url, this is done so that `getServerSideProps` should only be
          // able to add props into the component when navigated to the component.
          const isWhitelist = window.__APP_STATE__.serverSideRoutesWhitelist[route.component.name]

          if (environment.isBrowser && isWhitelist) {
            window.__whitelistRoutes[route.component.name] = routeUi
          } else if (environment.isBrowser && !isWhitelist) {
            window.__routes[route.component.name] = routeUi
          }

          if (environment.isServer && route.options.statusCode) {
            const ctx = useContext(expressCtx.getContext<{ req: Request, res: Response, statusCode: number }>())
            const rexp = new RegExp(`${path.replace(/:[^/]+/, '[^/]+?')}`)

            if (rexp.test(window.location.pathname)) {
              ctx.statusCode = route.options.statusCode
            }
          }

          return routeUi
      })}
    </Router>
  )
}

let __cache_collapsed_components: Routes

/**
 * collapse_routes_metadata_to_components
 * 
 * @returns 
 */
export function collapse_routes_metadata_to_components(subdomain: string, metadata_tree: MappedRouteTree | MappedRouteTreeChild, name?: string, level: number = 0): Routes {
  if (subdomain === undefined) return []
  
  if (__cache_collapsed_components) return __cache_collapsed_components

  if (level !== 0) {
    const routes: Routes = []

    if (metadata_tree?._importPath === undefined) {
      for (const [name, metadata] of Object.entries(metadata_tree ?? {})) {
        routes.push(...collapse_routes_metadata_to_components(subdomain, metadata, name, level+1))
      }

    } else {
      const route = view_import(metadata_tree?._importPath as string)

      if (!route.default) {
        throw new NoRouteComponentImported(`"${metadata_tree.url}" does not export a default route component.`)
      }

      routes.push({
        name: route.route_options?.name ?? (/_?index/.test(name) ? '' : name),
        url: metadata_tree.url as string,
        component: route.default,
        options: route.route_options ?? {},
      })
    }

    return routes
  }

  const results = [
    ...collapse_routes_metadata_to_components(subdomain, metadata_tree.__global, '', level+1),
    ...collapse_routes_metadata_to_components(subdomain, metadata_tree[subdomain] ?? (subdomain == '' ? metadata_tree.__fallback : {}), '', level+1)
  ]

  if (level === 0) {
    __cache_collapsed_components = results
  }

  return results
}

/**
 * getRouteUrlByName
 * 
 * @param name
 * @param params 
 * @returns
 */
export function getRouteUrlByName(name: string, params?: { [key: string]: any }): string {
  const routes = collapse_routes_metadata_to_components(__cache_subdomain.get(window.location.hostname) ?? '', __mapViewRoutes())

  for (const route of routes)
    if (route.name === name) return route.options.altUrl ?? route.url

  throw new TypeError(`Named route "${name}" was not found.`)
}

/**
 * __construct_route_object
 * 
 * @param _import 
 * @param urlPath 
 * @returns 
 */
function __construct_route_object(_import: string, urlPath: string) {
  const indexPatt = /\/?(index[?*+]?)$/

  // Import the route component.
  try {
    let path: string
    let route = view_import(_import)
    const options = route.route_options ?? {}
    const flag = options.flag

    if (flag && /^[?*+]$/.test(flag)) {
      path = `${urlPath}${flag}`
    } else {
      path = urlPath
    }

    const outUrl = path.replace(indexPatt, '') + (indexPatt.test(path) && flag ? flag : '')

    return {
      url: (outUrl.length ? outUrl : '/').replaceAll('_', ':'),
      _importPath: _import.replace('/index', ''),
      options,
    } as MappedRouteTreeChild
  } catch(err) {
    console.log(err)
  }

}

class InvalidRouteDefinitionError extends Error {
  
  constructor(msg?: string) {
    super(msg)
  }

}


class NoRouteComponentImported extends Error {

  constructor(msg?: string) {
    super(msg)
  }

}