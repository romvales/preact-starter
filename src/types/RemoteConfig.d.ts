


type RemoteConfig = {
  _id?: string,
  security?: SecurityConfig
  apiConfig?: ApiConifg
}

type SecurityConfig = {
  validHostnames: (string | 'localhost' | 'idreamnode0.tailnet-cdc9.ts.net')[],
}

type ApiConifg = {
  imagekit?: {
    pubkey: string
    privkey: string
    endpoint: string
  }
  [key: string]: any
}