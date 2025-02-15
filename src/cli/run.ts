import { updateVSCodeSettings } from './update-vscode-settings'

export interface CLIRunOptions {
  vscode?: boolean
}

export async function run(options: CLIRunOptions = {}): Promise<void> {
  if (options.vscode) {
    await updateVSCodeSettings()
  }
}
