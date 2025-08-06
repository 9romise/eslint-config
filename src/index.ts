import type { Awaitable, ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { OptionsConfig } from './types'
import antfu from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import { deMorgan, nuxt } from './configs'
import { antfuConfig } from './overrides'
import { deepMerge } from './utils'

export function defineConfig(options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {}, ...userConfigs: Awaitable<TypedFlatConfigItem>[]): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const {
    deMorgan: enableDeMorgan,
    nuxt: enableNuxt = isPackageExists('nuxt'),
  } = options

  const configs: Awaitable<TypedFlatConfigItem[]>[] = []

  if (enableDeMorgan) {
    configs.push(deMorgan())
  }

  if (enableNuxt) {
    configs.push(nuxt())
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
