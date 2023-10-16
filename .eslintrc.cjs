/* eslint-env node */

const { resolve } = require('node:path');

const multiline = 'always-multiline';
const always = 'always';
const never = 'never';
const err = 'error';

module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:jsx-a11y/recommended',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['./**/*.{ts,tsx}'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2022,
    emitDecoratorMetadata: true,
    project: [
      resolve(__dirname, 'tsconfig.eslint.json'),
    ],
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
  ],
  root: true,
  rules: {
    'arrow-body-style': [err, 'as-needed'],
    'arrow-parens': [err, 'as-needed'],
    'comma-dangle': [
      err,
      {
        arrays: multiline,
        objects: multiline,
        imports: multiline,
        exports: multiline,
        functions: never,
      },
    ],
    'comma-spacing': [
      err,
      {
        before: false,
        after: true,
      },
    ],
    eqeqeq: 2,
    'implicit-arrow-linebreak': [err, 'beside'],
    'import/extensions': [
      err,
      {
        ignorePackages: true,
        cjs: never,
        js: never,
        jsx: never,
        mjs: never,
        ts: never,
        tsx: never,
      },
    ],
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': [
      err,
      {
        // devDependencies: false,
        // optionalDependencies: false,
        // peerDependencies: false,
        // bundleDependencies: false,
        // packageDir: './'
      },
    ],
    'import/prefer-default-export': 0,
    indent: [
      err,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'linebreak-style': [
      err,
      process.platform !== 'win32' ? 'linux' : 'windows'
    ],
    'max-len': [
      err,
      {
        code: 80,
        tabWidth: 2,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-dynamic-require': 0,
    'no-restricted-globals': 0,
    'no-underscore-dangle': [
      err,
      {
        allow: [
          '__WB_MANIFEST',
        ],
      },
    ],
    'no-unused-expressions': [
      err,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      err,
      {
        args: 'none',
      },
    ],
    'react/jsx-curly-spacing': [2, always],
    'react/prefer-stateless-function': [0],
    'react/jsx-filename-extension': [
      err,
      {
        extensions: [
          '.cjs',
          '.js',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
        ],
      },
    ],
    semi: [err, always],
    '@typescript-eslint/comma-dangle': [
      err,
      {
        arrays: multiline,
        generics: always,
        enums: always,
        exports: multiline,
        functions: never,
        imports: multiline,
        objects: multiline,
        tuples: always,
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    quotes: [2, 'single'],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          resolve(`${process.cwd()}/src`),
          resolve(`${process.cwd()}/node_modules`),
        ],
      },
    }
  }
}
