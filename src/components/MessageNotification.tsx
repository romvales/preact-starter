import './MessageNotification.pcss'

import { FunctionComponent } from 'preact'
import { Link } from 'preact-router'
import { useEffect, useState } from 'preact/hooks'
import { environment } from '@/helpers'


export const MessageNotification: FunctionComponent<{}> = (props) => {
  const messages = [
    'Sending a small amount will help me a lot.',
    'Even sending an amount of ₱ 1.00 is a huge help for me.',
    'A temporary personal fundraising, sending a small amount will help.',
  ]

  const [message, setMessage] = useState<string>()
  const [hiddenAt, setHiddenAt] = useState<number>(environment.isBrowser ? localStorage.hiddenAt : 0)
  const [timestamp, setTimestamp] = useState<number>(Date.now())

  useEffect(() => {
    setMessage(messages.at(Math.round(Math.random() * 100 % messages.length) - 1))
  }, [])

  const onCloseMessage = () => {
    const hideFor = Date.now() + 1e3 * 60 * 60   // hide dialog for an hour. 
    localStorage.hiddenAt = hideFor
    setHiddenAt(hideFor)
  }

  if (environment.isBrowser) {
    setInterval(() => {
      setTimestamp(Date.now())
    }, 1e3)
  }

  return (
    <>
      {
        hiddenAt == 0 || hiddenAt == undefined || timestamp >= hiddenAt ?

          <aside className='message-notification'>
            <div className='message-notification__icon-wrapper'>
            <svg class='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'></path></svg>
            </div>

            <section className='message-notification__content'>
              <h1 className='content__title'>Asking for a Small Help</h1>
              <p className='content__message'>
                <span>{message} </span>
                <Link className='message__link' href={`/about`}>Click to help</Link>
              </p>  
            </section>

            <button aria-label='hide message notification' className='message-notification__hide' onClick={onCloseMessage}>
              <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12'></path></svg>
            </button>
          </aside>
          :
          <span></span>
      }
    </>
  )
}
