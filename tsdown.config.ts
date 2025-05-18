import type { UserConfig } from 'tsdown'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/cli/index.ts',
  ],
}) as UserConfig
