import type { antfu } from '@antfu/eslint-config'
import type { Linter } from 'eslint'
import type { RuleOptions } from './typegen'

export type AntfuOptions = Parameters<typeof antfu>[0]

type Rules = RuleOptions

export type TypedFlatConfigItem = Omit<Linter.FlatConfig<Linter.RulesRecord & Rules>, 'plugins'> & {
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
   * Enable Pinia support.
   *
   * @default auto-detect based on the dependencies
   */
  pinia?: boolean | OptionsOverrides
}
