/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface RuleOptions {
  /**
   * Transforms the negation of a conjunction !(A && B) into the equivalent !A || !B according to De Morgan’s law
   * @see https://github.com/azat-io/eslint-plugin-de-morgan/blob/main/docs/no-negated-conjunction.md
   */
  'de-morgan/no-negated-conjunction'?: Linter.RuleEntry<[]>
  /**
   * Transforms the negation of a disjunction !(A || B) into the equivalent !A && !B according to De Morgan’s law
   * @see https://github.com/azat-io/eslint-plugin-de-morgan/blob/main/docs/no-negated-disjunction.md
   */
  'de-morgan/no-negated-disjunction'?: Linter.RuleEntry<[]>
  /**
   * Never export an initialized named or default store.
   * @see https://github.com/lisilinhart/eslint-plugin-pinia/blob/main/docs/rules/never-export-initialized-store.md
   */
  'pinia/never-export-initialized-store'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate store ids.
   * @see https://github.com/lisilinhart/eslint-plugin-pinia/blob/main/docs/rules/no-duplicate-store-ids.md
   */
  'pinia/no-duplicate-store-ids'?: Linter.RuleEntry<[]>
  /**
   * Disallows returning globally provided properties from Pinia stores.
   * @see https://github.com/lisilinhart/eslint-plugin-pinia/blob/main/docs/rules/no-return-global-properties.md
   */
  'pinia/no-return-global-properties'?: Linter.RuleEntry<[]>
  /**
   * Disallow use of storeToRefs inside defineStore
   * @see https://github.com/lisilinhart/eslint-plugin-pinia/blob/main/docs/rules/no-store-to-refs-in-store.md
   */
  'pinia/no-store-to-refs-in-store'?: Linter.RuleEntry<[]>
  /**
   * Encourages defining each store in a separate file.
   * @see https://github.com/lisilinhart/eslint-plugin-pinia/blob/main/docs/rules/prefer-single-store-per-file.md
   */
  'pinia/prefer-single-store-per-file'?: Linter.RuleEntry<[]>
  /**
   * Enforces the convention of naming stores with the prefix `use` followed by the store name.
   * @see https://github.com/lisilinhart/eslint-plugin-pinia/blob/main/docs/rules/prefer-use-store-naming-convention.md
   */
  'pinia/prefer-use-store-naming-convention'?: Linter.RuleEntry<PiniaPreferUseStoreNamingConvention>
  /**
   * In setup stores all state properties must be exported.
   * @see https://github.com/lisilinhart/eslint-plugin-pinia/blob/main/docs/rules/require-setup-store-properties-export.md
   */
  'pinia/require-setup-store-properties-export'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- pinia/prefer-use-store-naming-convention -----
type PiniaPreferUseStoreNamingConvention = []|[{
  checkStoreNameMismatch?: boolean
  storeSuffix?: string
  [k: string]: unknown | undefined
}]
// Names of all the configs
export type ConfigNames = 'vida/pinia/rules' | 'vida/de-morgan/rules'
