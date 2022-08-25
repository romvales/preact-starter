import goldenRetrieverMp4 from '@/assets/images/hapi-golden-retriever.mp4'
import { FunctionComponent } from 'preact'

export const LPageView: FunctionComponent<{ path: string }> = (props) => {
  return (
    <>
      <h1 className='headline'>Smiling golden doggo</h1>
      <video src={goldenRetrieverMp4} autoPlay loop></video>
    </>
  )
}
