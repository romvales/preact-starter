import './index.pcss'

import { FunctionComponent } from 'preact'
import { DefaultLayout } from '@/layouts'
import { Skeleton } from '@/components/chunks'
import { useAppContentByLocale } from '@/helpers/index'


export const landing_route: FunctionComponent<any> = props => {
  const { htmlId, smapCat, socialLinks } = useAppContentByLocale<SitemapContent>('sitemap.json', {
    htmlId: null,
    smapCat: [],
    socialLinks: [],
  })

  return (
    <DefaultLayout>
      { !smapCat ? <>Loading</> : JSON.stringify(smapCat) }
    </DefaultLayout>
  )
}
