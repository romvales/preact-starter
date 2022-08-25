import { FunctionComponent } from 'preact'

import dogVideo from '@/assets/images/hapi-golden-retriever.mp4'

export const LPageView: FunctionComponent<{ path: string }> = (props) => { 
  return (
    <>
      <h1 className='headline bg-gray-600 font-light'>Smiling golden doggo {clientRuntimeConfig.BASE_URL}</h1> 
      <video src={dogVideo} autoPlay loop></video> 
    </>
  )
}
