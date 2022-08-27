import { Fragment, FunctionComponent } from 'preact'
import { getServerSideProps, useAsyncDataFetch, FetchStateStatus } from '@/helpers'

import dogVideo from '@/assets/images/hapi-golden-retriever.mp4'
import { useState } from 'preact/hooks'


export const LPageView: FunctionComponent<{ path: string, data?: 1 }> = (props) => {
  const [ user, setUser ] = useState()
  const fState = useAsyncDataFetch({ onServer: false }, async () => { 
    const user = await fetch('https://random-data-api.com/api/v2/users')
      .then(res => res.json())
      .catch(err => err.toString())

    setUser(user)
  })

  return (
    <>
      {renderUserInfo(fState, user)}
      <h1 className='headline bg-gray-300 font-light'>Smilling golden doggo {clientRuntimeConfig.BASE_URL}</h1>
      <video src={dogVideo} autoPlay loop></video>
    </>
  )
}

function renderUserInfo(fState: FetchState, userInfo: any) {
  switch(fState.status) {
  case FetchStateStatus.Success:
    return (
      <span>{JSON.stringify(userInfo)}</span>
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

getServerSideProps(LPageView, async() => {
  return { data: 1 }
})

