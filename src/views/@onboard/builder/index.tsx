import './index.pcss'

import { FunctionComponent } from 'preact'
import { Router, route } from 'preact-router'

import { useLayout } from '@/layouts'
import { CCPortal, CCSkeleton } from '@/components/chunks'
import { BuilderService } from '@/services'

import { 
  BuilderInitialPage,
  BuilderStep1,  //
  BuilderStep2,  //
  BuilderStep3,  //
  BuilderStep4,  //
  BuilderStep5,  //
  BuilderStep6,  //
  BuilderStep7,  //
  BuilderStep8,  //
  BuilderStep9,  //
  BuilderStep10, //
  BuilderStep11, //
  BuilderStep12, //
  BuilderStep13, //
} from './%stepComponentView'

import {
  BuilderContext,
  OnboardBuilderUrl,
} from '@/services'
import { useEffect } from 'preact/hooks'

export const route_options: RouteOptions = {
  altUrl: '/builder/:step*',
}

const onboard_builder_route: FunctionComponent = props => {
  useLayout('@onboard/builder')
  
  const path = window.location.pathname
  const builderService = new BuilderService()
  const content = builderService.useContent()
  const progressPathRegex = /^\/builder\/progress\/(.+)?$/
  const isInProgress = progressPathRegex.test(path)

  useEffect(() => {

    // When a user accidentally navigated to a page without getting the
    // builderService started or there is no saved session, we redirect 
    // them to the initial page of the builder route.
    if ((isInProgress && !builderService.state.started) || (isInProgress && !builderService.state.prevState.length)) {
      setTimeout(() => route({ url: '/builder/', replace: true }))
    }

  }, [window.location.pathname])

  return (
    <BuilderContext.Provider value={builderService}>
      <CCPortal selector='.appBuilderHeader'>
        <div className='abhWrapper'>
          {
            !isInProgress ?
            <div className='builderHeader builderHeaderInitial'>
              <div className='logo'>
                idream
              </div>
            </div>
            :
            <div className='builderHeader builderHeaderProgress'>
              <div className='logo'>
                idream
              </div>
              <div className='bhpStatus'>
                {
                  content?.builderHeaderContent ?
                    <>
                      <div className='bhpStatusCurrent'>{content.builderHeaderContent.current}</div>
                      <div className='bhpStatusText'>{content.builderHeaderContent.desc}</div>
                    </>
                    :
                    <>
                      <CCSkeleton 
                        className='mb-2'
                        height='1.5rem' 
                        width='6rem' 
                        animated 
                        animationClass='animate-pulse' 
                        rounded='md'></CCSkeleton>
                      <CCSkeleton 
                        rounded='md'
                        height='2rem' 
                        width='10rem'
                        animated
                        animationClass='animate-pulse'></CCSkeleton>
                    </>
                }
              </div>
            </div>
          }
        </div>
      </CCPortal>

      <Router url={path}>
        <BuilderInitialPage path={'/builder/'} />
        <BuilderStep1 path={OnboardBuilderUrl.Step1} />
        <BuilderStep2 path={OnboardBuilderUrl.Step2} />
        <BuilderStep3 path={OnboardBuilderUrl.Step3} />
        <BuilderStep4 path={OnboardBuilderUrl.Step4} />
        <BuilderStep5 path={OnboardBuilderUrl.Step5} />
        <BuilderStep6 path={OnboardBuilderUrl.Step6} />
        <BuilderStep7 path={OnboardBuilderUrl.Step7} />
        <BuilderStep8 path={OnboardBuilderUrl.Step8} />
        <BuilderStep9 path={OnboardBuilderUrl.Step9} />
        <BuilderStep10 path={OnboardBuilderUrl.Step10} />
        <BuilderStep11 path={OnboardBuilderUrl.Step11} />
        <BuilderStep12 path={OnboardBuilderUrl.Step12} />
        <BuilderStep13 path={OnboardBuilderUrl.Step13} />
      </Router>
    </BuilderContext.Provider>
  )
}

export default onboard_builder_route
