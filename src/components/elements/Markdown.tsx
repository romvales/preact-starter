
import { FunctionComponent } from 'preact'
import { marked } from 'marked'
import { useState } from 'preact/hooks'
import { useAsyncDataFetch } from '@/helpers'

export type MarkdownProps = {
  class?: string,
  className?: string,
  content?: string,
  src?: URL,
  options?: marked.MarkedOptions,
}

export const Markdown: FunctionComponent<MarkdownProps> = props => {
  const [content, setContent] = useState('')

  if (props.src) {
    const [_, fCb] = useAsyncDataFetch({ onServer: true, reuse: true }, async () => {
      const content = await fetch(props.src).then(res => res.text())
      return { content }
    })
    
    fCb(({ content }) => setContent(marked.parse(content ?? '', props.options ?? {})))
  } else {
    setContent(marked.parse(props.content ?? '', props.options ?? {}))
  }

  return (
    <div className={props.className ?? props.class} dangerouslySetInnerHTML={{ __html: content }}></div>
  )
}
