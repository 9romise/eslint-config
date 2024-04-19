import { GLOB_JS, GLOB_TS, type TypedFlatConfigItem } from '@antfu/eslint-config';
import pluginPinia from 'eslint-plugin-pinia';

const GLOB_PINIA_JS = `stores/${GLOB_JS}`;
const GLOB_PINIA_TS = `stores/${GLOB_TS}`;

export const pinia: TypedFlatConfigItem[] = [
  {
    name: 'vida/pinia',
    files: [GLOB_PINIA_JS, GLOB_PINIA_TS],
    plugins: {
      pinia: pluginPinia,
    },
    rules: {
      'pinia/prefer-single-store-per-file': ['error'],
      'pinia/prefer-use-store-naming-convention': ['error', {
        checkStoreNameMismatch: true,
        storeSuffix: 'Store',
      }],
      'pinia/require-setup-store-properties-export': ['warn'],
      'pinia/no-duplicate-store-ids': ['error'],
    },
  },
];
