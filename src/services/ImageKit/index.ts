
import { initApiAxios } from '@/helpers/axios'
import { RemoteConfigService } from '@/services'
import ImageKit from 'imagekit'
import ImageKitBrowser from 'imagekit-javascript'


export class ImageKitService extends ImageKit {
  constructor() {
    const config = (new RemoteConfigService).config()
    const { imagekit } = config.apiConfig

    super({
      publicKey: imagekit.pubkey,
      privateKey: imagekit.privkey,
      urlEndpoint: imagekit.endpoint,
    })
  }

  get signature() {
    return this.getAuthenticationParameters()
  }

  static imagekitClientSide() {
    const axios = initApiAxios()
    const config = (new RemoteConfigService).config()
    const { imagekit } = config.apiConfig

    return new ImageKitBrowser({
      publicKey: imagekit.pubkey,
      urlEndpoint: imagekit.endpoint,
      authenticationEndpoint: `${axios.defaults.baseURL}/@onboard_builder/signature`
    })
  }
}