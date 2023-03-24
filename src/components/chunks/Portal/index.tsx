
import { environment } from '@/helpers'
import { useSignal, useSignalEffect } from '@preact/signals'
import { ComponentChildren, FunctionComponent, VNode } from 'preact'
import { createPortal, useEffect } from 'preact/compat'

export type PortalProps = {
  selector: string
}

export const Portal: FunctionComponent<PortalProps> = props => {
  const portal = useSignal<VNode>(undefined)
  const renderToPortal = (children: ComponentChildren, selector: string) => {
    return createPortal(
      <>{children}</>, 
      document.querySelector(selector),
    )
  }

  if (global.finalRender) {
    global.portalPendingRender.push(() => renderToPortal(props.children, props.selector))
    return <div className={`pholder-${global.portalPendingRender.length}`}></div>
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => portal.value = renderToPortal(props.children, props.selector))
    
    return () => {
      portal.value = undefined
      clearTimeout(timeoutId)
    }
  }, [props.children])

  return <>{portal.value}</>
}