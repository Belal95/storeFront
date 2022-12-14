import { fadeIn, fadeOut } from "../helpers/animation.js";
import {
  checkEmail,
  checkMessage,
  checkName,
  checkPhone,
} from "./validation.js";

const form = {
  uName: document.getElementById("uName"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  message: document.getElementById("message"),
};

/**
 * Fires validation functions and listeners
 */
export function validationOn() {
  for (let key in form) {
    form[key].addEventListener("focusout", check);
  }
}

/**
 *
 * @param {Event} e
 */

function check(e) {
  const element = e.target;
  const value = element.value;
  let status;
  if (element === form.uName) status = checkName(value, element);
  else if (element === form.email) status = checkEmail(value, element);
  else if (element === form.phone) status = checkPhone(value, element);
  else if (element === form.message) status = checkMessage(value, element);
  let errDiv = element.parentElement.children[2];
  if (!!status) {
    if (!!errDiv) fadeOut(errDiv);
  } else fadeIn(errDiv);
}
