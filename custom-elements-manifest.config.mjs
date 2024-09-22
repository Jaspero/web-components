import {customElementVsCodePlugin} from 'custom-element-vs-code-integration';

function sveltePlugin() {
	return {
		name: 'svelte-plugin',
		analyzePhase({ts, node, moduleDoc}) {
			switch (node.kind) {
				case ts.SyntaxKind.ClassDeclaration: {
					const tagName = moduleDoc.path.split('/')[1].split('.')[0];
					const className = node.name.getText();
					const classDeclaration = moduleDoc.declarations.find(declaration => declaration.name === className);

					classDeclaration.tagName = `jp-${tagName}`;
					classDeclaration.attributes = classDeclaration.members.map(member => {
						return {
							name: member.name,
							fieldName: member.name
						}
					});

					break;
				}
			}
		}
	}
}

export default {
	globs: ['dist/*.wc.js'],
	outdir: 'dist',
	packagejson: true,
	plugins: [
		sveltePlugin(),
		customElementVsCodePlugin({
			outdir: 'dist'
		})
	]
}