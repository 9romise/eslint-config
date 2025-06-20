import type { TypedFlatConfigItem } from '@antfu/eslint-config'

export const stylistic: TypedFlatConfigItem['rules'] = {
  'style/quotes': ['error', 'single', {
    avoidEscape: true,
    allowTemplateLiterals: 'avoidEscape',
  }],
  'style/arrow-parens': ['error', 'always'],
  'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
}
