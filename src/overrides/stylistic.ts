import type { TypedFlatConfigItem } from '@antfu/eslint-config'

export const stylistic: TypedFlatConfigItem['rules'] = {
  'style/arrow-parens': ['error', 'always'],
  'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
}
