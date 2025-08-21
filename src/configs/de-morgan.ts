import type { OptionsConfig, TypedFlatConfigItem } from '../types'
import { GLOB_SRC } from '@antfu/eslint-config'
import pluginDeMorgan from 'eslint-plugin-de-morgan'

export function deMorgan(options: Exclude<OptionsConfig['deMorgan'], boolean> = {}): TypedFlatConfigItem[] {
  const {
    files = [GLOB_SRC],
  } = options

  return [
    {
      name: 'vida/de-morgan/rules',
      files,
      ...pluginDeMorgan.configs.recommended,
    },
  ]
}
