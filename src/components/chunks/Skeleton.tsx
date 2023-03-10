import { CSSProperties } from 'preact/compat'
import { FunctionComponent } from 'preact'

type roundedUnit = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'

export enum RoundedUnit {
  sm = 0.125,
  md = 0.375,
  lg = 0.5,
  xl = 0.75,
  _2xl = 1,
  _3xl = 1.5
}

export type SkeletonProps = {
  className?: string
  animationClass?: string
  width?: string
  height?: string
  rounded?: roundedUnit | roundedUnit[4] // tr tl br bl
  roundedUnitType?: 'px' | 'em' | 'rem',

  animated?: boolean
  circular?: boolean
}

export const Skeleton: FunctionComponent<SkeletonProps> = props => {
  let className = props.className ? props.className : ''
  const skelStyle: CSSProperties = {
    height: props.height,
    width: props.width,
    ...getBorderRadiusMag(props.rounded, props.roundedUnitType ?? 'rem'),
  }

  if (props.animated) className += props.animationClass ? ` ${props.animationClass}` : ' skeleton skeleton-defanim'
  if (props.circular) className += ' rounded-full'

  return (
    <div aria-busy={true} className={`skeleton dark:bg-slate-800 bg-gray-200 ${className}`.trim()} style={skelStyle}>
      {props.children}
    </div>
  )
}

function getBorderRadiusMag(unit: roundedUnit | roundedUnit[4], unitType: 'px' | 'em' | 'rem') {
  let res: CSSProperties = {}

  if (unit === undefined) return {}

  const deduceValByUnit = (unit: roundedUnit) => {
    switch (unit) {
    case 'sm':
      return `${RoundedUnit.sm}${unitType}`
      break
    case 'md':
      return `${RoundedUnit.md}${unitType}`
      break
    case 'lg':
      return `${RoundedUnit.lg}${unitType}`
      break
    case 'xl':
      return `${RoundedUnit.xl}${unitType}`
      break
    case '2xl':
      return `${RoundedUnit._2xl}${unitType}`
      break
    case '3xl':
      return `${RoundedUnit._3xl}${unitType}`
      break
    case 'full':
      return '9999px'
      break
    }

    return undefined
  }

  if (unit.length === 4) {
    const [ tr, tl, br, bl ] = unit as any
    res.borderTopRightRadius = deduceValByUnit(tr)
    res.borderTopLeftRadius = deduceValByUnit(tl)
    res.borderBottomRightRadius = deduceValByUnit(br)
    res.borderBottomLeftRadius = deduceValByUnit(bl)
  } else {
    res.borderRadius = deduceValByUnit(unit as roundedUnit)
  }

  return res
}