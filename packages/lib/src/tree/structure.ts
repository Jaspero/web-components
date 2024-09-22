export function jpTreeStructure(tree: Element): Object {
  if (tree.tagName !== 'JP-TREE' || !tree.hasAttribute('value')) return '';

  const structure: {
    [key: string]: string[]
  } = {};
  const ind = tree.getAttribute('value') as string;

  structure[ind] = [];

  for (const child of tree.children) {
    if (!child.hasAttribute('value')) continue;

    if (child.tagName == 'JP-NODE') {
      structure[ind].push(child.getAttribute('value') as string);
    }
    if (child.tagName == 'JP-TREE') {
      structure[ind].push(jpTreeStructure(child) as string);
    }
  }
  return structure;
}
