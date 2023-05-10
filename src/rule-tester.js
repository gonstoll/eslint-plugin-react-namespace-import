const {RuleTester} = require('eslint')

const config = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}

module.exports = {
  ruleTester: new RuleTester(config),
}
