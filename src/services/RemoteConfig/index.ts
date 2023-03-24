import { environment } from '@/helpers'
import { initApiAxios } from '@/helpers/axios'
import { AxiosInstance } from 'axios'
import { useEffect, useState } from 'preact/hooks'

let _cacheAxios: AxiosInstance

export class RemoteConfigService {
  private _axios: AxiosInstance
  private _config: RemoteConfig

  static _cacheConfig: RemoteConfig

  constructor() {
    this._config = environment.isServer ? global.__remoteConfig : RemoteConfigService._cacheConfig
    this._axios = _cacheAxios ?? initApiAxios()
  }
  
  config() {
    return this._config
  }

  useConfig() {
    const [config, setConfig] = useState(this._config)

    useEffect(() => {
      let sse = new EventSource(`${this._axios.defaults.baseURL}/config`)

      sse.onerror = () => sse.close()
      sse.onmessage = msg => setConfig(JSON.parse(msg.data))

      return () => {
        sse.close()
        sse.removeEventListener('error', undefined)
        sse.removeEventListener('message', undefined)
        sse = undefined
      }
    }, [])

    return config
  }

  refresh() {
    return this._axios.put('/config')
  }

  async fetchRemoteConfig() {
    await this._axios.get('/config')
      .then(({ data }) => {
        RemoteConfigService._cacheConfig = data
      })
      .catch(() => this.fetchRemoteConfig())
  }

}
