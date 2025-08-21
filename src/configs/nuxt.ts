import type { OptionsConfig, TypedFlatConfigItem } from '../types'
import { ensurePackages, GLOB_SRC, interopDefault } from '@antfu/eslint-config'

export async function nuxt(options: Exclude<OptionsConfig['nuxt'], boolean> = {}): Promise<TypedFlatConfigItem[]> {
  const {
    files = [GLOB_SRC],
    overrides = {},
  } = options

  await ensurePackages([
    '@nuxt/eslint-plugin',
  ])

  const pluginNuxt = await interopDefault(import('@nuxt/eslint-plugin'))

  return [
    {
      name: 'vida/nuxt/setup',
      languageOptions: {
        globals: {
          defineNuxtConfig: 'readonly',
        },
      },
      plugins: {
        nuxt: pluginNuxt,
      },
    },
    {
      name: 'vida/nuxt/rules',
      files,
      rules: {
        'nuxt/prefer-import-meta': 'error',
        'nuxt/nuxt-config-keys-order': 'error',

        ...overrides,
      },
    },
  ]
}
