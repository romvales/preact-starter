import { FunctionComponent } from 'preact'
import { useContext } from 'preact/hooks'
import { useSignal } from '@preact/signals'
import { 
  BuilderContext, 
  BuilderService, 
  ImageKitService } from '@/services'
import { contentProps } from '@/services/Builder'

import { 
  CCButton, 
  CCIcon, 
  CCLabel,
  CCTextfield,
  CCSkeleton,
  CCImage,
} from '@/components/chunks'

import uploadPictureArea from '~Image/uploadPictureArea.svg'
import { JSXInternal } from 'preact/src/jsx'
import { gatherNamedFormfields } from '.'

export type BasicInfoStep1Props = {

}

export const BasicInfoStep1: FunctionComponent<BasicInfoStep1Props> = props => {
  const ctx: BuilderService = useContext(BuilderContext)
  const content: contentProps = ctx.useContent()
  
  const onFormSubmit = (ev: JSXInternal.TargetedEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    const form = (ev.target as HTMLFormElement).elements

    gatherNamedFormfields(form, content.forms.fields)
      .then((fset) => {
        const fname = fset.fname.value        
        const lname = fset.lname.value
        const mname = fset.mname.value
        const fullName = [ fname, mname, lname ].join(' ').replace(/\s{2,}/, ' ')

        ctx.setDataForm({ fname: fullName })
        ctx.next()
      })
  }

  const onClickPhotoCreate = () => {
    const input = document.createElement('input')

    input.type = 'file'
    input.accept = 'image/.png,.jpg'
    input.click()

    input.onchange = () => {
      const imagekit = ImageKitService.imagekitClientSide()
      const file = input.files.item(0)
      const fr = new FileReader()

      fr.addEventListener('load', () => {
        imagekit.upload({
          file,
          fileName: ctx.state.uuid,
          tags: ['profile'],
        })
          .then(res => ctx.setDataForm({ profileUrl: res.url }))

        fr.removeEventListener('load', null)
      }, false)
      
      fr.readAsDataURL(file)
    }
  }

  return (
    <div className='onboard onboardBuilderBasicInfo step1' role='article'>
      <div className='onboardBuilderMessage'>
      
      </div>

      <form 
        className='onboardBuilderForm'
        onSubmit={onFormSubmit}>
        
        {
          ctx.state.data?.profileUrl?.length ?
          <>
            <div onClick={onClickPhotoCreate} className='uploadPictureArea' role='button'>
              <CCImage src={ctx.state.data?.profileUrl} className={'pictureArea'} />
            </div>
          </>
          :
          <>
            <div onClick={onClickPhotoCreate} className='uploadPictureArea' dangerouslySetInnerHTML={{ __html: uploadPictureArea }} role='button' />
          </>
        }

        {
          content?.forms ? 
            <>
              <CCLabel>
                {content.forms.fields.control1.label}
                <CCTextfield
                  required
                  validate={content.forms.fields.control1.validate}
                  name={content.forms.fields.control1.name}
                  placeholder={content.forms.fields.control1.placeholder}
                  type='text'></CCTextfield>
              </CCLabel>
              <CCLabel>
                {content.forms.fields.control2.label}
                <CCTextfield 
                  required
                  validate={content.forms.fields.control2.validate}
                  name={content.forms.fields.control2.name}
                  placeholder={content.forms.fields.control2.placeholder}
                  type='text'></CCTextfield>
              </CCLabel>
              <CCLabel>
                {content.forms.fields.control3.label}
                <CCTextfield 
                  required
                  validate={content.forms.fields.control3.validate}
                  name={content.forms.fields.control3.name}
                  placeholder={content.forms.fields.control3.placeholder}
                  type='text'></CCTextfield>
              </CCLabel>

              <CCButton
                rounded='md'
                variant='popup'
                type='submit'>
                <div className='ccButtonTextWrapper'>
                  <span className='cbtwLabel'>
                    {content.forms.submitText}
                  </span>
                  <CCIcon 
                    iconSet='heroicons/solid' 
                    icon='arrow-small-right' 
                    iconSize='sm'></CCIcon>
                </div>
              </CCButton>
            </> 
            : 
            <>
              <CCSkeleton 
                className='mb-2 mt-8'
                height='1.8rem'
                width='10rem'
                rounded='md'>
                
              </CCSkeleton>
              <CCSkeleton 
                className='mb-3'
                height='2.7rem' 
                rounded='md'
                animated
                animationClass='animate-pulse'>
              </CCSkeleton>
              <br />
              <CCSkeleton 
                className='mb-2'
                height='1.8rem'
                width='10rem'
                rounded='md'>
                
              </CCSkeleton>
              <CCSkeleton 
                className='mb-3'
                height='2.7rem' 
                rounded='md'
                animated
                animationClass='animate-pulse'>
              </CCSkeleton>
              <br />
              <CCSkeleton 
                className='mb-2'
                height='1.8rem'
                width='10rem'
                rounded='md'>
                
              </CCSkeleton>
              <CCSkeleton 
                className='mb-2'
                height='2.7rem' 
                rounded='md'
                animated
                animationClass='animate-pulse'>
              </CCSkeleton>
              <br />
              <CCSkeleton 
                className='mt-8'
                height='4rem' 
                rounded='md'
                animated>
              </CCSkeleton>
            </>
        }
      </form>
    </div>
  )
}
