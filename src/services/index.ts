import { useStore } from '@preact-hooks/unistore'
import { route } from 'preact-router'
import { Store } from 'unistore'
import axios from 'axios'
import { environment } from '@/helpers'
import { useWorld } from './world'

export { useWorld } from './world'
export class AppStateStore {
  static _lkey: string = 'breedfind-web'
  private _store: Store<{ A: AppState, world: World }>
  private _state: AppState

  get store() {
    return this._store
  }
  
  get state() {
    this.Resume()
    return this._store.getState().A
  }

  get lkey() {
    return AppStateStore._lkey
  }

  setRoute(pathname: string, replace: boolean) {
    route('/breeds', true)
  }

  isNewStart() {
    return localStorage.getItem(this.lkey) == undefined
  }

  Start = () => {
    this.Reload()
      .then(res => {
        this.Resume()
        this.setRoute('/breeds', true)
      })
      .catch(err => {
        if (environment.isBrowser) this.Resume()
        if (this.state?.startedAt) {
          this.setRoute('/breeds', true)
        }
      })
  }

  Reload = async () => {
    return axios.get('/api/breeds')
      .then(res => {
        const { lovedBreeds } = this.state ?? { lovedBreeds: {} }
        const breeds: Breeds = res.data
        const ABreeds = Object.values(breeds)

        const breedLocations = [...new Set(ABreeds.map(breed => breed.origins).filter(origins => origins).flat())]
        const breedGroups = ['Hound', 'Companion', 'Terrier', 'Herding', 'Toy', 'Working', 'Sporting', 'Northern']
        const breedSizes = [
          ...new Set(ABreeds.map(breed => breed.size)
            .filter(size => size)
            .flat()
          )
        ].slice(0, 5)

        this.store.setState({
          A: {
            startedAt: Date.now(),
            breeds,
            lovedBreeds,
            fundNotification: { closed: false, closedAt: 0 },
            breedLocations,
            breedGroups,
            breedSizes,
          },
        })

        localStorage.setItem(this.lkey, JSON.stringify(this.store.getState()))
      })
  }

  Resume = () => {
    this.store.setState(JSON.parse(localStorage.getItem(this.lkey)))
    this._state = this.store.getState().A
  }

  Close = () => {
    this.store.setState({})
    this._state = {} as any
  }

  private _debounceId: NodeJS.Timeout;
  Add = async (breed: Breed) => {
    if (this._debounceId) {
      clearTimeout(this._debounceId)
      this._debounceId = null
    }

    this._debounceId = setTimeout(() => {
      this.Resume()
      const lovedBreeds = this.state.lovedBreeds
      let lovedBreed = lovedBreeds[breed.id]

      if (lovedBreed)
        lovedBreeds[breed.id].count++
      else
        lovedBreeds[breed.id] = { count: 0, lovedAt: Date.now() }

      this.store.setState({ A: Object.assign(this.state, { lovedBreeds }) }, false)
      localStorage.setItem(this.lkey, JSON.stringify(this.store.getState()))

      Promise.resolve()
    }, 1e3)
  }

  constructor(store?: Store<{ A: AppState, world: World }>) {
    this._store = store ?? useStore()
  }

  static async GetServerBreeds() {
    const ax = axios.create({ baseURL: 'http://localhost:5900/' })
    return (await ax.get('/breeds')).data
  }

}
