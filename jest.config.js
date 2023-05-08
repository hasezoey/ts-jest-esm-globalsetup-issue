export default {
  preset: 'ts-jest',
  transform: {
    '\\.ts$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        diagnostics: true,
        useESM: true,
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testMatch: ['**/test/**/*.test.(ts|js)'],
  testEnvironment: 'node',
  globalSetup: '<rootDir>/test/globalSetup.ts',
  snapshotFormat: {
    escapeString: true,
    printBasicPrototype: true,
  },
};
