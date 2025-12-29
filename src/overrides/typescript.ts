import type { OptionsConfig } from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'

export const typescript: OptionsConfig['typescript'] = isPackageExists('typescript')
  ? {
      overrides: {
        'ts/array-type': 'error',
      },
    }
  : undefined
