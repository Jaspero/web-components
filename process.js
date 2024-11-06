import { copyFile, readFile, readdir, rm, writeFile } from 'fs/promises';

(async () => {
  const files = await readdir('dist');
  const regex = /customElements\.define\((.*)\);export/;

  await Promise.all(
    files.map(async (file) => {
      if (
        !file.endsWith('.js') &&
        !file.endsWith('.map') &&
        !file.endsWith('.ts') &&
        !file.endsWith('.css')
      ) {
        const files = await readdir('dist/' + file);

        await Promise.allSettled(files.map((f) => copyFile('dist/' + file + '/' + f, 'dist/' + f)));

        await Promise.all(files.map((f) => rm('dist/' + file, { recursive: true })));
      } else if (file.endsWith('.wc.js')) {
        const path = `dist/${file}`;
        const data = (await readFile(path)).toString();
        const match = regex.exec(data);

        if (match) {
          await writeFile(
            path,
            data.replace(match[0], `try{customElements.define(${match[1]});}catch{};export`)
          );
        } else {
          console.error(`No matches found in file: ${path}`);
        }
      }
    })
  );
})();
