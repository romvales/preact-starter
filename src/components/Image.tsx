import './Image.pcss'

import { FunctionComponent } from 'preact'
import { } from 'preact-router'
import { Suspense } from 'preact/compat'
import { useRef } from 'preact/hooks'

export const Image: FunctionComponent<ImageProps> = (props) => {
  const ref = useRef<HTMLImageElement>()

  const onImageLoad = () => {

  }

  const imageUi = <>
    <img ref={ref}
      onLoad={onImageLoad}
      src={props.src}
      alt={props.alt}
      className={props.className ? `${props.className}` : null}
      onClick={props.onClick} />
  </>

  return props.lazy ?
    <Suspense fallback={<span>{props.alt}</span>}>
      {imageUi}
    </Suspense>
    :
    imageUi
}
