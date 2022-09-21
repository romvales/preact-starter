import { isDevelopment } from '@/helpers/ssr-utils'
import Gun from 'gun'
import {
  useEffect,
  useState,
} from 'preact/hooks'

export function useWorld(id?: string, observe?: any) {
  let breedId = id ?? ''

  const gunKey = isDevelopment ? 'breedfind-world:dev' : 'breedfind-world:real'
  const client = Gun(new URL(document.URL).origin + '/gun')
  const world = client.get(gunKey)

  const [worldData, setData] = useState<World>({ helpCount: 0, [breedId]: { viewCount: null, shareCount: null, loveCount: null } })

  useEffect(() => {
    const worldCallback = data => {
      const { helpCount } = data ?? { helpCount: 0 }
      setData({ helpCount })

      if (breedId !== '') {
        const callback = P => {
          const page = P ?? { viewCount: 0, shareCount: 0, loveCount: 0 }

          setData({
            helpCount: helpCount ?? 0,
            [breedId]: { viewCount: page.viewCount, shareCount: page.shareCount, loveCount: page.loveCount, }
          })
        }

        world.get('pages').get(breedId).once(callback).off()
      }

    }

    world.once(worldCallback)

    return () => {
      console.log('Unmounting...', breedId)
      world.off()
      world.get('pages').get(breedId).off()
    }
  }, [ observe ])

  const helpIncre = () => {
    world.put({ helpCount: (worldData.helpCount ?? 0) + 1 })
  }

  const baseIncre = (id: string, increSet: number[]) => {
    world.get('pages').get(id).once(P => {
      const page = P ?? { viewCount: 0, shareCount: 0, loveCount: 0 }

      world.get('pages').get(id).put({
        viewCount: page.viewCount + increSet[0],
        shareCount: page.shareCount + increSet[1],
        loveCount: page.loveCount + increSet[2],
      })
    })
  }

  const viewIncre = (id: string) => baseIncre(id, [1, 0, 0])

  const shareIncre = (id: string) => baseIncre(id, [0, 1, 0])
  const loveIncre = (id: string, count: number = 1) => {
    baseIncre(id, [0, 0, count])
  }

  return { data: worldData, helpIncre, viewIncre, shareIncre, loveIncre }
}
