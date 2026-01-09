import type { Linter } from 'eslint'
import type { OptionsConfig, TypedFlatConfigItem } from '../types'
import { GLOB_SRC, interopDefault } from '@antfu/eslint-config'

export async function e18e(options: Exclude<OptionsConfig['e18e'], boolean> = {}): Promise<TypedFlatConfigItem[]> {
  const {
    files = [GLOB_SRC],
    overrides,
  } = options

  const pluginE18e = await interopDefault(import('@e18e/eslint-plugin'))

  const recommendedConfig = pluginE18e.configs!.recommended as Linter.Config

  return [
    {
      name: 'vida/e18e/rules',
      files,
      ...recommendedConfig,
      rules: {
        ...recommendedConfig.rules,
        ...overrides,
      },
    },
  ]
}
