import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { transform } from 'esbuild';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { sync } from 'glob';
import dts from 'vite-plugin-dts';
import * as fs from 'fs';
import * as path from 'path';
import type { Plugin } from 'vite';
import type { NormalizedOutputOptions, OutputBundle } from 'rollup';

export default defineConfig({
  root: './packages/lib/',
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    outDir: '../../dist',
    emptyOutDir: true,
    lib: {
      entry: [
        ...sync('packages/lib/**/*.ts').map((i) =>
          i.replace(`packages/lib/`, '').replace(`packages\\lib\\`, '')
        ),
        ...sync('packages/lib/**/*.wc.svelte').map((i) =>
          i.replace(`packages/lib/`, '').replace(`packages\\lib\\`, '')
        )
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
      include: /\.wc\.svelte$/ as any,
      compilerOptions: {
        customElement: true
      }
    }),
    {
      apply: 'build',
      ...dts({
        insertTypesEntry: true,
        include: sync('packages/lib/**/*.ts').map((i) =>
          i.replace(`packages/lib/`, '').replace(`packages\\lib\\`, '')
        )
      })
    },
    minifyEs(),
    generateComponentExport()
  ]
});

// Workaround for https://github.com/vitejs/vite/issues/6555
function minifyEs(): Plugin {
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

function generateComponentExport(): Plugin {
  return {
    name: 'component-exporter',
    async writeBundle(options: NormalizedOutputOptions, bundle: OutputBundle) {
      const componentsDir = path.resolve('dist')
      const outputFilePath = path.join(componentsDir, 'export.js')

      if (!fs.existsSync(componentsDir)) {
        fs.mkdirSync(componentsDir, { recursive: true })
      }

      try {
        const files = await fs.promises.readdir(componentsDir)

        const wcImports = files
          .filter(file => file.endsWith('.wc.js'))
          .map(file => `import('./${file}')`)
          .join(',\n    ')

        const cssImports = files
          .filter(file => file.endsWith('.css'))
          .map(file => `import('./${file}')`)
          .join(',\n    ')

        const content = `const t = () => {
  return Promise.all([
    ${cssImports},
    ${wcImports}
  ]);
};

export { t as default };
`

        await fs.promises.writeFile(outputFilePath, content)
      } catch (error) {
        throw error
      }
    }
  };
}