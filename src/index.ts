import antfu from '@antfu/eslint-config';
import type { Awaitable, TypedFlatConfigItem } from '@antfu/eslint-config';
import { isPackageExists } from 'local-pkg';
import type { AntfuOptions, OptionsConfig } from './types';
import { pinia, vue } from './configs';

const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
];

export function vida(options: OptionsConfig = {}, ...userConfigs: TypedFlatConfigItem[]) {
  const {
    pinia: enablePinia = isPackageExists('pinia'),
    // https://github.com/antfu/eslint-config/blob/main/src/factory.ts
    vue: enableVue = VuePackages.some(i => isPackageExists(i)),
  } = options;

  const configs: Awaitable<TypedFlatConfigItem[]>[] = [];

  if (enableVue)
    configs.push(vue);

  if (enablePinia)
    configs.push(pinia);

  const antfuConfig: AntfuOptions = {
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
    formatters: {
      css: true,
      html: true,
    },
    jsx: false,
  };

  return antfu(
    {
      ...antfuConfig,
      ...options,
    },
    ...configs,
    ...userConfigs,
  );
}

export default vida;
