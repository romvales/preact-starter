import './Home.pcss'

import { Fragment, FunctionComponent } from 'preact'
import { Link, route } from 'preact-router'
import { AppStateStore } from '@/services'
import { useEffect } from 'preact/hooks'
import { environment } from '@/helpers/ssr-utils'
import { setDocMetadata } from '@/helpers/hooks'

import { Image } from '@/components'

import texasHeelerVideo from '@/assets/images/pexels-rodnae-productions-7515916.mp4'
import breedfindLogo from '@/assets/images/breedfind.png'

export const Home: FunctionComponent<any> = (props) => {
  const state = new AppStateStore()

  if (environment.isBrowser && !state.isNewStart()) {
    useEffect(() => {
      state.Resume()
      if (state.state.breeds != undefined && Object.keys(state.state.breeds)) {
        route('/breeds', true)
      }

      return () => state.Close()
    }, [])
  }

  const image = ''
  const title = document.title
  const description = `breedFind is a simple utility web app that can quickly search for a specific dog breed. If you’re a dog lover, I’m sure you’ll find this tool useful.`
  const type = 'article'
  const url = document.URL

  setDocMetadata([
    { name: 'description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: url },

    { property: 'twitter:image', content: image },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: description },
    { property: 'twitter:type', content: type },
    { property: 'twitter:url', content: url },
  ])

  return (
    <Fragment>
      <video className='home-page__videoplayback' src={texasHeelerVideo} autoPlay loop muted></video>
      <div className='home-page__videoplayback-filter'></div>
      <div className='home-page'>
        <header className='home-page__header'>
          <Image className='header__breedfind-logo' src={breedfindLogo} alt='breedfind logo' />
        </header>
        <main className='home-page__main'>

          <div className='main__message-wrapper'>
            <h1 className='main__welcome-title'>Welcome,</h1>
            <p className='main__welcome-message'>
              <span>breedFind</span> is a simple utility web app that can quickly
              search for a specific dog breed. If you’re a dog lover,
              I’m sure you’ll find this tool useful.
            </p>
          </div>

          <ul className='main__data-sources'>
            <li className='data-sources__desc'>
              <span className='desc__bullet'></span>
              <span>
                Data from 
                <Link href='https://www.dogbreedslist.info'> dogbreedslist.info</Link>
              </span>
            </li>
          </ul>
        </main>
        <footer className='home-page__footer'>
          <button className='footer__start-button' onClick={state.Start}>
            <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'></path></svg>
            <span>Start Digging!</span>
          </button>
        </footer>
      </div>
    </Fragment>
  )
}
