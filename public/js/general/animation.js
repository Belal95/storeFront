/**
 * Change the opacity of an element from 0 to 1 in 100ms
 * @param {Element} el the element to fade in
 * @param {Number} _opacity is passed when the function is called recursively
 */

export function fadeIn(el, _opacity, _looped) {
  if (el.style.display !== "block" || _looped) {
    el.style.display = "block";
    /** Value of opacity to Fade From */
    let value = _opacity || 0;
    if (value < 1) {
      value += 0.01;
      setTimeout(function () {
        fadeIn(el, value, 1);
      }, 1);
    }
    el.style.opacity = value;
  }
}

/**
 * Change the opacity of an element from 1 to 0 in 100ms
 * @param {Element} el the element to fade out
 * @param {Number} _opacity is passed when the function is called recursively
 */

export function fadeOut(el, _opacity, _looped) {
  /** Value of opacity to shrink Fade from */
  if (el.style.display !== "none" || _looped) {
    let value = _opacity || 1;
    if (value > 0) {
      value -= 0.01;
      setTimeout(function () {
        fadeOut(el, value, 1);
      }, 1);
    } else el.style.display = "none";
    el.style.opacity = value;
  }
}

/**
 * TODO: Add transform origin variable
 * TODO: Try to remove passing 1 or 0 for shrink
 * TODO: Try make the animation be depending on width not scale
 */

/**
 * Scale element down then set display to none
 * @param {HTMLElement} item Element to shrink to oblivion
 * @param {Number} scale Pass 1 — That is the start point
 */

export function shrink(item, scale) {
  if (item.style.display !== "none") {
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
}

/**
 * Scale element down then set display to none
 * @param {HTMLElement} item Element to shrink to oblivion
 * @param {Number} scale Pass 1 — That is the start point
 */

export function enlarge(item, scale) {
  if (item.style.display !== "block") {
    item.style.display = "block";
    if (scale < 1) {
      scale += 0.01;
      setTimeout(function () {
        enlarge(item, scale);
      }, 2);
    }
    item.style.transform = `scale(${scale})`;
  }
}
