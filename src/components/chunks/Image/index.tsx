import './index.pcss'

import { FunctionComponent } from 'preact'
import { CCSkeleton } from '@/components/chunks'
import { useSignal } from '@preact/signals'
import { JSXInternal } from 'preact/src/jsx'
import { useEffect } from 'preact/hooks'
import { environment } from '@/helpers'

export type ImageProps = {
  src: string
  className?: string
  onLoad?: JSXInternal.GenericEventHandler<HTMLImageElement>
}

export enum ImageState { Start, Loading, Loaded, Server, Error }

export const Image: FunctionComponent<ImageProps> = props => {
  const loadState = useSignal(null)
  const imageUrl = useSignal(null)
  const className = props.className ?? undefined
  const base64Patt = /^data:image\/[^;]+base64, .+$/

  const fetchImage = (url: string) => {
    loadState.value = ImageState.Loading

    fetch(props.src, { cache: 'force-cache' })
      .then(async img => {
        const blob = await img.blob()
        const objUrl = URL.createObjectURL(blob)
        loadState.value = ImageState.Loaded
        imageUrl.value = objUrl
      })
      .catch(() => {
        fetchImage(url)
        loadState.value = ImageState.Error
      })
  }

  if (environment.isServer) {
    loadState.value = ImageState.Server
  } else {
    useEffect(() => {
      if (props.src !== undefined) {
        if (base64Patt.test(props.src))
          fetchImage(props.src)
        else {
          imageUrl.value = props.src
          loadState.value = ImageState.Loaded
        }
      } else
        loadState.value = ImageState.Loading
    }, [props.src])
  }

  return (
    <>
    {
      (() => {
        
        switch (loadState.value) {
        case ImageState.Server:
          return <img className={className} src={props.src} onLoad={props.onLoad} />
        case ImageState.Loading:
        case ImageState.Error:
          return props.children ?? 
            <CCSkeleton 
              className={className} 
              animated 
              animationClass='animate-pulse'></CCSkeleton>
        case ImageState.Loaded:
          return <img className={className} src={imageUrl.value} />
        }

      })()
    }
    </>
  )
}