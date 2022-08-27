/**
 * Find the index of a group of selected elements
 * @param {Element []} children Array of selected elements
 * @param {Element} el Element to search for it's index
 * @return {Number} Index of passed element
 * */

export function indexOfChild(children, el) {
  const nodes = Array.prototype.slice.call(children);
  return nodes.indexOf(el);
}
