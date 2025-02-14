import type { Config } from 'tsdown'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  format: 'esm',
  clean: true,
  dts: { transformer: 'oxc' },
  bundleDts: true,
}) as Config
