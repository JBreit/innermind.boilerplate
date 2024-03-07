module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    assumptions: {
      constantReexports: true,
      enumerableModuleMeta: false,
      iterableIsArray: true,
      mutableTemplateObject: false,
      noClassCalls: false,
      noDocumentAll: true,
      noNewArrows: true,
      noIncompleteNsImportDetection: true,
      objectRestNoSymbols: false,
      privateFieldsAsProperties: true,
      privateFieldsAsSymbols: false,
      pureGetters: true,
      setClassMethods: true,
      setComputedProperties: true,
      setPublicClassFields: true,
      setSpreadProperties: true,
      skipForOfIteratorClosing: false,
      superIsCallableConstructor: false,
    },
    env: {
      test: {
        plugins: [

        ],
      },
    },
    plugins: [
      [
        '@babel/proposal-pipeline-operator',
        {
          proposal: 'hack',
          topicToken: '^^',
        },
      ],
      [
        '@babel/proposal-decorators',
        {
          version: '2023-11',
        },
      ],
      ['@babel/proposal-duplicate-named-capturing-groups-regex'],
      [
        '@babel/proposal-record-and-tuple',
        {
          importPolyfill: true,
        },
      ],
      ['@babel/proposal-throw-expressions'],
      ['@babel/proposal-async-do-expressions'],
      ['@babel/proposal-destructuring-private'],
      ['@babel/proposal-do-expressions'],
      ['@babel/proposal-explicit-resource-management'],
      ['@babel/proposal-function-bind'],
      ['@babel/proposal-function-sent'],
      ['@babel/proposal-regexp-modifiers'],
      ['@babel/proposal-export-default-from'],
      // ['@babel/syntax-import-assertions'], // in @babel/preset-env?
      ['@babel/proposal-partial-application'],
    ],
    presets: [
      [
        '@babel/env',
        {
          bugfixes: true,
          corejs: {
            version: '^3.32',
            proposals: true,
          },
          debug: false,
          // forceAllTransforms: api.env('production'),
          ignoreBrowserslistConfig: false,
          loose: false,
          modules: 'auto', // "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false, defaults to "auto"
          shippedProposals: true,
          targets: {
            esmodules: false,
            node: 'current',
          },
          useBuiltIns: 'usage',
        },
      ],
      [
        '@babel/react',
        {
          development: api.env('development'),
          runtime: 'automatic',
          throwIfNamespace: true,
          useSpread: false,
        },
      ],
      [
        '@babel/preset-typescript',
        {
          allowDeclareFields: true, // will be the default in Babel 8
          allowNamespaces: false, // will be true by default in the future
          rewriteImportExtensions: true,
        },
      ],
    ],
  };
};
