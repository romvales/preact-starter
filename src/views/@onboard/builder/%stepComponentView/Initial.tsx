import { FunctionComponent } from 'preact'
import { CCButton, CCIcon } from '@/components/chunks'
import { useContext } from 'preact/hooks'
import { BuilderContext } from '@/services'
import { JSXInternal } from 'preact/src/jsx'
import { UserResumeProp } from '@/types/props/user'

export type InitialProps = {
  path?: string
  message?: number
}

export const Initial: FunctionComponent<InitialProps> = props => {
  const ctx = useContext(BuilderContext)

  const onStartCreate = (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    ctx.start<UserResumeProp<any>>({
      title: new URL(location.href).searchParams.get('cvResumeTitle') ?? '',
      profileUrl: '',
      fname: '',
      bdate: -1,
      bplace: '',
      children: 0,
      cship: -1,
      religion: '',
      desc: '',
      rstatus: -1,
      addrs: [],
      edu: [],
      mprops: {},
    })

    console.log(ctx.state)
  }

  return (
    <div className='onboardBuilderInitial' role='article'>
      <div className='onboardBuilderMessage'>
        
      </div>

      <form className='onboardBuilderForm' onSubmit={onStartCreate}>
        <CCButton
          rounded='md'
          variant='popup'
          type='submit'>
          <div className='ccButtonTextWrapper'>
            <CCIcon
              iconSet='heroicons/outline'
              icon='pencil-square'
              iconSize='sm'></CCIcon>
            <span className='cbtwLabel'>
              Create now
            </span>
          </div>
        </CCButton>
      </form>
    </div>
  )
}