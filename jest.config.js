module.exports = Object.assign({
  setupFiles: ['./jest/setup.js'],
  collectCoverage: true,
  moduleDirectories: ['node_modules', 'utils'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?(react-native|@react-native-community|react-navigation|static-container))',
  ],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/jest', '<rootDir>/utils/'],
  globals: {
    __DEV__: true,
  },
});
