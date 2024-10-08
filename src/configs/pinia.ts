import type { OptionsFiles } from '@antfu/eslint-config'
import type { OptionsOverrides, TypedFlatConfigItem } from '../types'
import { GLOB_JS, GLOB_TS, interopDefault } from '@antfu/eslint-config'

const GLOB_PINIA_JS = `**/stores/${GLOB_JS}`
const GLOB_PINIA_TS = `**/stores/${GLOB_TS}`

export async function pinia(options: OptionsFiles & OptionsOverrides = {}): Promise<TypedFlatConfigItem[]> {
  const {
    files = [GLOB_PINIA_JS, GLOB_PINIA_TS],
    overrides = {},
  } = options
  return [
    {
      name: 'vida/pinia/rules',
      files,
      plugins: {
        pinia: await interopDefault(import('eslint-plugin-pinia')),
      },
      rules: {
        'pinia/never-export-initialized-store': 'error',
        'pinia/prefer-single-store-per-file': 'warn',
        'pinia/prefer-use-store-naming-convention': ['error', {
          checkStoreNameMismatch: true,
          storeSuffix: 'Store',
        }],
        'pinia/require-setup-store-properties-export': 'warn',
        'pinia/no-duplicate-store-ids': 'error',
        'pinia/no-return-global-properties': 'error',
        'pinia/no-store-to-refs-in-store': 'error',
        ...overrides,
      },
    },
  ]
}
