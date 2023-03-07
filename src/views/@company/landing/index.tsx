import './index.pcss'

import { FunctionComponent } from 'preact'
import { DefaultLayout } from '@/layouts'
import { useAppContentByLocale } from '@/helpers'
import { Markdown } from '@/components/elements/index'

export const landing_route: FunctionComponent<any> = props => {

  return (
    <DefaultLayout>
      <Markdown className='prose mx-auto' content={useAppContentByLocale('README.md')}></Markdown>
    </DefaultLayout>
  )
}
