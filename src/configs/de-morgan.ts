import type { OptionsFiles } from '@antfu/eslint-config'
import type { OptionsOverrides, TypedFlatConfigItem } from '../types'
import { GLOB_SRC } from '@antfu/eslint-config'
import _deMorgan from 'eslint-plugin-de-morgan'

export function deMorgan(options: OptionsFiles & OptionsOverrides = {}): TypedFlatConfigItem[] {
  const {
    files = [GLOB_SRC],
  } = options
  return [
    {
      name: 'vida/de-morgan/rules',
      files,
      ..._deMorgan.configs.recommended,
    },
  ]
}
