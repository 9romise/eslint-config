# @vida0905/eslint-config

 [![npm](https://img.shields.io/npm/v/@vida0905/eslint-config.svg?color=444&label=)](https://npmjs.com/package/@vida0905/eslint-config) [![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

Self use eslint config, extends [antfu's config](https://github.com/antfu/eslint-config)

### Difference

- More stricter rules.
- Support `pinia`.
- Disable `formatter` and `jsx`

### Setup

```shell
npm i -D @vida/eslint-config
```

in `eslint.config.js`

```js
import { vida } from '@vida0905/eslint-config';

export default vida();
```

in `.vscode/settings.json`, more info to [@antfu/eslint-config](https://github.com/antfu/eslint-config?tab=readme-ov-file#vs-code-support-auto-fix-on-save)

```jsonc
{
  // Enable the ESlint flat config support
  // (remove this if your ESLint extension above v3.0.5)
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "format/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

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
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```
