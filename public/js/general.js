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

/**
 * Change the opacity of an element from 0 to 1 in 100ms
 * @param {Element} el the element to fade in
 * @param {Number} _opacity is passed when the function is called recursively
 */
function fadeIn(el, _opacity) {
  el.style.display = "block";
  let value = _opacity || 0;
  if (value < 1) {
    value += 0.01;
    setTimeout(function () {
      fadeIn(el, value);
    }, 1);
  }
  el.style.opacity = value;
}
/**
 * Change the opacity of an element from 1 to 0 in 100ms
 * @param {Element} el the element to fade out
 * @param {Number} _opacity is passed when the function is called recursively
 */
function fadeOut(el, _opacity) {
  let value = _opacity || 1;
  if (value > 0) {
    value -= 0.01;
    setTimeout(function () {
      fadeOut(el, value);
    }, 1);
  } else el.style.display = "none";
  el.style.opacity = value;
}

export { indexOfChild, appendChildren, fadeIn, fadeOut };
