function unesc(str: string) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}

function parse(pointer: string) {
  if (pointer === '') {
    return [];
  }

  if (pointer.charAt(0) !== '/') {
    pointer = '/' + pointer;
  }

  return pointer.substring(1).split(/\//).map(unesc);
}

export function get<T = any, V = any>(obj: T, pointer: string): V {
  const refTokens = Array.isArray(pointer) ? pointer : parse(pointer);

  for (let i = 0; i < refTokens.length; ++i) {
    const tok = refTokens[i];

    if (!(typeof obj == 'object' && tok in obj)) {
      throw new Error('Invalid reference token: ' + tok);
    }

    obj = obj[tok];
  }

  return obj as any;
}
