/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^moneykit$': '<rootDir>/src/index.ts',
    '^moneykit/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^moneykit/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/ecosystem-tests/', '<rootDir>/dist/', '<rootDir>/deno_tests/'],
};
