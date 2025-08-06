import type { OptionsConfig } from '@antfu/eslint-config'

export const javascript: OptionsConfig['javascript'] = {
  overrides: {
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-private-class-members': 'error',
    'require-atomic-updates': ['error', { allowProperties: true }],
  },
}
