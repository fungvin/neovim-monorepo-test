/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    require: true,
    process: true,
    module: true,
    __dirname: true,
    ga: true,
    angular: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@src', './src']],
        extensions: ['.js', '.ts'],
      },
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    'no-nested-ternary': 1,
    'import/no-unresolved': 2,
    'no-unused-vars': 1,
    'no-undef': 1,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
  },
}
/* eslint-disable */
