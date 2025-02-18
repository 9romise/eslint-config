// credit: https://github.com/antfu/eslint-config/blob/main/src/cli/index.ts
import process from 'node:process'
import { cac } from 'cac'
import { version } from '../../package.json'
import { run } from './run'

const cli = cac('@vida0905/eslint-config')

cli
  .command('update', 'update configuration files')
  .option('--vscode', 'Update .vscode/settings.json')
  .action(async (args) => {
    try {
      await run(args)
    } catch (error) {
      console.error(`✘ ${String(error)}`)
      process.exit(1)
    }
  })

cli.help()
cli.version(version)
cli.parse()
