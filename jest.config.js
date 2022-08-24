const { readFileSync } = require('fs')

const config = JSON.parse(readFileSync('./.swcrc', 'utf-8'))

/** @type {import('jest').Config} */
const jestConf = {
  preset: 'jest-preset-preact',
  verbose: true,
  extensionsToTreatAsEsm: [ '.ts', '.tsx', '.jsx' ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { ...config }],
  },
  transformIgnorePatterns: [
    '^node_modules/(?!preact-render-to-string/.*|preact-router/.*)',
  ],
  moduleNameMapper: {
    '^@/(.*)\\.(p?css)$': 'identity-obj-proxy', 
    '^react$': '<rootDir>/node_modules/preact/compat',
    '^react-dom$': '<rootDir>/node_modules/preact/compat',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = jestConf
