/**
 * Change the opacity of an element from 0 to 1 in 100ms
 * @param {Element} el the element to fade in
 * @param {Number} _opacity is passed when the function is called recursively
 */

export function fadeIn(el, _opacity) {
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

export function fadeOut(el, _opacity) {
  let value = _opacity || 1;
  if (value > 0) {
    value -= 0.01;
    setTimeout(function () {
      fadeOut(el, value);
    }, 1);
  } else el.style.display = "none";
  el.style.opacity = value;
}

export function shrink(item, scale) {
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
export function enlarge(item, scale) {
  item.style.display = "block";
  if (scale < 1) {
    scale += 0.01;
    setTimeout(function () {
      enlarge(item, scale);
    }, 2);
  }
  item.style.transform = `scale(${scale})`;
}
