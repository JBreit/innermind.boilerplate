const extensions = [
  'ts',
  'tsx',
  'js',
  'jsx',
  'json',
  'cjs',
  'cts',
  'mjs',
  'mts',
  'node',
];

module.exports = () => ({
  coverageDirectory: './coverage',
  moduleFileExtensions: extensions,
  preset: 'ts-jest',
  roots: [
    '<rootDir>/src',
  ],
  testEnvironment: 'node',
  testRegex: [
    '.\/(src)\/.*\\.(spec|test)?\\.(ts|tsx)$',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest'],
  },
  transformIgnorePatterns: [
    '^\/node_modules\/$'
  ],
  verbose: true,
});
