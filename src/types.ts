import type { OptionsConfig as AntfuOptions } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { RuleOptions } from './typegen.d.ts'

export interface Rules extends RuleOptions {}

export type TypedFlatConfigItem = Omit<Linter.Config<Linter.RulesRecord & Rules>, 'plugins'> & {
  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Record<string, any>
}

export interface OptionsOverrides {
  overrides?: TypedFlatConfigItem['rules']
}

export type OptionsConfig = Omit<AntfuOptions, 'overrides'> & {
  /**
   * Enable de-morgan rules.
   *
   * @see https://github.com/azat-io/eslint-plugin-de-morgan
   * @default true
   */
  deMorgan?: boolean | OptionsOverrides
  /**
   * Enable Nuxt.js rules.
   *
   * Requires installing:
   * - [`@nuxt/eslint-plugin`](https://eslint.nuxt.com/packages/plugin)
   *
   * @default auto-detect based on the dependencies
   */
  nuxt?: boolean | OptionsOverrides
}
