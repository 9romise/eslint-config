import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: 'src/index.ts',
    dts: {
      tsconfig: 'tsconfig.app.json',
    },
    fixedExtension: false,
  },
  {
    entry: 'src/cli/index.ts',
    outDir: 'dist/cli',
    dts: false,
    fixedExtension: false,
  },
])
