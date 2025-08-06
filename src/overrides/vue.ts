import type { OptionsConfig } from '@antfu/eslint-config'

export const vue: OptionsConfig['vue'] = {
  overrides: {
    'vue/max-attributes-per-line': ['error', {
      multiline: 1,
    }],
  },
}
