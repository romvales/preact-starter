import { FunctionComponent } from 'preact'
import { getServerSideProps } from '@/helpers'

import dogVideo from '@/assets/images/hapi-golden-retriever.mp4'

export const LPageView: FunctionComponent<{ path: string }> = (props) => {
  return (
    <>
      <h1 className='headline bg-gray-300 font-light'>Smilling golden doggo {clientRuntimeConfig.BASE_URL}</h1>
      <video src={dogVideo} autoPlay loop></video>
    </>
  )
}

getServerSideProps(LPageView, async() => {
  return { data: 1 }
})
