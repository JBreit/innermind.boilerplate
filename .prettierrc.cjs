module.exports = {
  arrowParens: 'avoid',
  trailingComma: 'es5',
  tabWidth: 2,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  useTabs: false,
  overrides: [
    {
      files: '.editorconfig',
      options: {
        parser: 'yaml'
      }
    },
    {
      files: 'LICENSE',
      options: {
        parser: 'markdown'
      }
    },
  ]
}
