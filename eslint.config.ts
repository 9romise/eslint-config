import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { ConfigNames, TypedFlatConfigItem } from './src'
import { defineConfig } from './src'

export default defineConfig({
  pnpm: true,
}) as FlatConfigComposer<TypedFlatConfigItem, ConfigNames>
