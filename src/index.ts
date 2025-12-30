import type { Awaitable, ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { OptionsConfig } from './types'
import antfu from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import { deMorgan, nuxt } from './configs'
import { antfuOverrides } from './overrides'
import { deepMerge } from './utils'

const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
]

export function defineConfig(options: OptionsConfig = {
  deMorgan: true,
  nuxt: isPackageExists('nuxt'),
  vue: VuePackages.some((i) => isPackageExists(i)),
  typescript: isPackageExists('typescript'),
}, ...userConfigs: Awaitable<TypedFlatConfigItem>[]): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const {
    deMorgan: enableDeMorgan,
    nuxt: enableNuxt,
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
  for (const key in antfuOverrides) {
    // @ts-expect-error hard to def
    const optionVal = options[key]
    // @ts-expect-error hard to def
    const defaultVal = antfuOverrides[key]
    if (optionVal === true) {
      // @ts-expect-error hard to def
      options[key] = defaultVal
    } else if (optionVal !== false) {
      // @ts-expect-error hard to def
      options[key] = optionVal ? deepMerge(defaultVal, optionVal) : defaultVal
    }
  }

  return options
}

export * from './utils'
export * from '@antfu/eslint-config'
export default defineConfig
