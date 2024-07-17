import type { OptionsFiles } from '@antfu/eslint-config'
import { GLOB_JS, GLOB_TS, interopDefault } from '@antfu/eslint-config'
import type { OptionsOverrides, TypedFlatConfigItem } from '../types'

const GLOB_PINIA_JS = `**/stores/${GLOB_JS}`
const GLOB_PINIA_TS = `**/stores/${GLOB_TS}`

export async function pinia(options: OptionsFiles & OptionsOverrides = {}): Promise<TypedFlatConfigItem[]> {
  const {
    files = [GLOB_PINIA_JS, GLOB_PINIA_TS],
    overrides = {},
  } = options
  return [
    {
      name: '@vida/pinia',
      files,
      plugins: {
        pinia: await interopDefault(import('eslint-plugin-pinia')),
      },
      rules: {
        'pinia/prefer-single-store-per-file': ['error'],
        'pinia/prefer-use-store-naming-convention': ['error', {
          checkStoreNameMismatch: true,
          storeSuffix: 'Store',
        }],
        'pinia/require-setup-store-properties-export': ['warn'],
        'pinia/no-duplicate-store-ids': ['error'],
        ...overrides,
      },
    },
  ]
}
