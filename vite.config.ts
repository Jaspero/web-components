import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { transform } from 'esbuild';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { sync } from 'glob';

// https://vitejs.dev/config/
export default defineConfig({
  root: './packages/lib/',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    lib: {
      entry: [
        ...sync('packages/lib/**/*.ts').map(i => i.replace(`packages\\lib\\`, '')),
        ...sync('packages/lib/**/*.wc.svelte').map(i => i.replace(`packages\\lib\\`, '')),
      ],
      formats: ['es']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        chunkFileNames: '[name].js',
        manualChunks: { svelte: ['svelte'] }
      }
    }
  },
  plugins: [
    svelte({
      exclude: /\.wc\.svelte$/ as any,
      compilerOptions: {
        customElement: false
      }
    }),
    svelte({
      include: /\.wc\.svelte$/ as any
    }),
    viteStaticCopy({
      targets: [
        {
          src: './src/types/',
          dest: './'
        },
        {
          src: './src/index.css',
          dest: './'
        }
      ]
    }),
    minifyEs()
  ]
});

// Workaround for https://github.com/vitejs/vite/issues/6555
function minifyEs() {
  return {
    name: 'minifyEs',
    renderChunk: {
      order: 'post' as const,
      async handler(code, chunk, outputOptions) {
        if (outputOptions.format === 'es') {
          return await transform(code, { minify: true });
        }

        return code;
      }
    }
  };
}
