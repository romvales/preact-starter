import './404.pcss'

import { FunctionComponent } from 'preact'
import { Link } from 'preact-router'

export const NotFound: FunctionComponent<{}> = (props) => {
  return (
    <>
      <main className='page-not-found'>

        <article className='page-not-found__message'>
          <h1 className='message__heading'>Page Not Found</h1>
          <p className='message__main'>The page you were trying to access does not exist.</p>
          <figure className='message__alt'>
            <ul className='alt__links'>
              <li className='links__item'>
                <Link className='item__link' href={`/breeds`}>Catalog Page</Link>
              </li>
            </ul>
            <figcaption>
              <p>Are you lost?</p>
            </figcaption>
          </figure>
        </article>

      </main> 
    </>
  )
}
