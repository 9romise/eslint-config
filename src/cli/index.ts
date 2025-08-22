// credit: https://github.com/antfu/eslint-config/blob/main/src/cli/index.ts
import process from 'node:process'
import { cac } from 'cac'
import { version } from '../../package.json' with { type: 'json' }
import { update } from './update/index'

const cli = cac('@vida0905/eslint-config')

cli
  .command('update [...files]', 'Update configuration files for specified files')
  .alias('up')
  .option('vscode', 'Update .vscode/settings.json')
  .action(async (files) => {
    try {
      await update(files)
    } catch (error) {
      console.error(`✘ ${String(error)}`)
      process.exit(1)
    }
  })

cli.help()
cli.version(version)
cli.parse()
