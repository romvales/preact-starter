import { FunctionComponent, render } from 'preact'
import { getServerSideProps, useAsyncDataFetch, FetchStateStatus, setDocMetadata } from '@/helpers'

import dogVideo from '@/assets/images/hapi-golden-retriever.mp4'
import { useState } from 'preact/hooks'
import axios from 'axios'

export const LPageView: FunctionComponent<{ path: string, data?: 1 }> = (props) => {
  const [user, setUser] = useState()

  const [ fState, fRCb ] = useAsyncDataFetch({ onServer: true, reuse: true }, async () => {
    const user = await axios.get('https://random-data-api.com/api/v2/users').then(res => res.data)
    
    document.title = `${user.username} ${new Date}`

    return { user }
  })

  fRCb(({ user }) => {
    setUser(user) 
  })

  return (
    <>
      <p>{JSON.stringify(fState)}</p>
      <h1 className='headline bg-gray-300 font-light'>Smilling golden doggo {clientRuntimeConfig.BASE_URL}</h1>
      <video src={dogVideo} autoPlay loop></video>
      <div>
        {renderUserInfo(fState, user)}
      </div>
    </>
  )
}

function renderUserInfo(fState: FetchState, userInfo: any) {
  switch (fState.status) {
    case FetchStateStatus.Success:
      return (
        <pre className='w-96'>{JSON.stringify(userInfo)}</pre>
      )
    case FetchStateStatus.Pending:
      return (
        <span>Waiting for response...</span>
      )
    case FetchStateStatus.Error:
      return (
        <span>{fState.message}</span>
      )
  }
}

getServerSideProps(LPageView, async () => {
  const user = await axios.get('https://random-data-api.com/api/v2/users')
    .then(res => {
      const user = res.data
      
      setDocMetadata([
        { name: 'uid', content: user.uid },
        { name: 'avatar', content: user.avatar },
        { name: 'email', content: user.email },
      ])

      return user
    })
    .catch(() => {})

  return { data: 1, user }
})

