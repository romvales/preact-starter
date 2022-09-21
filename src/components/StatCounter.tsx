import './StatCounter.pcss'

import { FunctionComponent, Fragment } from 'preact'
import { Image } from '@/components'

import loadingSvg from '@/assets/images/loading.svg'

export const StatCounter: FunctionComponent<StatProps> = props => {

  return (
    <Fragment>
      <ul className={`stat-counter ${props.className}`}>
        <li className='stat-counter__viewCount'>
          <svg class='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'></path></svg>
          {
            props.data && props.data.viewCount != undefined ?
              <span>{props.data.viewCount}</span>
              :
              <Image className='w-6' src={loadingSvg} />
          }
        </li>
        <li className='stat-counter__shareCount'>
          <svg class='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'></path></svg>
          {
            props.data && props.data.shareCount != undefined ?
              <span>{props.data.shareCount}</span>
              :
              <Image className='w-6' src={loadingSvg} />
          }
        </li>
        <li className='stat-counter__loveCount'>
          <svg class='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path></svg>
          {
            props.data && props.data.loveCount != undefined ?
              <span>{props.data.loveCount}</span>
              :
              <Image className='w-6' src={loadingSvg} />
          } 
        </li>
      </ul>
    </Fragment>
  )
}
