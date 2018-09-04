import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
const path = require('path');
const distDir = path.resolve(__dirname, './dist');

export default {
  // external: ['react'],
  input: path.join(distDir, 'main.bundle.js'),
  output: {
    format: 'iife',
    sourceMap: 'inline',
    file: path.join(distDir, 'rollup.bundle.js'),
    name: 'SyndesisModule'
  },
  plugins: [
    resolve({
      main: true,
      module: true,
      jsnext: true
    }),
    commonjs()
  ]
}
