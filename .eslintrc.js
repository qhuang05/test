const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'quotes': 0,
    'semi': 1,
    'no-console': 1,
    'no-unused-vars': 0,
    'space-before-function-paren': 0,
  },
});
