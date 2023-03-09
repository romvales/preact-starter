import './index.pcss'

import { FunctionComponent } from 'preact'
import { useAppContentByLocale } from '@/helpers'

export type FooterProps = {
  className?: string
}

export const Footer: FunctionComponent<FooterProps> = props => {
  const content = useAppContentByLocale<SitemapContent>('sitemap.json')

  return (
    <footer className={`${props.className.trim()}`}>
      
    </footer>
  )
}