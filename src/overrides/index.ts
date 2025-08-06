import type { OptionsConfig } from '@antfu/eslint-config'
import { javascript } from './javascript'
import { stylistic } from './stylistic'

/// keep-sorted
export const antfuConfig: OptionsConfig = {
  javascript,
  stylistic,
}
