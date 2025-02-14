import type { Awaitable, ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { OptionsConfig } from './types'
import antfu, { resolveSubOptions } from '@antfu/eslint-config'
import { createOxcImportResolver } from 'eslint-import-resolver-oxc'
import { isPackageExists } from 'local-pkg'
import { deMorgan, pinia } from './configs'
import { overrides } from './overrides'
import { deepMerge } from './utils'

export function defineConfig(options: OptionsConfig & TypedFlatConfigItem = {}, ...userConfigs: TypedFlatConfigItem[]): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const {
    pinia: enablePinia = isPackageExists('pinia'),
  } = options

  const configs: Awaitable<TypedFlatConfigItem[]>[] = [
    deMorgan(),
  ]

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
      'import-x/resolver-next': [
        createOxcImportResolver(),
      ],
    },
  })
}

export * from './utils'
export * from '@antfu/eslint-config'
export default defineConfig
