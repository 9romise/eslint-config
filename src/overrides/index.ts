import type { OptionsConfig } from '@antfu/eslint-config'
import { javascript } from './javascript'
import { stylistic } from './stylistic'
import { typescript } from './typescript'
import { vue } from './vue'

/// keep-sorted
export const antfuConfig: OptionsConfig = Object.freeze({
  javascript,
  stylistic,
  typescript,
  vue,
})
