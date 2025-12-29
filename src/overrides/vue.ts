import type { OptionsConfig } from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'

const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
]

export const vue: OptionsConfig['vue'] = VuePackages.some((i) => isPackageExists(i))
  ? {
      overrides: {
        'vue/max-attributes-per-line': ['error', {
          multiline: 1,
        }],
        'vue/prefer-use-template-ref': ['error'],
      },
    }
  : undefined
