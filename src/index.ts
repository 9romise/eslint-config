import type { Awaitable, ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { OptionsConfig } from './types'
import antfu from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import { deMorgan, nuxt } from './configs'
import { overrides } from './overrides'
import { deepMerge } from './utils'

export function defineConfig(options: OptionsConfig & TypedFlatConfigItem = {}, ...userConfigs: TypedFlatConfigItem[]): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const configs: Awaitable<TypedFlatConfigItem[]>[] = [
    deMorgan(),
  ]

  if (isPackageExists('nuxt')) {
    configs.push(nuxt())
  }

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
  )
}

export * from './utils'
export * from '@antfu/eslint-config'
export default defineConfig
