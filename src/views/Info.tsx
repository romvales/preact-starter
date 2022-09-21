import './Info.pcss'

import axios from 'axios'
import { Fragment, FunctionComponent } from 'preact'
import { Link, route } from 'preact-router'
import { environment, getServerSideProps, setDocMetadata } from '@/helpers'
import { useEffect, useRef, useState } from 'preact/hooks'
import { AppStateStore, useWorld } from '@/services'
import { JSXInternal } from 'node_modules/preact/src/jsx'

import {
  Image,
  MessageNotification,
} from '@/components'

import dogIcon from '@/assets/images/dog-icon.svg'
import fciLogo from '@/assets/images/logo.svg'
import { StatCounter } from '@/components/StatCounter'

export const Info: FunctionComponent<InfoProps> = (props) => {
  const state = new AppStateStore()

  const updatedStats = () => {
    if (environment.isServer) return

    state.Resume()
    const { lovedBreeds } = state.state
    return {
      count: lovedBreeds[props.id]?.count ?? 0,
      lovedAt: lovedBreeds[props.id]?.lovedAt ?? 0,
    }
  }

  const modalRef = useRef<HTMLElement>()

  const { data, viewIncre, shareIncre, loveIncre } = useWorld(props.id, window.location.pathname)
  const [isShownLess, setState] = useState<boolean>(true)
  const [breed, setBreed] = useState<Breed>(props.breed ?? props.breeds[props.id])
  const [stats, setStats] = useState<{ count: number, lovedAt: number }>(updatedStats())
  const [pCounter, setPCounter] = useState<number>(0)

  const updatePaginateCounter = (index: number) => {
    if (pCounter >= breed.images.length - 1) setPCounter(0)
    else if (pCounter < 0) setPCounter(breed.images.length - 2)
    else setPCounter(pCounter + index)
  }

  const historyToText = (breed: Breed) => {
    const span = document.createElement('span')
    span.innerHTML = breed?.history
    return span.textContent
  }

  const onModalChangeView = () => {
    const modal = modalRef.current
    const classList = modal.classList

    if (classList.contains('hidden'))
      classList.remove('hidden')
    else
      classList.add('hidden')

  }

  const onClickShareButton = () => {
    let canShare = false
    const sdata: ShareData = {
      title: `'${breed.name}' Breed Information`,
      text: breed.history.slice(0, 30) + '...',
      url: document.URL,
    }

    if (navigator.canShare(sdata)) {
      canShare = true
    }

    if (canShare)
      navigator.share(sdata)
        .then(() => shareIncre(props.id))
        .catch(() => { })
  }

  const onClickLoveButton = () => {
    setStats({ ...stats, count: stats.count + 1 })
    state.Add(breed)
    loveIncre(props.id)
  }

  const onGoBack = () => {
    route('/breeds', true)
  }

  if (environment.isBrowser) {
    useEffect(() => {
      const { lovedBreeds } = state.state

      if (Object.keys(props.breeds).length == 0) {

        const { breeds } = state.state
        Object.assign(props, { breeds: Object.assign(breeds, {}) })
      }

      setBreed(props.breeds[props.id])
      setStats(updatedStats())

      if (lovedBreeds[props.id]) setStats(lovedBreeds[props.id])
      if (!modalRef.current.classList.contains('hidden'))
        onModalChangeView()

      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0

      viewIncre(props.id)
      return () => state.Close()
    }, [window.location.pathname])
  }

  document.title = `breedFind | ${breed?.name} Breed Information`

  const image = breed?.images.at(0)
  const title = document.title
  const description = historyToText(breed)
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
    { property: 'twitter:title', content: image },
    { property: 'twitter:description', content: description },
    { property: 'twitter:type', content: type },
    { property: 'twitter:url', content: url },
  ])

  return (
    <Fragment>
      {
        <div className='info-page' id={`${breed?.id}-page`}>
          <header className='info-page__header'>
            <Image className='info-page__breed-image' src={breed?.images.at(0)} alt={`${breed?.name} image`} />
            <div className='info-page__breed-image-filter'></div>

            <nav className='info-page__main-nav'>
              <div className='main-nav__heading'>
                <button aria-label='go back to catalog page' className='info-nav__back' onClick={onGoBack}>
                  <svg class='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 19l-7-7m0 0l7-7m-7 7h18'></path></svg>
                </button>
                <div className='info-nav__wrapper'>
                  <h1 className='info-nav__title' dangerouslySetInnerHTML={{ __html: breed?.name }}></h1>
                  <p className='info-nav__breed-other-names'
                    dangerouslySetInnerHTML={{ __html: breed?.otherNames.join(' / ') }}>
                  </p>
                </div>
              </div>

            </nav>

            <nav className='info-page__modal-nav'>
              <button aria-label='view breed images' className='modal-nav__view-button' onClick={onModalChangeView}>
                <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'></path></svg>
              </button>

              <section className='modal-nav__modal hidden' ref={modalRef}>
                <nav className='modal__nav'>
                  <div className='nav__paginate-controls'>
                    <button className='nav__close-modal' onClick={onModalChangeView}>
                      <svg class='w-9 h-9' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12'></path></svg>
                    </button>

                    <aside className='paginate-controls__note'>
                      <p className='note__message'>
                        You might see unrelated images to the breed, this is due to how I scraped
                        the data from various sources. Sorry about that.
                      </p>
                    </aside>
                  </div>

                  <div className='nav__paginate-controls-2'>
                    <button aria-label='view left item' className='nav__left-button' onClick={() => updatePaginateCounter(-1)}>
                      <svg class='w-9 h-9' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'></path></svg>
                    </button>

                    <button aria-label='view right item' className='nav__right-button' onClick={() => updatePaginateCounter(1)}>
                      <svg class='w-9 h-9' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'></path></svg>
                    </button>
                  </div>

                  <div className='nav__image-container'>
                    <Image alt={`${breed?.name} image`} className='image-container__breed-image' src={breed?.images.at(pCounter)} />
                  </div>
                </nav>
              </section>
            </nav>
          </header>

          <main className='info-page__main'>
            <StatCounter data={data ? data[props.id] : null} />
            <button aria-label='share button' className='main__share-button' onClick={onClickShareButton}>
              <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'></path></svg>
            </button>

            <article className='main__top-content'>
              <ul aria-label='breed groups list' className='top-content__breed-groups'>
                {breed?.breedGroups && breed.breedGroups.map(group => (
                  group.split(',').map(group => (
                    <li className='breed-groups__item'>
                      <Link className='item__link' href='#'>
                        #{group.trim()}
                      </Link>
                    </li>
                  ))
                ))}
              </ul>
              <p className='top-content__breed-type'>{breed?.type}</p>

              <MessageNotification />

              <h2 className='top-content__breed-temperaments-title'>
                Temperaments
              </h2>
              <hr />
              <ul className='top-content__breed-temperaments'>
                {
                  breed?.temperaments.map(temperament => (
                    <li className='temperaments__item'>{temperament}</li>
                  ))
                }
              </ul>
            </article>

            <article className='main__breed-history'>
              <div className='breed-history__title'>
                <h2 className='title__main'>History</h2>
                <button aria-label={`Show ${isShownLess ? 'more' : 'less'} button...`} className='title__button' onClick={() => setState(!isShownLess)}>
                  {
                    isShownLess ?
                      <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h7'></path></svg>
                      :
                      <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h16M4 16h16'></path></svg>
                  }
                </button>
              </div>
              <hr />
              <p className={`breed-history__content ${isShownLess ? 'less' : ''}`}>
                {(() => {
                  const span = document.createElement('span')
                  span.innerHTML = breed?.history
                  return span.textContent
                })()}
              </p>
            </article>

            <article className='main__bottom-content'>
              <h2 className='bottom-content__sizes-title'>
                Breed Size
              </h2>
              <ul className='bottom-content__sizes'>
                {
                  ['Smallest', 'Small', 'Medium', 'Large', 'Giant'].map(size => (
                    <li className='sizes__item'>
                      <div id={`${size.toLowerCase()}-size`} className={`item__${size.toLowerCase()}-size`}>
                        <Image alt={`${size} dog icon`} className={new Set(breed?.size).has(size) ? 'dark:dark-contains light-contains' : 'dark:dark-not-contains light-not-contains'} src={dogIcon} />
                      </div>
                      <label htmlFor={`${size.toLowerCase()}-size`}
                        className={new Set(breed?.size).has(size) ? 'contains-size' : 'not-contains-size'}>{size}</label>
                    </li>
                  ))
                }
              </ul>

              <h2 className='bottom-content__stats-title'>
                <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'></path></svg>
                <span>Statistics</span>
              </h2>

              <FCIDocument breed={breed} />

              <table className='bottom-content__stats'>
                <thead className='stats__head'>

                </thead>
                <tbody className='stats__body'>
                  <tr className='body__item'>
                    <th className='item__name'>Origin</th>
                    <td className='item__value'>
                      {breed?.origins && breed?.origins.join(', ')}
                    </td>
                  </tr>
                  <tr className='body__item'>
                    <th className='item__name'>Life span</th>
                    <td className='item__value'>
                      <data value={JSON.stringify(breed?.lifeSpan.at(0))}>
                        ~ <span className='start'>{breed?.lifeSpan.at(0)}</span> years
                      </data>
                    </td>
                  </tr>
                  <tr className='body__item'>
                    <th className='item__name'>Litter size</th>
                    <td className='item__value'>
                      <data value={JSON.stringify(breed?.litterSize)}>
                        ~ <span className='start'>{breed?.litterSize.at(0)}</span> to <span className='end'> {breed?.litterSize.at(1)} </span> pups
                      </data>
                    </td>
                  </tr>
                </tbody>
                <caption>Average litter and life span of the breed '{breed?.name}'.</caption>
              </table>

              <table className='bottom-content__chars'>
                <thead className='chars__head'></thead>
                <tbody className='chars__body'>
                  {
                    Object.entries(breed?.breedChars ?? {}).map(([char, rate]) => (
                      <tr className='body__item'>
                        <th className='item__name'>
                          {char}
                        </th>
                        <td className='item__value'>
                          {[...new Array(rate)].map(() => {

                            return <svg class='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path></svg>
                          })}
                          <span>({rate})</span>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
                <caption>Breed '{breed?.name}' characteristics.</caption>
              </table>

              <h2 className='bottom-content__breed-colors-title'>
                Colors
              </h2>

              <ul className='bottom-content__breed-colors'>
                {
                  breed?.colors.map(color => (
                    <li className='breed-colors__item'>{color}</li>
                  ))
                }
              </ul>

              <h2 className='bottom-content__breed-similars-title'>
                Related Breeds
              </h2>
              <ul className='bottom-content__breed-similars'>
                {
                  breed?.breedRecs.map(id => {
                    const breed = props.breeds[id]

                    if (breed == undefined) return

                    breed.history = historyToText(breed)

                    const onItemClick = () => route(`/breeds/${id}`,)

                    return (
                      <li className='breed-similars__item'>
                        <div className='item__wrapper' onClick={onItemClick}>
                          <Image alt={`${breed?.name} image`} className='item__image' src={breed?.images.at(0)} />
                          <h3 className='item__name' dangerouslySetInnerHTML={{ __html: breed?.name }}></h3>
                        </div>
                        <p className='item__lifespan'>Lifespan: ~ {breed?.lifeSpan.at(0)} years</p>
                      </li>
                    )
                  })
                }
              </ul>

              <article className='bottom-content__misc'>
                <h2 className='misc__heading'>Videos</h2>
                <section className='misc__youtube-embed'>
                  {environment.isBrowser && <YoutubeLinks breed={breed} />}
                </section>

                <h2 className='misc__heading'>References</h2>
                <ul className='misc__refs'>
                  <References breed={breed} />
                </ul>
                <ul></ul>
              </article>
            </article>
          </main>

          <footer className='info-page__footer'>
            <button aria-label={`love ${breed?.name}`} className='footer__love-button' onClick={onClickLoveButton}>
              <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path></svg>
              <span>Love ({stats?.count ?? 0})</span>
            </button>
          </footer>
        </div>
      }
    </Fragment>
  )
}

getServerSideProps(Info, async (ctx) => {
  let breeds: Breeds
  let breed: Breed

  if (environment.isBrowser) {
    const { A: state } = JSON.parse(localStorage.getItem(AppStateStore._lkey) ?? '{}') as { A: AppState }
    breeds = state ? state.breeds : {}
    breed = null
  } else {
    const { req } = ctx

    try {
      breeds = await AppStateStore.GetServerBreeds()
    } catch (err) {
      breeds = {}
      breed = null
    }

    breed = breeds[req.params.id]
  }

  return { breeds, breed }
})

const YoutubeLinks: FunctionComponent<{ breed: Breed }> = (props) => {
  const ui: JSXInternal.Element[] = []
  const references = props.breed?.refs

  for (const refkey in references) {
    if (!/youtube\.com/.test(refkey)) continue

    const embed = references[refkey]

    ui.push(
      <div className='youtube-embed__wrapper' dangerouslySetInnerHTML={{ __html: embed.html }}></div>
    )
  }

  return (
    <>{ui}</>
  )
}

const References: FunctionComponent<{ breed: Breed }> = (props) => {
  const ui: JSXInternal.Element[] = []

  for (const refkey in props.breed?.refs) {
    const ref = props.breed?.refs[refkey]

    if (ref.title == undefined) continue

    ui.push(
      <li className='refs__item'>
        <span className='item__bullet'></span>
        <a href={refkey} target='_blank'>{ref.title}</a>
      </li>
    )
  }


  return (
    <>{ui}</>
  )
}

const FCIDocument: FunctionComponent<{ breed: Breed }> = (props) => {
  const breed = props.breed
  const refs = breed?.refs

  let fciDocLink: string

  for (const ref in refs) {
    if (/\.pdf$/.test(ref)) {
      fciDocLink = ref
    }
  }

  if (!fciDocLink) return <></>

  return (
    <aside className='bottom-content__fci-doc'>
      <div className='fci-doc__logo-wrapper'>
        <Image lazy src={fciLogo} alt='Federation Cynologique Internationale logo' />
      </div>
      <div className='fci-doc__content-wrapper'>
        <h3 className='content-wrapper__title'>Federation Cynologique Internationale</h3>
        <p className='content-wrapper__info'>
          <Link href={fciDocLink} target='_blank'>{fciDocLink}</Link>
        </p>
      </div>
    </aside>
  )
}
