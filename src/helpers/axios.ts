
import axios, { AxiosRequestConfig } from 'axios'
import { environment } from '@/helpers'

export function initApiAxios<T>(conf?: AxiosRequestConfig<T>) {
  const config = { ...conf }
  
  if (environment.isServer) {
    const endpoints = APP_CONFIG.apiOptions.endpoints
    const selection = Date.now()%endpoints.length

    config.baseURL = endpoints.at(selection)

    if (window) window.__APP_STATE__.selectedApiEndpoint = config.baseURL
  } else {
    config.baseURL = window.__APP_STATE__.selectedApiEndpoint
  }

  return axios.create({ ...config })
}