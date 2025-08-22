import type { OptionsConfig, TypedFlatConfigItem } from '../types'
import { GLOB_SRC, interopDefault } from '@antfu/eslint-config'

export async function deMorgan(options: Exclude<OptionsConfig['deMorgan'], boolean> = {}): Promise<TypedFlatConfigItem[]> {
  const {
    files = [GLOB_SRC],
  } = options

  const pluginDeMorgan = await interopDefault(import('eslint-plugin-de-morgan'))

  return [
    {
      name: 'vida/de-morgan/rules',
      files,
      ...pluginDeMorgan.configs.recommended,
    },
  ]
}
