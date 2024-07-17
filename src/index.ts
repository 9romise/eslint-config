import antfu, { resolveSubOptions } from '@antfu/eslint-config'
import type { Awaitable, TypedFlatConfigItem } from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import type { OptionsConfig } from './types'
import { pinia } from './configs'
import { overrides } from './overrides'
import { deepMerge } from './utils'

export function defineConfig(options: OptionsConfig & TypedFlatConfigItem = {}, ...userConfigs: TypedFlatConfigItem[]) {
  const {
    pinia: enablePinia = isPackageExists('pinia'),
  } = options

  const configs: Awaitable<TypedFlatConfigItem[]>[] = []

  if (enablePinia)
    // @ts-expect-error safe type
    configs.push(pinia(resolveSubOptions(options, 'pinia')))

  const antfuConfig: OptionsConfig = {
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
      overrides: overrides.stylistic,
    },
    javascript: {
      overrides: overrides.javascript,
    },
    vue: {
      overrides: overrides.vue,
    },
  }

  return antfu(
    deepMerge(antfuConfig, options),
    ...configs,
    ...userConfigs,
  ).prepend({
    name: 'vida/imports/setup',
    settings: {
      'import-x/resolver': 'oxc',
    },
  })
}

export * from './utils'
export * from '@antfu/eslint-config'
export default defineConfig
