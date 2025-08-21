import type { Awaitable, ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { OptionsConfig } from './types'
import antfu from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import { deMorgan, nuxt } from './configs'
import { antfuConfig } from './overrides'
import { deepMerge } from './utils'

export function defineConfig(options: OptionsConfig = {}, ...userConfigs: Awaitable<TypedFlatConfigItem>[]): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const {
    deMorgan: enableDeMorgan = true,
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
    applyOptions(options),
    ...configs,
    ...userConfigs,
  )
}

export function applyOptions(options: OptionsConfig): OptionsConfig {
  Object.keys(antfuConfig).forEach((key) => {
    // @ts-expect-error hard to def
    const optionVal = options[key]
    // @ts-expect-error hard to def
    const defaultVal = antfuConfig[key]
    if (optionVal === true) {
      // @ts-expect-error hard to def
      options[key] = defaultVal
    } else if (optionVal !== false) {
      // @ts-expect-error hard to def
      options[key] = optionVal ? deepMerge(optionVal, defaultVal) : defaultVal
    }
  })

  return options
}

export * from './utils'
export * from '@antfu/eslint-config'
export default defineConfig
