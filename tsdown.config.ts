import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: [
      './src/index.ts',
      './src/cli.ts',
    ],
    dts: {
      tsconfig: 'tsconfig.app.json',
    },
    minify: 'dce-only',
    exports: {
      bin: './src/cli.ts',
    },
    deps: {
      onlyBundle: ['es-toolkit'],
    },
    attw: {
      profile: 'esm-only',
    },
    publint: true,
  },
])
