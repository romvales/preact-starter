
import { FunctionComponent } from 'preact'
import { useContext } from 'preact/hooks'
import { JSXInternal } from 'preact/src/jsx'
import { 
  CCButton,
  CCTextfield,
  CCDatefield,
  CCLabel,
  CCIcon, 
  CCImage } from '@/components/chunks'

import {
  BuilderContext,
  BuilderService } from '@/services'
import { initApiAxios } from '@/helpers/axios'

export type SummaryStep10Props = {}

export const SummaryStep13: FunctionComponent<SummaryStep10Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const apiEndpoint = initApiAxios()

  const onFormSubmit = async (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    const uuid = ctx.state.uuid
    const pageUrl = `${window.location.origin}/builder/preview/${uuid}`
    const title = new URL(window.location.href).searchParams.get('cvResumeTitle') ?? ctx.state.data.mprops.exps ? ctx.state.data.mprops.exps[0]?.title : 'Applicant'

    await apiEndpoint.put(`/@onboard_builder/update/${uuid}`, { data: ctx.state.data })

    apiEndpoint.put('/print', { pageUrl, uuid, fname: ctx.state.data.fname, title }, { responseType: 'blob' })
      .then(res => {
        const fileUrl = URL.createObjectURL(res.data)
        const a = document.createElement('a')

        a.download = `${ctx.state.data.fname} (${ctx.state.data.title.length ? ctx.state.data.title : title}).pdf`
        a.href = fileUrl
        a.click()
        a.remove()
      })
  }

  const onNavItemClicked = (i: number) => {
    ctx.setState({ ...ctx.state, current: i, data: JSON.parse(localStorage.saveState) })
    ctx.seek()
  }

  return (
    <div className='onboard onboardBuilderSummary' role='article'>
      <div className='onboardBuilderMessage'>
        

        <nav className='obmSummaryNav'>
          <ul className='obmSummaryNavList'>
          {
            ctx.contents.slice(0, -1).map(({ builderHeaderContent }, i) => (
            <li className='obmSummaryNavListItem' key={i}>
              <details>
                <summary>
                  {builderHeaderContent.desc}
                </summary>
                {/* {JSON.stringify(ctx.state.data)} */}
              </details>
              <CCButton onClick={() => onNavItemClicked(i)}>
                Change
                <CCIcon iconSet='heroicons/outline' icon='chevron-double-right' iconSize='sm'></CCIcon>
              </CCButton>
            </li>
            ))
          }
          </ul>
        </nav>
      </div>
      
      <form className='onboardBuilderForm justify-start' onSubmit={onFormSubmit}>
        <CCButton
          rounded='md'
          variant='popup'
          type='submit'>
          <div className='ccButtonTextWrapper'>
            <span className='cbtwLabel'>
              Download CV
            </span>
          </div>
        </CCButton>
      </form>
    </div>
  )
}