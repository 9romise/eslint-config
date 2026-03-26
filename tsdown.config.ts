import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: 'src/index.ts',
    dts: {
      tsconfig: 'tsconfig.app.json',
    },
    minify: 'dce-only',
    exports: true,
    deps: {
      onlyBundle: ['es-toolkit'],
    },
    attw: {
      profile: 'esm-only',
    },
    publint: true,
  },
])
