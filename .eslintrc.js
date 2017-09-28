module.exports = {
  parser: 'babel-eslint',
  rules: {
    strict: 0
  },
  "globals": {
    node: true
  },
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': ['warn', 'never'],
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    /* Advanced Rules*/
    'no-unused-expressions': 'warn',
    'no-useless-concat': 'warn',
    'no-unused-vars': 'warn',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    'react/jsx-filename-extension': 'off',
    'react/prop-types':'warn',
    'no-console':'warn'
  }
};
