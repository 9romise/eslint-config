import fs from 'node:fs/promises'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { combine } from '../src'
import { deMorgan } from '../src/configs'

const configs = await combine(
  deMorgan(),
)

const configNames = configs.map((i) => i.name).filter(Boolean)

let dts = await flatConfigsToRulesDTS(configs, {
  includeAugmentation: false,
})

dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map((i) => `'${i}'`).join(' | ')}
`

await fs.writeFile('src/typegen.d.ts', dts)
