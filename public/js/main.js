// "use strict";
/**
 * TODO: Beautify css
 * TODO: Hide nav when footer enter the view
 * TODO: Add cart page with added items
 * TODO: Make better animation depending on width
 * TODO:
 */

/**
 * @author Belal Mahmoud
 */

import { scrollOn } from "./upArrow/arrowUp.js";
import { sliderOn } from "./slider/slider.js";
import { makeShop } from "./shop/card.js";
import { updateCart } from "./shop/cart.js";
import { validationOn } from "./validation/contact.js";
window.onload = onLoad;

/**
 * Fires the scripts depending on the file
 */
function onLoad() {
  scrollOn;
  const path = getFileName();
  if (path == "index") onLoadHome();
  if (path == "about") onLoadAbout();
  if (path == "contact") onLoadContact();
}

/**
 * Gets the current name of the opened file(page)
 * @returns The name of opened file
 */
function getFileName() {
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1].split(".")[0];
  return path;
}

/** Run the script for home page */
function onLoadHome() {
  updateCart();
  sliderOn();
  makeShop();
}

/** Run the script for about page */
function onLoadAbout() {
  updateCart();
}

/** Run the script for contact page */
function onLoadContact() {
  updateCart();
  validationOn();
}
