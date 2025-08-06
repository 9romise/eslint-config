import type { OptionsConfig } from '@antfu/eslint-config'

export const stylistic: OptionsConfig['stylistic'] = {
  indent: 2,
  quotes: 'single',
  semi: false,
  overrides: {
    'style/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 'first',
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      StaticBlock: {
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: true,
      offsetTernaryExpressions: true,
      ignoreComments: false,
      tabLength: 2,
    }],
    'style/quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: 'avoidEscape',
    }],
    'style/arrow-parens': ['error', 'always'],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  },
}
