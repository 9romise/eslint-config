import type { TypedFlatConfigItem } from '@antfu/eslint-config'

export const stylistic: TypedFlatConfigItem['rules'] = {
  'style/indent': ['error', 2, {
    VariableDeclarator: 'first',
    offsetTernaryExpressions: true,
    tabLength: 2,
  }],
  'style/quotes': ['error', 'single', {
    avoidEscape: true,
    allowTemplateLiterals: 'avoidEscape',
  }],
  'style/arrow-parens': ['error', 'always'],
  'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
}
