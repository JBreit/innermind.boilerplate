import type { Config } from 'jest';

const extensions: string[] = [
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
  coverageReporters: ['html'],
  maxWorkers: 1,
  moduleFileExtensions: extensions,
  preset: 'ts-jest',
  roots: [
    '<rootDir>/src',
  ],
  testEnvironment: 'node',
  testRegex: [
    './(src|tests)/.*\\.(spec|test)?\\.(ts|tsx)$',
  ],
  testTimeout: 30000,
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  transformIgnorePatterns: [
    '^/node_modules/$',
  ],
  verbose: true,
});
