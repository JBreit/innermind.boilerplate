import type { Config } from 'jest';

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

export default (): Config => ({
  automock: true,
  coverageDirectory: './coverage',
  moduleFileExtensions: extensions,
  preset: 'ts-jest',
  roots: [
    '<rootDir>/src',
  ],
  testEnvironment: 'node',
  testRegex: [
    './(src)/.*\\.(spec|test)?\\.(ts|tsx)$',
    './(tests)/.*\\.(spec|test)?\\.(ts|tsx)$',
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest', {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  transformIgnorePatterns: [
    '^/node_modules/$',
  ],
  verbose: true,
});
