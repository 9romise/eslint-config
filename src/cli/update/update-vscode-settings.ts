import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { green } from 'ansis'
import { vscodeSettingsString } from '../constants'

export async function updateVSCodeSettings(): Promise<void> {
  const cwd = process.cwd()

  const dotVscodePath: string = path.join(cwd, '.vscode')
  const settingsPath: string = path.join(dotVscodePath, 'settings.json')

  if (!fs.existsSync(dotVscodePath))
    await fsp.mkdir(dotVscodePath, { recursive: true })

  if (!fs.existsSync(settingsPath)) {
    await fsp.writeFile(settingsPath, `{${vscodeSettingsString}}\n`, 'utf-8')
    console.log(green`Created .vscode/settings.json`)
  } else {
    let settingsContent = await fsp.readFile(settingsPath, 'utf8')

    settingsContent = settingsContent.trim().replace(/\s*\}$/, '')
    settingsContent += settingsContent.endsWith(',') || settingsContent.endsWith('{') ? '' : ','
    settingsContent += `${vscodeSettingsString}}\n`

    await fsp.writeFile(settingsPath, settingsContent, 'utf-8')
    console.log(green`Updated .vscode/settings.json`)
  }
}
