import { render } from '@testing-library/preact'
import { App } from '../src/App'

describe('App', () => {

  test('should contain a heading with a pangram message.', () => {
    history.replaceState({}, null, '/home')
    const { container } = render(<App />)
    const headline: HTMLHeadingElement = container.querySelector('.headline')

    expect(headline.textContent).toBe('The quick brown fox jumps over the lazy dog.')
  })

})
