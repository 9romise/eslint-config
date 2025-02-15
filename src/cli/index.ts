// credit: https://github.com/antfu/eslint-config/blob/main/src/cli/index.ts
import process from 'node:process'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { version } from '../../package.json'
import { run } from './run'

const instance = yargs(hideBin(process.argv))
  .scriptName('@vida0905/eslint-config')
  .usage('')
  .command(
    '*',
    'Run the initialization',
    (args) =>
      args.option(
        'vscode',
        {
          description: 'Update .vscode/settings.json',
          type: 'boolean',
          default: true,
        },
      ),
    async (args) => {
      try {
        await run(args)
      } catch (error) {
        console.error(`✘ ${String(error)}`)
        process.exit(1)
      }
    },
  )
  .showHelpOnFail(false)
  .alias('h', 'help')
  .version('version', version)
  .alias('v', 'version')

// eslint-disable-next-line ts/no-unused-expressions
instance
  .help()
  .argv
