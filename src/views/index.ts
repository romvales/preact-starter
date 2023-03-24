import { __mapViewRoutes } from '@/helpers'
import { FunctionComponent } from 'preact'

/**
 * view_import
 * 
 * @param path 
 * @returns 
 */
export function view_import<T>(path: string) {
  return require('@/views' + path) as { default: FunctionComponent<T>, route_options: RouteOptions }
}
