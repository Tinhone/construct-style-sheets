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
    name: 'adoptedStyleSheets',
  },
  plugins: [
    nodeResolve({
      extensions,
    }),
    babel({ babelHelpers: 'bundled', extensions }),
    copy({
      targets: [
        {
          dest: 'dist',
          rename: 'adoptedStyleSheets.d.ts',
          src: 'src/typings.d.ts',
        },
      ],
    }),
    terser({
      ecma: 2015,
    }),
  ],
};

export default rollupConfig;
