export function formatDisplayFileName(name: string, format: string, formatter?: (name: string) => string) {
  switch (format) {
    case 'custom':
      return formatter && formatter(name);
    case 'camel':
      const beforeExtension = name.substring(0, name.lastIndexOf('.'));
      name = beforeExtension.toLowerCase().replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
      return name.substring(0, 1).toLowerCase() + name.substring(1);
    case 'snake':
      name = name.substring(0, name.lastIndexOf('.'));
      return name && name.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )!
        .map(s => s.toLowerCase())
        .join('_');
    case 'kebab':
      name = name.substring(0, name.lastIndexOf('.'));
      return name && name.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )!
        .map(s => s.toLowerCase())
        .join('-');
    case 'pascal':
      name = name.substring(0, name.lastIndexOf('.'));
      return name && name.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )!
        .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
        .join('');
    case 'title':
      name = name.substring(0, name.lastIndexOf('.'));
      return name && name.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )!
        .map(x => x.slice(0, 1).toUpperCase() + x.slice(1))
        .join(' ');
    case 'upper':
      name = name.substring(0, name.lastIndexOf('.'));
      return name && name.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )!
        .map(s => s.toUpperCase())
        .join('_');
    case 'lower':
      name = name.substring(0, name.lastIndexOf('.'));
      return name && name.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )!
        .map(s => s.toLowerCase())
        .join('');
    case 'dot':
      name = name.substring(0, name.lastIndexOf('.'));
      return name && name.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )!
        .map(s => s.toLowerCase())
        .join('.');
    case 'sentence':
      name = name.substring(0, name.lastIndexOf('.'));
      name = name && name.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )!.join(' ');
      return name.slice(0, 1).toUpperCase() + name.slice(1);
  }
}

