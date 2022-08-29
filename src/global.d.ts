interface NodeModule {
  hot: any;
}

interface Window {
  __UNISTORE_STATE__: { [key: string]: any },
  __APP_STATE__: {
    asyncDataFetches?: { data: any, used: boolean }[],
    serverSideProps?: any,
    serverSideRoutesWhitelist: { [routeName: string]: boolean | Element | any },
    [key: string]: any,
  },
}

declare module '*.mp4'
declare module '*.3gp'
declare module '*.png'
declare module '*.ogg'
declare module '*.mp3'
declare module '*.m4a'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.mkv'
declare module '*.ico'
declare module '*.flac'
declare module '*.webp'

declare module NodeJS {
  interface Global {
    APP_CONFIG: AppConfig 
  }
}
