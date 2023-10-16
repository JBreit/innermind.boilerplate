module.exports = api => {
  const isProduction = api.cache(() => process.env.NODE_ENV === 'production');

  const plugins = [
    ['@babel/proposal-pipeline-operator', {
      proposal: 'hack',
      topicToken: '^^',
    }],
    ['@babel/proposal-decorators', {
      version: '2023-05',
    }],
    '@babel/proposal-duplicate-named-capturing-groups-regex',
    ['@babel/proposal-record-and-tuple', {
      syntaxType: 'hash',
    }],
    '@babel/proposal-throw-expressions',
    '@babel/proposal-async-do-expressions',
    '@babel/proposal-destructuring-private',
    '@babel/proposal-do-expressions',
    '@babel/proposal-explicit-resource-management',
    '@babel/proposal-function-bind',
    '@babel/proposal-function-sent',
    '@babel/proposal-regexp-modifiers',
    '@babel/transform-unicode-property-regex',
    '@babel/transform-class-static-block',
    '@babel/transform-class-properties',
    '@babel/transform-private-property-in-object',
    '@babel/transform-private-methods',
    '@babel/transform-object-rest-spread',
    '@babel/transform-export-namespace-from',
    '@babel/proposal-export-default-from',
    '@babel/syntax-top-level-await',
    '@babel/syntax-import-assertions',
    '@babel/syntax-dynamic-import',
    '@babel/syntax-import-meta',
    '@babel/proposal-partial-application',
    '@babel/transform-template-literals',
    ['@babel/transform-async-to-generator', {
      module: 'bluebird',
      method: 'coroutine',
    }],
    '@babel/transform-modules-commonjs',
    ['module-resolver', {
      root: [__dirname],
      alias: {
        '@root': '.',
        '@config': './src/config',
        '@container': './src/shared/container/container.js',
        '@modules': './src/modules',
        '@shared': './src/shared',
        '@src': './src',
      },
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
      ],
      projectRoot: '.',
    }],
  ];

  return {
    assumptions: {
      constantReexports: true,
      enumerableModuleMeta: false,
      iterableIsArray: true,
      mutableTemplateObject: false,
      noClassCalls: true,
      noDocumentAll: true,
      noIncompleteNsImportDetection: true,
      setPublicClassFields: true,
      setSpreadProperties: false,
      skipForOfIteratorClosing: true,
      privateFieldsAsProperties: true,
    },
    env: {
      test: {
        plugins: []
      }
    },
    plugins,
    presets: [
      [
        '@babel/env',
        {
          corejs: {
            version: '^3.32',
            proposals: true
          },
          debug: false,
          loose: false,
          modules: false,
          targets: {
            esmodules: false,
            node: 'current'
          },
          useBuiltIns: 'usage'
        }
      ],
      '@babel/modules',
      [
        '@babel/react',
        {
          development: !isProduction,
          throwIfNamespace: true,
          useSpread: false
        }
      ],
      ['@babel/preset-typescript'],
    ]
  };
};
