import { updateVSCodeSettings } from './update-vscode-settings'

export async function update(files: string[] = []): Promise<void> {
  if (files.includes('vscode')) {
    await updateVSCodeSettings()
  }
}
