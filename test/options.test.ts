import { expect, it } from 'vitest'
import { applyOptions } from '../src'

it('default options', () => {
  const options = applyOptions({})

  expect(options).toHaveProperty('javascript')
  expect(options).toHaveProperty('stylistic')
  expect(options).toHaveProperty(['vue', 'overrides'])
})

it('default options with true', () => {
  const options = applyOptions({ vue: true })

  expect(options).toHaveProperty('javascript')
  expect(options).toHaveProperty('stylistic')
  expect(options).toHaveProperty(['vue', 'overrides'])
})

it('default options with false', () => {
  const options = applyOptions({ vue: false })

  expect(options).toHaveProperty('javascript')
  expect(options).toHaveProperty('stylistic')
  expect(options).not.toHaveProperty(['vue', 'overrides'])
})
