import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/bhasha-ime-injector.ts',
  output: {
    file: 'examples/playground/public/bhasha-ime-injector.js',
    format: 'iife',
    name: 'BhashaIMEInjector',
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      compilerOptions: {
        declaration: false,
        declarationDir: undefined,
      },
    }),
    nodeResolve(),
    terser(),
  ],
};
