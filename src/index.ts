import antfu from '@antfu/eslint-config'
import type { Awaitable, TypedFlatConfigItem } from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import type { AntfuOptions, OptionsConfig } from './types'
import { pinia } from './configs'
import {
  javascript as overridesJavascript,
  vue as overridesVue,
} from './overrides'

export function vida(options: OptionsConfig & TypedFlatConfigItem = {}, ...userConfigs: TypedFlatConfigItem[]) {
  const {
    pinia: enablePinia = isPackageExists('pinia'),
  } = options

  const configs: Awaitable<TypedFlatConfigItem[]>[] = []

  if (enablePinia)
    configs.push(pinia)

  const antfuConfig: AntfuOptions = {
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
      overrides: {
        'style/arrow-parens': ['error', 'always'],
        'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      },
    },
    javascript: {
      overrides: overridesJavascript,
    },
    vue: {
      overrides: overridesVue,
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
