/* eslint-disable camelcase */
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';

const extensions = ['.ts', '.js'];

const rollupConfig = {
  input: 'src/index.ts',
  output: {
    file: 'dist/adoptedStyleSheets.js',
    format: 'iife',
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
  ],
};

export default rollupConfig;
