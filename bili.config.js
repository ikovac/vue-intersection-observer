'use strict';

const path = require('path');
const pkg = require('./package.json');

/** @type {import('bili').Config} */
const config = {
  input: {
    [pkg.name]: 'src/index.js'
  },
  output: {
    format: ['cjs', 'umd', 'esm'],
    fileName({ format }) {
      const isUmd = format === 'umd';
      return ['[name][min]', !isUmd && '[format]', 'js'].filter(Boolean).join('.');
    },
    moduleName: 'VueIntersectionObserver'
  },
  bundleNodeModules: ['rollup-plugin-vue', 'vue-runtime-helpers'],
  plugins: {
    alias: {
      resolve: ['.vue', '.js'],
      entries: [{ find: '@', replacement: path.join(__dirname, './src') }]
    },
    vue: { css: true }
  },
  resolvePlugins: {
    alias: require('@rollup/plugin-alias')
  }
};

module.exports = config;
