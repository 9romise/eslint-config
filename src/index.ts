import antfu from '@antfu/eslint-config';
import type { Awaitable, TypedFlatConfigItem } from '@antfu/eslint-config';
import { isPackageExists } from 'local-pkg';
import type { AntfuOptions, OptionsConfig } from './types';
import { pinia } from './configs';
import {
  javascript as overridesJavascript,
  vue as overridesVue,
} from './overrides';

export function vida(options: OptionsConfig = {}, ...userConfigs: TypedFlatConfigItem[]) {
  const {
    pinia: enablePinia = isPackageExists('pinia'),
  } = options;

  const configs: Awaitable<TypedFlatConfigItem[]>[] = [];

  if (enablePinia)
    configs.push(pinia);

  const antfuConfig: AntfuOptions = {
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
    formatters: false,
    javascript: {
      overrides: overridesJavascript,
    },
    vue: {
      overrides: overridesVue,
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
