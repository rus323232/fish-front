module.exports = {
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  setupFiles: ['<rootDir>/src/utils/testUtils.ts'],
  globals: {
    'ts-jest': {
      skipBabel: true
    }
  },
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/*/Loadable.{ts,tsx}',
    '!src/**/*/interfaces.ts',
    '!src/**/*/interface.ts',
    '!src/**/*/__mock__.ts',
    '!src/**/*/__mocks__.ts',
    '!src/**/*/mock.ts',
    '!src/**/*/mocks.ts'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/utils/fileMock.ts',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^src/(.*)': '<rootDir>/src/'
  }
};
