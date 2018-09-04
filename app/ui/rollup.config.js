import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
const path = require('path');
const distDir = path.resolve(__dirname, './dist');
const srcDir = path.resolve(__dirname, './src');

export default {
  input: path.join(srcDir, 'index.tsx'),
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
      jsnext: true,
      // extensions: [ '.tsx', '.ts', '.js', '.jsx', '.json', '.css' ]  // Default: [ '.mjs', '.js', '.json', '.node' ]
    }),
    commonjs({
      include: [ 'node_modules/**']
    }),
    typescript()
  ]
}
