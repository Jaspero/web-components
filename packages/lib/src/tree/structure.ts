export function jpTreeStructure(tree: Element): Object {
  if(tree.tagName !== 'JP-TREE' || !tree.hasAttribute('value'))
    return ''

  let structure = {}
  
  structure[tree.getAttribute('value')] = []

  for (const child of tree.children) {
    if(!child.hasAttribute('value')) continue;

    if(child.tagName == 'JP-NODE'){
      structure[tree.getAttribute('value')].push(child.getAttribute('value'))
    }
    if(child.tagName == 'JP-TREE'){
      structure[tree.getAttribute('value')].push(jpTreeStructure(child))
    }
  }
  return structure
}