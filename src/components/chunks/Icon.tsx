import { FunctionComponent } from 'preact'
import { JSXInternal } from 'node_modules/preact/src/jsx'
import { useEffect, useState } from 'preact/hooks'
import { Skeleton } from './Skeleton'

export type IconProps = {
  className?: string
  iconSet?: 'heroicons/outline' | 'heroicons/solid' | 'simple-icons'
  iconSize?: 'sm' | 'md' | 'lg' | 'xl' | '_2xl' | '_3xl'
  icon: string
  fallbackElement?: JSXInternal.Element
}

export const Icon: FunctionComponent<IconProps> = props => {
  const [ icon, setIcon ] = useState<JSXInternal.Element>()
  const iset = props.iconSet ?? 'simple-icons'
  const className = props.className ?? ''
  const size = props.iconSize ?? 'sm'

  const patt = /(?<svgPath>\<path.+\/\>)/

  useEffect(() => {

    import(`@/assets/icons/${iset}/${props.icon}.svg`)
      .then(({ default: icondep }) => {
        const icon = <svg
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
          viewBox={`0 0 24 24`}
          title={props.icon} 
          dangerouslySetInnerHTML={{ __html: icondep.match(patt).groups.svgPath }}
          aria-hidden>
        </svg>

        if (/outline/.test(props.iconSet))
          icon.props.stroke = 'currentColor'

        setIcon(<div className={`icon ${className} icon-${size}`.trim()}>{icon}</div>)
      })
      .catch(() => {
        setIcon(props.fallbackElement ?? <Icon icon='x-mark' iconSet='heroicons/solid' />)
      })

  }, [ props ])

  return icon ?? <Skeleton className={`icon icon-${size}`} circular animated></Skeleton>
}

