import './About.pcss'

import { FunctionComponent } from 'preact'

import { Image } from '@/components'
import { useState, useRef } from 'preact/hooks'

import qrCodeImage from '@/assets/images/GCASH_QRCode.jpg'
import gcashLogo from '@/assets/images/gcash-logo.png'
import breedFindLogo from '@/assets/images/breedfind.png'

export const About: FunctionComponent<{}> = (props) => {

  // ref
  const modalRef = useRef<HTMLElement>()
  const gcashNumRef = useRef<HTMLInputElement>()

  const [form, setForm] = useState<EmailForm>({})

  const onFormSubmit = async (ev: Event) => {
    ev.preventDefault()
    
    location.href = `mailto:romdevmod@gmail.com?subject=${form.name} (${form.email})&body=${btoa(JSON.stringify(form))}`
  }

  const onInputUpdate = (ev: Event) => {
    const target = ev.currentTarget as HTMLInputElement | HTMLTextAreaElement
    setForm({ ...form, [target.name]: target.value })
  }

  const onToggleModal = () => {
    const target = modalRef.current
    const classList = target.classList

    if (classList.contains('hidden')) {
      classList.remove('hidden')
      classList.add('flex')
    } else {
      classList.remove('flex')
      classList.add('hidden')
    }


  }

  const onMobileNumberCopy = () => {
    navigator.clipboard.writeText('09636434432')
    navigator.vibrate([ 200 ])
  }

  return (
    <>
      <div className='about-page'>
        <header className='about-page__header'>
          <div className='header__logo'>
            <Image src={breedFindLogo} alt='fundraising logo' className='bg-transparent' />
          </div>

          <h3 className='header__fr-main'>Asking for help,</h3>

          <p className='header__fr-message'>
            Good day, I am asking for a small help from all of you who found this app. Currently I am unemployed 
            (trying to find a job) and struggling with my personal financial issues as a result, both
            my mental and physical health becomes a lot worse than before, I am in agonizing right now from various
            symptoms of inflammatory bowel disease, constipation, rectal and colon bleeding, these drastically
            affected my mental health and my overall well-being. A small help from all of you is hugely
            enough to help myself return to a much more stable state. 
          </p>

          <p className='header__fr-small-message'>
            I don't want to leave behind my 3 lovely dogs (1 golden retriver, 2 cross-breed 'aspin'), they
            are my inspirations that led me to make this web app.
          </p>
        </header>

        <main className='about-page__main'>

          <figure className='main__gcash-qrcode'>
            <aside className='qr-modal hidden' ref={modalRef}>
              <Image lazy src={qrCodeImage} onClick={onToggleModal} />
            </aside>
            <figcaption>
              <p className='gcash-qrcode__message'></p>
              <button className='gcash-qrcode__qr-modal' onClick={onToggleModal}>
                <Image lazy src={gcashLogo} className='qr-modal__logo' />
                <span>Scan QR Code</span>
              </button>
              <span className='gcash-qrcode__separator'>or</span>
              <div className='gcash-qrcode__mobile'>
                <input type='tel' className='mobile__mobile' value={'09*****4432'} readOnly ref={gcashNumRef} />
                <button title='Copy GCash Number' className='mobile__copy' onClick={onMobileNumberCopy}>
                  <svg class='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'></path></svg>
                </button> 
              </div>
            </figcaption>
          </figure>
        </main>

        <footer className='about-page__footer'>
          <form className='footer__email-form' onSubmit={onFormSubmit}>
            <h2 className='email-form__title'>Got concerns? Connect with me.</h2>
            <p className='email-form__message'>
              If you have any concerns with the information that I have scraped or
              about how I asked for help, Please contact me by filling this form so
              that we could settle the issue.
            </p>
            <p className='email-form__note'>
              <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>
              <span>An email dialog will popup after you submitted this form with the message that you have provided encoded as base64.</span>
            </p>
            <section className='email-form__fname'>
              {
                !form.name ?
                  <label htmlFor='email-fullname' className='email-form__fname-label'>
                    Full Name
                  </label>
                  :
                  <span></span>
              }

              <input name='name' value={form.name} id='email-fullname' type='text' className='email-form__fname-textfield' autoComplete='off'
                onInput={onInputUpdate} required />
            </section>

            <section className='email-form__email'>
              {
                !form.email ?
                  <label htmlFor='email-address' className='email-form__email-label'>
                    Email
                  </label>
                  :
                  <span></span>
              }

              <input name='email' value={form.email} id='email-address' type='email' className='email-form__email-textfield' autoComplete='off'
                onInput={onInputUpdate} required />
            </section>

            <section className='email-form__phone'>
              {
                !form.mobile ?
                  <label htmlFor='email-mobile' className='email-form__phone-label'>Mobile</label>
                  :
                  <span></span>
              }

              <input name='mobile' value={form.mobile} id='email-mobile' type='tel' className='email-form__phone-textfield' autoComplete='off'
                onInput={onInputUpdate} required />
            </section>

            <section className='email-form__message'>
              {
                !form.message ?
                  <label htmlFor='email-message' className='email-form__message'>Message</label>
                  :
                  <span></span>
              }

              <textarea name='message' value={form.message} id='email-message' className='email-form__message-textarea'
                onInput={onInputUpdate} required rows={8}></textarea>
            </section>

            <input type='submit' value='Send' className='email-form__submit-btn' />
          </form>
        </footer>
      </div>
    </>
  )
}
