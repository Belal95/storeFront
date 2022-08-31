import { createError } from "./error.js";

/**
 *
 * @param {String} uName
 * @returns
 */

export function checkName(uName, element) {
  const rgx = /([A-Za-z]){2,}/g;
  const status = rgx.test(uName);
  const err = "Please enter only characters in your name";
  if (!status && !element.parentElement.children[2]) createError(err, element);
  else return status;
}

/**
 *
 * @param {String} email
 * @returns
 */

export function checkEmail(email, element) {
  const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const status = rgx.test(email);
  const err = "Please enter a valid email";
  if (!status && !element.parentElement.children[2]) createError(err, element);
  else return status;
}

/**
 *
 * @param {String} phone
 * @returns
 */

export function checkPhone(phone, element) {
  const rgx = /^01[0125][0-9]{8}$/;
  const status = rgx.test(phone);
  const err = "Please enter an Egyptian phone number";
  if (!status && !element.parentElement.children[2]) createError(err, element);
  else return status;
}

/**
 *
 * @param {String} message
 * @returns
 */

export function checkMessage(message, element) {
  const rgx = /^[ !@#$%^&*()+}{:"'?/.,\w\n\][]{0,500}$/;
  const status = rgx.test(message);
  const err = "Please enter only 500 characters";
  if (!status && !element.parentElement.children[2]) createError(err, element);
  else return status;
}
