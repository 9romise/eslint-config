import type { TypedFlatConfigItem } from '../types'
import { interopDefault } from '@antfu/eslint-config'

export async function deMorgan(): Promise<TypedFlatConfigItem[]> {
  const pluginDeMorgan = await interopDefault(import('eslint-plugin-de-morgan'))

  return [
    {
      name: 'vida/de-morgan/rules',
      ...pluginDeMorgan.configs.recommended,
    },
  ]
}
