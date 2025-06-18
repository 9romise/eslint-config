import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import { javascript } from './javascript'
import { stylistic } from './stylistic'

export const overrides: Partial<Record<keyof OptionsConfig, TypedFlatConfigItem['rules']>> = {
  javascript,
  stylistic,
}
