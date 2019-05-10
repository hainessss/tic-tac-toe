// Merges a list of class names into a single string, getting rid of falsy items
const cn = (...names) => names
  .filter(s => s && typeof s === 'string' && s.length > 0)
  .join(' ');

export default cn;
