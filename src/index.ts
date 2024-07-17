import antfu, { resolveSubOptions } from '@antfu/eslint-config'
import type { Awaitable, TypedFlatConfigItem } from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import type { AntfuOptions, OptionsConfig } from './types'
import { pinia } from './configs'
import { overrides } from './overrides'

export function vida(options: OptionsConfig & TypedFlatConfigItem = {}, ...userConfigs: TypedFlatConfigItem[]) {
  const {
    pinia: enablePinia = isPackageExists('pinia'),
  } = options

  const configs: Awaitable<TypedFlatConfigItem[]>[] = []

  if (enablePinia)
    // @ts-expect-error safe type
    configs.push(pinia(resolveSubOptions(options, 'pinia')))

  const antfuConfig: AntfuOptions = {
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
    jsx: false,
  }

  return antfu(
    {
      ...antfuConfig,
      ...options,
    },
    ...configs,
    ...userConfigs,
  )
}

export * from '@antfu/eslint-config'
export default vida
