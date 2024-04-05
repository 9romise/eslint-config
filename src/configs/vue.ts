import { GLOB_VUE, type TypedFlatConfigItem } from '@antfu/eslint-config';

export const vue: TypedFlatConfigItem[] = [
  {
    name: 'vida:vue',
    files: [GLOB_VUE],
    rules: {
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 5 },
        multiline: { max: 1 },
      }],
    },
  },
];
