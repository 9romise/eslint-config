import type { TypedFlatConfigItem } from '@antfu/eslint-config'

export const vue: TypedFlatConfigItem['rules'] = {
  'vue/max-attributes-per-line': ['error', {
    singleline: 5,
    multiline: 1,
  }],
}
