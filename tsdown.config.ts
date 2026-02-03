import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: 'src/index.ts',
    dts: {
      tsconfig: 'tsconfig.app.json',
    },
    minify: 'dce-only',
    exports: true,
    inlineOnly: ['es-toolkit'],
  },
  {
    entry: 'src/cli/index.ts',
    outDir: 'dist/cli',
    dts: false,
  },
])
