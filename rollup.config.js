/* eslint-disable camelcase */
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import optimize from './plugins/rollup-plugin-optimize.cjs';

const extensions = ['.ts', '.js'];

const rollupConfig = {
  input: 'src/index.ts',
  output: {
    file: 'dist/adoptedStyleSheets.js',
    format: 'cjs',
    name: 'adoptedStyleSheets',
  },
};

export default rollupConfig;
