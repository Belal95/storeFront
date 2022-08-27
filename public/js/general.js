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
 * Append count of elements to a container, also can apply an attribute & append a child or array of children
 * @param {HTMLElement} container The element to append child to
 * @param {String|HTMLElement} el Tag of element to append — example-: "div" — Can be an html element
 * @param {String} _attr Apply passed string as attribute (splits by colon) — example-: "class:card" — pass falsy to pass next parameter
 * @param {Boolean} _bool Attribute is applied to created element — pass falsy to apply to container
 * @param {HTMLElement|HTMLElement[]} _child Append passed element or array of elements to created element
 *  */

function appendChild(container, el, _attr, _bool = 1, _child) {
  const div = el.constructor === String ? document.createElement(el) : el;
  if (!!_attr) {
    const attr = _attr.split(":");
    if (_bool) {
      div.setAttribute(attr[0], attr[1]);
    } else {
      container.setAttribute(attr[0], attr[1]);
    }
  }
  if (!!_child) {
    if (_child.constructor === Array) {
      const children = _child;
      for (let j = 0; j < children.length; j++) div.appendChild(children[j]);
    } else div.appendChild(_child);
  }
  container.appendChild(div);
}

/**
 * Append number of divisions in an element
 * @param {HTMLElement} container  Container to append children to
 * @param {Number} count Count of divisions to append
 */
function appendDiv(container, count) {
  for (let i = 0; i < count; i++) {
    appendChild(container, "div");
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

function shrink(item, scale) {
  if (scale > 0) {
    scale -= 0.01;
    setTimeout(function () {
      shrink(item, scale);
    }, 2);
  } else {
    item.style.display = "none";
  }
  item.style.transform = `scale(${scale})`;
}
function enlarge(item, scale) {
  item.style.display = "block";
  if (scale < 1) {
    scale += 0.01;
    setTimeout(function () {
      enlarge(item, scale);
    }, 2);
  }
  item.style.transform = `scale(${scale})`;
}

export {
  indexOfChild,
  appendChild,
  appendDiv,
  fadeIn,
  fadeOut,
  shrink,
  enlarge,
};
