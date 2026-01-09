import type { Awaitable, ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { OptionsConfig } from './types'
import antfu from '@antfu/eslint-config'
import { toMerged } from 'es-toolkit'
import { isPackageExists } from 'local-pkg'
import { deMorgan, e18e, nuxt } from './configs'
import { antfuOverrides } from './overrides'

const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
]

// @keep-sorted
const defaultOptions: OptionsConfig = {
  deMorgan: true,
  e18e: true,
  nuxt: isPackageExists('nuxt'),
  typescript: isPackageExists('typescript'),
  vue: VuePackages.some((i) => isPackageExists(i)),
}

export function defineConfig(
  options: OptionsConfig = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem>[]
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  options = toMerged(defaultOptions, options)
  // @keep-sorted
  const {
    deMorgan: enableDeMorgan,
    e18e: enableE18e,
    nuxt: enableNuxt,
  } = options

  const configs: Awaitable<TypedFlatConfigItem[]>[] = []

  if (enableDeMorgan) {
    configs.push(deMorgan())
  }
  if (enableE18e) {
    configs.push(e18e())
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
      options[key] = optionVal ? toMerged(defaultVal, optionVal) : defaultVal
    }
  }

  return options
}

export * from '@antfu/eslint-config'
export default defineConfig
