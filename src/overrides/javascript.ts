import type { TypedFlatConfigItem } from '@antfu/eslint-config';

export const javascript: TypedFlatConfigItem['rules'] = {
  'arrow-body-style': ['error', 'as-needed'],
  'no-unused-private-class-members': 'error',
  'require-atomic-updates': ['error', { allowProperties: true }],
};
