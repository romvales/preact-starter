import { renderHook } from '@testing-library/preact-hooks'
import { useDocMetadata, setDocMetadata } from '@/helpers'

describe('useDocMetadata', () => {
  let testMetadata;

  beforeAll(() => {
    const meta1 = document.createElement('meta')
    meta1.setAttribute('charset', 'utf-8')

    testMetadata = meta1

    document.head.appendChild(meta1)
  })

  test('needs the metadata above to be appended into the <head> of the document.', () => {
    expect(document.querySelectorAll('meta')).toHaveLength(1)
  })

  test('should get all of the metadata set in the document.', () => {
    const { result } = renderHook(() => useDocMetadata())
    const cMs = result.current
    expect(cMs).toHaveLength(1)
    expect(cMs.at(0).getAttribute('charset')).toBe('utf-8')
  })

  test('should append and set a metadata to the document.', () => {
    setDocMetadata([
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0' },
      { name: 'author', content: 'romdevmod@gmail.com' },
    ])

    const { result } = renderHook(() => useDocMetadata())
    const cMs = result.current
    expect(cMs).toHaveLength(3)
    expect(cMs.at(1).getAttribute('name')).toBe('viewport')
    expect(cMs.at(1).getAttribute('content')).toBe('width=device-width,initial-scale=1.0')
    expect(cMs.at(2).getAttribute('name')).toBe('author')
    expect(cMs.at(2).getAttribute('content')).toBe('romdevmod@gmail.com')
  })

})
