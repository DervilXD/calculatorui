export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./src/setupTests.js'],
    moduleNameMapper: {
      '^@/(.*)$': 'calculatorUI/src/$1',
      '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    }
}