import type { OptionsConfig } from '@antfu/eslint-config'

export const typescript: OptionsConfig['typescript'] = {
  overrides: {
    'ts/array-type': 'error',
  },
}
