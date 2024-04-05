# @vida/eslint-config

 [![npm](https://img.shields.io/npm/v/@vida/eslint-config.svg)](https://npmjs.com/package/@vida/eslint-config)

Self use eslint config, extends [antfu's config](https://github.com/antfu/eslint-config)

### Difference

- More stricter rules.
- Support `pinia`.

### Setup

```shell
npm i -D @vida/eslint-config
```

in `eslint.config.js`

```js
import { vida } from '@vida/eslint-config';

export default vida();
```

in `.vscode/settings.json`, more info to [@antfu/eslint-config](https://github.com/antfu/eslint-config?tab=readme-ov-file#vs-code-support-auto-fix-on-save)

```json
{
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```
