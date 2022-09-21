import './Catalog.pcss'

import { Fragment, FunctionComponent } from 'preact'
import { AppStateStore } from '@/services/index'
import { StateUpdater, useEffect, useRef, useState } from 'preact/hooks'
import { JSXInternal } from 'node_modules/preact/src/jsx'
import { route } from 'preact-router'
import { environment, FetchStateStatus, setDocMetadata, useAsyncDataFetch } from '@/helpers'
import { useAppTheme } from '@/helpers/hooks'
import { useWorld } from '@/services'

import {
  Image,
  MessageNotification
} from '@/components'
import { StatCounter } from '@/components/StatCounter'

// To avoid repeatedly calling the useAsyncDataFetch function
// we create a cached version of the breeds and lovedBreeds that
// the recently fetched data acquired.
let cBreeds: Breeds
let cLovedBreeds: LovedBreeds

export const Catalog: FunctionComponent<CatalogProps> = (props) => {
  const state = new AppStateStore()

  // ref
  const loveItemsRef = useRef<HTMLUListElement>()
  const itemsRef = useRef<HTMLUListElement>()
  const headerBarRef = useRef<HTMLElement>()
  const filtersRef = useRef<HTMLFormElement>()
  const filtersButtonRef = useRef<HTMLButtonElement>()

  // state
  const [theme, setTheme] = useAppTheme()
  const [isHidden, setVisibility] = useState<boolean>(false)
  const [isFilterHidden, setFilterView] = useState<boolean>(true)
  const [breeds, setBreeds] = useState<Breeds>(cBreeds)
  const [lovedBreeds, setLovedBreeds] = useState<LovedBreeds>(cLovedBreeds)
  const [count, setCount] = useState<number>(Object.keys(cBreeds ?? {}).length)
  const [loveBsCount, setLoveBsCount] = useState<number>(Object.keys(cLovedBreeds ?? {}).length)
  const [options, setOptions] = useState<CatalogOptions>({
    itemCount: 10,
    cursor: 0,
    name: '',
    filters: {
      group: '',
      location: '',
      size: '',
    },
  })

  let fState: FetchState<string> = {} as any

  if (!cBreeds && !cLovedBreeds) {
    const [fStat, fCb] = useAsyncDataFetch<{ breeds: Breeds, lovedBreeds: LovedBreeds }>({ onServer: true, forced: true }, async () => {
      let breeds: Breeds = {}
      let lovedBreeds: LovedBreeds = {}

      if (environment.isBrowser) {
        state.Resume()
        const { breeds: bs, lovedBreeds: lBs } = state.state
        breeds = bs
        lovedBreeds = lBs
      } else {
        await AppStateStore.GetServerBreeds()
          .then(data => breeds = data)
          .catch(() => { })
      }

      return { breeds, lovedBreeds }
    })

    fCb(({ breeds, lovedBreeds }) => {
      const bsLen = Object.keys(breeds).length
      const lBsLen = Object.keys(lovedBreeds).length

      setBreeds(breeds)

      if (lBsLen) {
        setLovedBreeds(lovedBreeds)
        setLoveBsCount(lBsLen)
      }

      setCount(bsLen)
    })

    fState = fStat
  }

  if (environment.isBrowser) {
    setOptions(JSON.parse(localStorage.catalogState ?? 'null') ?? options)
    delete localStorage.catalogState

    useEffect(() => {
      state.Resume()
      const S = state.state
      const { breeds, lovedBreeds } = S ?? { breeds: {}, lovedBreeds: {} }

      setBreeds(breeds)
      setLovedBreeds(lovedBreeds)

      window.addEventListener('scroll', () => {
        const bound = document.body.getBoundingClientRect()

        if (headerBarRef.current == undefined) return

        if (bound.top <= -300) {
          headerBarRef.current.style.display = 'none'
          filtersRef.current.classList.add('hidden')
        } else {
          headerBarRef.current.style.display = 'flex'
        }
      })

      setLoveBsCount(Object.values(lovedBreeds).length)
      setCount(Object.values(breeds).length)

      cBreeds = {} 
      cLovedBreeds = {}

      return () => {
        cBreeds = breeds
        cLovedBreeds = lovedBreeds
      }
    }, [])
  }

  const onFormSubmit = (ev: Event) => {
    ev.preventDefault()


  }

  const onKeywordUpdate = (ev: Event) => {
    const name = ev.currentTarget as HTMLInputElement
    const items = loveItemsRef.current

    filtersRef.current.classList.add('hidden')

    if (name.value.trim().length == 0) {
      items.classList.remove('hidden')
      setVisibility(false)
    } else {
      items.classList.add('hidden')
      setVisibility(true)
    }

    setOptions({ ...options, name: name.value, cursor: 0 })
  }

  const onHideSection = (ev: Event) => {
    const button = ev.currentTarget as HTMLButtonElement
    const selectedRef = { 'filters-hide': filtersRef, 'fav-hide': loveItemsRef }
    const setterMap = { 'filters-hide': setFilterView, 'fav-hide': setVisibility }
    const selected = selectedRef[button.id].current
    const selClassList = selected.classList

    if (selClassList.contains('hidden')) {
      selClassList.remove('hidden')
      selClassList.add('flex')
      setterMap[button.id](false)
    } else {
      selClassList.remove('flex')
      selClassList.add('hidden')
      setterMap[button.id](true)
    }

  }

  const onReload = () => {
    state.Reload()
      .catch(() => {
        console.log('Bad')
      })
  }

  const onPaginate = (counter?: number) => {
    if (counter == undefined) {
      setOptions
    }

    return () => {
      const items = itemsRef.current
      const pageCount = getPageCount(count, options) - 1

      let newValue: number

      if (options.cursor == pageCount && counter == 1) newValue = 0
      else if (options.cursor == 0 && counter == -1) newValue = pageCount
      else newValue = options.cursor + counter

      setOptions({ ...options, cursor: newValue })
      items.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const onSetPage = (ev: Event) => {
    const select = ev.currentTarget as HTMLSelectElement
    const items = itemsRef.current

    setOptions({ ...options, cursor: parseInt(select.value) })
    items.scrollIntoView()
  }

  const onToggleTheme = () => {
    const theme = localStorage.theme as 'dark'

    if (theme === 'dark')
      delete localStorage.theme
    else
      localStorage.theme = 'dark'

    setTheme(localStorage.theme)
  }

  const onChangeFilter = (ev: Event) => {
    const target = ev.currentTarget as HTMLInputElement | HTMLSelectElement
    const targetProp = target.name.match(/([a-z]+?)-filter/).at(1)
    const filters = { ...options.filters, [targetProp]: target.value }
    setOptions({ ...options, filters })
  }


  const image = ''
  const title = document.title = 'breedFind | All Dog Breeds Catalog'
  const description = 'Browse breedFind for a specific breed of dog you are longing for.'
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
      {(fState.status === FetchStateStatus.Success || cBreeds) &&
        <div className='catalog-page'>
          <header className='catalog-page__header' ref={headerBarRef}>
            <form className='header__search-bar' onSubmit={onFormSubmit}>
              <button
                ref={filtersButtonRef}
                className='header__filter-options'
                id='filters-hide'
                aria-label={`${isFilterHidden ? 'show' : 'hide'} filter options`}
                onClick={onHideSection}>
                <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'></path></svg>
              </button>

              <label className='search-bar__logo' htmlFor='search'>
                <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path></svg>
              </label>

              <input className='search-bar__text-field'
                id='search' type='text'
                placeholder='Dig for a dog breed...'
                noValidate
                autoComplete='off'
                value={options.name}
                onInput={onKeywordUpdate} />

            </form>

            <button aria-label={`toggle ${theme != 'dark' ? 'dark' : 'light'} theme`} className='header__theme-toggler' onClick={onToggleTheme}>
              {
                theme != 'dark' ?
                  <div className='theme-toggler__light'>
                    <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'></path></svg>
                  </div>
                  :
                  <div className='theme-toggler__dark'>
                    <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'></path></svg>
                  </div>
              }
            </button>
          </header>
          <main className='catalog-page__main'>
            <section className='main__filters-section'>
              <form className='filters-section__form hidden' ref={filtersRef}>
                {
                  (() => {
                    let breedGroups: string[] = [];
                    let breedLocations: string[] = [];
                    let breedSizes: string[] = [];

                    if (environment.isBrowser && !state.isNewStart()) {
                      state.Resume()

                      const {
                        breedGroups: bg,
                        breedLocations: bl,
                        breedSizes: bs } = state.state

                      breedGroups = bg
                      breedLocations = bl
                      breedSizes = bs
                    }

                    const ui: JSXInternal.Element = <>
                      <label htmlFor='filter-breed-group' className='form__groups-filter-title'>
                        Group
                      </label>
                      <select
                        onChange={onChangeFilter}
                        value={options.filters?.group}
                        name='group-filter'
                        id='filter-breed-group'
                        className='form__groups-filter'>
                        <option value=''>No Filter</option>
                        {
                          breedGroups.map(group => (
                            <option value={group}>{group}</option>
                          ))
                        }
                      </select>
                      <label htmlFor='filter-breed-locations' className='form__locations-filter-title'>
                        Origin
                      </label>
                      <input name='location-filter' id='filter-breed-locations'
                        onChange={onChangeFilter}
                        value={options.filters?.location}
                        className='form__locations-filter'
                        type='text' list='location-list'
                        placeholder='Filter by breed origin' />
                      <datalist id='location-list'>
                        {
                          breedLocations.map(location => (
                            <option value={location}>{location}</option>
                          ))
                        }
                      </datalist>
                      <label htmlFor='filter-breed-size' className='form__size-filter-title'>
                        Size
                      </label>
                      <select
                        onChange={onChangeFilter}
                        value={options.filters?.size}
                        name='size-filter'
                        id='filter-breed-size'
                        className='form__size-filter'>
                        <option value=''>No Filter</option>
                        {
                          breedSizes.map(size => (
                            <option value={size}>{size}</option>
                          ))
                        }
                      </select>
                    </>

                    if (environment.isServer) return ui



                    return ui
                  })()
                }
              </form>
            </section>
            <section className='main__love-section'>
              <nav className='love-section__title-nav'>
                <hr />
                <h2 className='title-nav__section-title'>
                  <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path></svg>
                  <span>
                    Love
                    {
                      loveBsCount != undefined && <span className='text-base font-base pb-2'> ({loveBsCount})</span>
                    }
                  </span>
                </h2>
                <hr />
                <button aria-label={`${isHidden ? 'show' : 'hide'} loved items`} className='title-nav__hide-section' id='fav-hide' onClick={onHideSection}>
                  {
                    isHidden ?
                      <svg class='w-9 h-9' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'></path></svg>
                      :
                      <svg class='w-9 h-9' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 15l7-7 7 7'></path></svg>
                  }
                </button>
              </nav>

              <div className='love-section__data-items'>
                <ul className='love-section__items flex' ref={loveItemsRef}>
                  <FavoriteItems options={options} breeds={breeds} lovedBreeds={lovedBreeds} />
                </ul>
              </div>
            </section>


            <section className='main__main-section'>
              <nav className='main-section__title-nav' ref={itemsRef}>
                <hr />
                <h2 className='title-nav__section-title'>
                  <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'></path></svg>
                  <span>
                    Breeds
                    {count != undefined && <span className='text-base font-base pb-2'>({count})</span>}
                  </span>
                </h2>
                <hr />
                <form className='main-section__controls' onSubmit={ev => ev.preventDefault()}>
                  <button className='controls__reload-data' onClick={onReload}>
                    <span>Reload</span>
                    <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'></path></svg>
                  </button>
                </form>
              </nav>

              <MessageNotification />

              <ul className='main-section__items'>
                <ListItems breeds={breeds} options={options} setCount={setCount} />
              </ul>

              <nav className='main-section__paginate'>
                <button aria-label='previous page' className='paginate__prev-button' onClick={onPaginate(-1)}>
                  <svg class='w-9 h-9' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7'></path></svg>
                </button>
                <select
                  aria-label='select page'
                  className='paginate__page-nav'
                  value={options.cursor >= getPageCount(count, options) ? 1 : options.cursor}
                  onChange={onSetPage}>
                  {
                    [...(new Array(getPageCount(count, options))).keys()].map(page => (
                      <option value={page}>Page {page + 1}</option>
                    ))
                  }
                </select>
                <button aria-label='next page' className='paginate__next-button' onClick={onPaginate(1)}>
                  <svg class='w-9 h-9' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'></path></svg>
                </button>
              </nav>
            </section>
          </main>
        </div>
      }
    </Fragment>
  )
}

const FavoriteItems: FunctionComponent<{ breeds: Breeds, lovedBreeds: LovedBreeds, options: CatalogOptions }> = (props) => {
  let ui: JSXInternal.Element[] = []

  for (const id in props.lovedBreeds) {
    const stats = props.lovedBreeds[id]
    const breed = props.breeds[id]
    const { data } = useWorld(id)
    const onBreedClick = () => {
      localStorage.catalogState = JSON.stringify(props.options)
      route(`/breeds/${id}`)
    }

    ui.push(
      <li className='items__love-item group' data-id={breed.id} key={breed.id}
        style={{
          backgroundImage: `url(${breed.images.at(0)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={onBreedClick}>
        <h2 className='love-item__breed-name'
          dangerouslySetInnerHTML={{ __html: breed.name }}>
        </h2>
        <p className='love-item__breed-other-names'
          dangerouslySetInnerHTML={{ __html: breed.otherNames.join(' / ') }}>
        </p>
        <div className='love-item__breed-bg-filter'></div>
      </li>
    )
  }

  return (
    <>
      {ui.reverse()}
    </>
  )
}

const ListItems: FunctionComponent<{ breeds: Breeds, options: CatalogOptions, setCount: StateUpdater<number> }> = (props) => {
  let ui: JSXInternal.Element[] = []
  const { breeds, options, setCount } = props
  const { filters } = options

  const filtered = Object.entries(breeds)
    .filter(([, breed]) => {
      return new RegExp(`(${options.name})`, 'i').test(breed.name)
    })
    .filter(([, breed]) => {
      if (!filters.group.length) return true
      if (breed.breedGroups == undefined) return false

      let isMatch = false

      for (const group of breed.breedGroups) {
        isMatch = new RegExp(filters.group, 'i').test(group)
      }

      return isMatch
    })
    .filter(([, breed]) => {
      if (!filters.location.length) return true
      if (breed.origins == undefined) return false

      let isMatch = false

      for (const location of breed.origins) {
        isMatch = new RegExp(filters.location, 'i').test(location)
      }

      return isMatch
    })
    .filter(([, breed]) => {
      if (!filters.size.length) return true
      if (breed.size == undefined) return false

      let isMatch = false

      for (const size of breed.size) {
        isMatch = new RegExp(filters.size, 'i').test(size)
      }

      return isMatch
    })

  setCount(filtered.length)

  const i = options.itemCount * options.cursor
  const j = options.itemCount * (options.cursor + 1)

  for (const [id, breed] of filtered.slice(i, j)) {
    const { data } = useWorld(id, options)
    const onBreedClick = () => {
      localStorage.catalogState = JSON.stringify(options)
      route('/breeds/' + id)
    }

    ui.push(
      <li className='items__item' data-id={breed.id} key={breed.id}>
        <figure className='item__breed-info'>
          <Image className='breed-info__image' src={breed.images.at(0)} alt={`${breed.name} image`} onClick={onBreedClick} />
          <figcaption className='breed-info__details'>
            <StatCounter data={data ? data[id] : null} />
            <h2 className='details__breed-name' dangerouslySetInnerHTML={{ __html: breed.name }} onClick={onBreedClick}></h2>
            <p className='details__breed-other-names'
              dangerouslySetInnerHTML={{ __html: breed.otherNames.join(' / ') }}>
            </p>
            <div className='details__breed-type'>{breed.type}</div>
            <hr />
            <ul className='details__breed-infos'>
              {
                breed.origins && <li className='breed-infos__origins'>
                  <label aria-label='breed origin' className='origins__label'>
                    <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path></svg>
                  </label>
                  <span className='origins__names'>{breed.origins.join(', ')}</span>
                </li>
              }
              <li className='breed-infos__count-images'>
                <label aria-label='breed images count' className='origins__images'>
                  <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'></path></svg>
                </label>
                <p className='images__message'>
                  {breed.images.length} available
                </p>
              </li>
              <li className='breed-infos__breed-id'>
                <data value={id}>
                  ID:
                  <span className='breed-id__value'>{id}</span>
                </data>
              </li>
            </ul>
          </figcaption>
        </figure>
      </li>
    )
  }

  return (
    <>{ui}</>
  )
}

function getPageCount(breedsCount: number, options: CatalogOptions) {
  return Math.floor(breedsCount / options.itemCount) + 1
}
