import type { UserConfig } from 'tsdown'
import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: 'src/index.ts',
  },
  {
    entry: 'src/cli/index.ts',
    outDir: 'dist/cli',
    dts: false,
  },
]) as UserConfig
