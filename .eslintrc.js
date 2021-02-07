'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: '@extensionengine',
  rules: {
    'vue/comment-directive': 'off',
    'vue/component-definition-name-casing': ['error', 'kebab-case']
  },
  overrides: [{
    files: ['src/**', 'example/**', 'tests/**'],
    parserOptions: {
      parser: '@babel/eslint-parser',
      sourceType: 'module'
    },
    env: {
      jest: true
    }
  }]
};
