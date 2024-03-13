# innermind.boilerplate

[![NodeJS][node]][node-url]
[![NPM][npm]][npm-url]
[![MIT License][license]][license-url]
[![Commitizen friendly][commitizen]][commitizen-url]

## Overview

ECMAScript 2024 web development boilerplate.

## Features

## Dependencies

- Node.js >=21.1.0
- NPM >=10.5.0

#### Commitizen

###### package.json

```json
{
  // ...
  "config": {
    "commitizen": {
      "path": "./tools/cz.adapter.cjs",
      "useEmoji": true
    }
  }
  // ...
}
```

###### tools/cz.adapter.cjs

```js
exports.prompter = async (instance, commit) => {
  const { prompter } = await import('@commitlint/cz-commitlint');

  prompter(instance, commit);
}
```

## License

Copyright (c) 2023-2024 Jason Breitigan, released under MIT License

### Resources

1. Node.js
   + <https://nodejs.org>
2. TypeScript
   + <https://typescriptlang.org>
   + <https://github.com/microsoft/typescript>
3. Babel
   + <https://babeljs.io/>
   + <https://github.com/babel/babel>
4. Prettier
   + <https://prettier.io>
   + <https://github.com/prettier/prettier>
5. ESLint
   + <https://eslint.org>
   + <https://github.com/eslint/eslint>
   + <https://typescript-eslint.io>
   + <https://github.com/typescript-eslint/typescript-eslint>
6. Husky
   + <https://typicode.github.io/husky/>
   + <https://github.com/typicode/husky>
7. Lint Staged
   + <https://github.com/lint-staged/lint-staged>
8. Commit Lint
   + <https://commitlint.js.org/>
   + <https://github.com/conventional-changelog/commitlint>
9. Markdown Lint
   + <https://github.com/markdownlint/markdownlint>
10. Jest
    + <https://jestjs.io/>
    + <https://github.com/jestjs/jest>
11. Browserslist
    + <https://browsersl.ist/>
    + <https://github.com/browserslist/browserslist>

[npm]: https://img.shields.io/npm/v/npm
[npm-url]: https://www.npmjs.com/
[node]: https://img.shields.io/badge/node-%3E%3D21.1.0-blue
[node-url]: https://nodejs.org
[license-url]: LICENSE
[license]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[commitizen-url]: http://commitizen.github.io/cz-cli/
[commitizen]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
