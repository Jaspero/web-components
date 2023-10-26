import {readFile, readdir, writeFile} from 'fs/promises';

(async () => {
	const files = await readdir('dist');
	const regex = /customElements\.define\((.*)\);export/;

	await Promise.all(files.map(async file => {
		if (!file.endsWith('.wc.js')) {
			return;
		}

		const path = `dist/${file}`;
		const data = (await readFile(path)).toString();
		const match = regex.exec(data);

		await writeFile(
			path,
			data.replace(
				match[0],
				`try{customElements.define(${match[1]});}catch{};export`
			)
		);
	}));
})();