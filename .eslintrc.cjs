/* eslint-env node */

const { resolve } = require('node:path');

const isProduction = process.env.NODE_ENV === 'production';

const src = resolve(`${process.cwd()}/src`);
const npm = resolve(`${process.cwd()}/node_modules`);

const multiline = 'always-multiline';
const always = 'always';
const never = 'never';

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
    serviceworker: true,
  },
  globals: {
    async: true,
    describe: true,
    document: true,
    expect: true,
    self: true,
    test: true,
    window: true,
  },
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended-type-checked',
      ],
      files: [
        './**/*.{ts,tsx}',
      ],
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
    ecmaVersion: 2024,
    emitDecoratorMetadata: true,
    project: [
      resolve(__dirname, 'tsconfig.eslint.json'),
    ],
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'jsx-a11y',
  ],
  root: true,
  rules: {
    // 'arrow-body-style': [ERROR, 'as-needed'],
    'arrow-parens': [ERROR, 'as-needed'],
    'comma-dangle': [
      ERROR,
      {
        arrays: multiline,
        objects: multiline,
        imports: multiline,
        exports: multiline,
        functions: never,
      },
    ],
    'comma-spacing': [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    eqeqeq: always,
    'implicit-arrow-linebreak': [ERROR, 'beside'],
    'import/extensions': [
      ERROR,
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
    'import/no-named-as-default': OFF,
    'import/no-unresolved': OFF,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        // devDependencies: false,
        // optionalDependencies: false,
        // peerDependencies: false,
        // bundleDependencies: false,
        // packageDir: './'
      },
    ],
    'import/prefer-default-export': OFF,
    indent: [
      ERROR,
      2,
      {
        SwitchCase: WARNING,
      },
    ],
    'jsx-quotes': [ERROR, 'prefer-single'],
    'linebreak-style': [
      ERROR,
      process.platform !== 'win32' ? 'linux' : 'windows'
    ],
    // 'max-len': [
    //   ERROR,
    //   {
    //     code: 80,
    //     tabWidth: 2,
    //     ignoreComments: true,
    //     ignoreTrailingComments: true,
    //     ignoreUrls: true,
    //     ignoreTemplateLiterals: true,
    //   },
    // ],
    'no-alert': isProduction ? ERROR : OFF,
    'no-console': isProduction ? ERROR : OFF,
    'no-debugger': isProduction ? ERROR : OFF,
    'no-dynamic-require': OFF,
    'no-implied-eval': OFF,
    'no-restricted-globals': OFF,
    'no-underscore-dangle': [
      ERROR,
      {
        allow: [
          '__WB_MANIFEST',
        ],
      },
    ],
    'no-unused-expressions': [
      ERROR,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      ERROR,
      {
        args: 'after-used',
        argsIgnorePattern: '(^reject$|^_$)',
        vars: 'all',
        varsIgnorePattern: '(^_$|^h$)',
      },
    ],
    'no-use-before-define': [
      ERROR,
      {
        functions: false,
      },
    ],
    'prettier/prettier': ERROR,
    'react/jsx-curly-spacing': [ERROR, always],
    'react/prefer-stateless-function': [OFF],
    'react/jsx-filename-extension': [
      ERROR,
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
    semi: [ERROR, always],
    'space-before-function-paren': [
      ERROR,
      {
        anonymous: always,
        named: never,
        asyncArrow: always
      }
    ],
    'space-in-parens': [ERROR, never],
    '@typescript-eslint/ban-types': OFF,
    '@typescript-eslint/ban-ts-ignore': OFF,
    '@typescript-eslint/ban-ts-comment': [
      ERROR,
      {
        'ts-ignore': false
      }
    ],
    '@typescript-eslint/comma-dangle': [
      ERROR,
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
    '@typescript-eslint/indent': OFF,
    '@typescript-eslint/no-unused-vars': [
      ERROR,
      {
        args: 'after-used',
        argsIgnorePattern: '(^reject$|^_$)',
        vars: 'all',
        varsIgnorePattern: '(^_$|^h$)',
      },
    ],
    '@typescript-eslint/prefer-nullish-coalescing': OFF,
    // quotes: [ERROR, 'single'],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [src, npm],
      },
      typescript: true,
    },
  },
};
