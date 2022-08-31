import { appendChild } from "../helpers/manipulation.js";

/**
 *
 * @param {String} err
 * @param {HTMLInputElement} target
 */
export function createError(err, target) {
  console.log(target);
  const container = target.parentElement;
  err = document.createTextNode(err);
  appendChild(container, "div", "class:error", 1, err);
}
