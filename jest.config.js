module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts(x)?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testRegex: '(.*|(\\.|/))\\.(test|spec).ts(x)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // map TS path aliases to be used also in test files
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
  },
}
