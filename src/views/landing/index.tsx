import { FunctionComponent } from 'preact'
import { Markdown } from '@/components/elements'
import { getAppContentByLocale } from '@/helpers/index'

export const landing_route: FunctionComponent<any> = props => {

  return (
    <>
      <Markdown content={getAppContentByLocale<string>('message.md')}></Markdown>
    </>
  )
}

