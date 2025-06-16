import type { OptionsFiles } from '@antfu/eslint-config'
import type { OptionsOverrides, TypedFlatConfigItem } from '../types'
import { GLOB_SRC, interopDefault } from '@antfu/eslint-config'

export async function nuxt(options: OptionsFiles & OptionsOverrides = {}): Promise<TypedFlatConfigItem[]> {
  const {
    files = [GLOB_SRC],
  } = options

  const pluginNuxt = await interopDefault(import('@nuxt/eslint-plugin'))

  return [
    {
      name: 'vida/nuxt/rules',
      files,
      plugins: {
        nuxt: pluginNuxt,
      },
      rules: {
        'nuxt/prefer-import-meta': 'error',
        'nuxt/nuxt-config-keys-order': 'error',
      },
    },
  ]
}
