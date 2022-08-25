import { render } from '@testing-library/preact'
import { App } from '../src/App'

describe('App', () => {

  beforeAll(() => {
    window.clientRuntimeConfig = {
      BASE_URL: 'http://localhost:3000'
    }
  })

  test('should contain a heading with a pangram message.', () => {
    history.replaceState({}, null, '/home')
    const { container } = render(<App />)
    const headline: HTMLHeadingElement = container.querySelector('.headline')

    expect(headline.textContent).toBe(`Smiling golden doggo ${clientRuntimeConfig.BASE_URL}`)
  })

})
