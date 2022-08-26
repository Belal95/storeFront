// General fn

/**
 * Find the index of a group of selected elements
 * @param {Element []} children Array of selected elements
 * @param {Element} el Element to search for it's index
 * @return {Number} Index of passed element
 * */

function indexOfChild(children, el) {
  const nodes = Array.prototype.slice.call(children);
  return nodes.indexOf(el);
}

/**
 * Append n of div to a container if class or src is found
 * @param {Element}container The element to append children to
 * @param {Number}count Number of elements to append
 * @param {String}_class Apply passed string to created div as class *— pass falsy value if you want to pass next parameter only*
 * @param {Element}_child Append passed element to created element
 *  */

function appendChildren(container, count, _class, _child) {
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    if (!!_class) div.classList.add(_class);
    if (!!_child) div.appendChild(_child);
    container.appendChild(div);
  }
}

export { indexOfChild, appendChildren };
