module.exports = {
  rules: {
    'no-namespace-import': require('./src/rules/no-namespace-import'),
  },
  configs: {
    recommended: {
      plugins: ['react-namespace-import'],
      rules: {
        'react-namespace-import/no-namespace-import': 'error',
      },
    },
  },
}
