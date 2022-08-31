/**
 * Append count of elements to a container, also can apply an attribute & append a child or array of children
 * @param {HTMLElement} container The element to append child to
 * @param {String|HTMLElement} el Tag of element to append — example-: "div" — Can be an html element
 * @param {String} _attr Apply passed string as attribute (splits by colon) — example-: "class:card" — pass falsy to pass next parameter
 * @param {Boolean} _bool Attribute is applied to created element — pass falsy to apply to container
 * @param {HTMLElement|HTMLElement[]} _child Append passed element or array of elements to created element
 *  */

export function appendChild(container, el, _attr, _bool = 1, _child) {
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

export function appendDiv(container, count) {
  for (let i = 0; i < count; i++) {
    appendChild(container, "div");
  }
}
