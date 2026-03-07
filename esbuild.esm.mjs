import * as esbuild from 'esbuild';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

await esbuild.build({
  entryPoints: ['src/chord2mml.ts'],
  bundle: true,
  format: 'esm',
  outfile: 'dist/chord2mml.mjs',
  platform: 'browser',
  plugins: [{
    name: 'cjs-to-mjs',
    setup(build) {
      build.onResolve({ filter: /chord2mml_chord2ast\.cjs/ }, () => ({
        path: resolve(__dirname, 'src/chord2mml_chord2ast.mjs'),
      }));
    }
  }]
});
