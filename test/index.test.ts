import { describe, expect, it } from 'vitest'
import { removeRawQuery } from '../src/tools'

describe('it will be work good', () => {
  it('should work remove raw query', () => {
    expect(removeRawQuery('/src/index.ts?raw')).toMatchInlineSnapshot(`"/src/index.ts"`)
  })
})
