"use strict";
/**
 * ! DON't Work on this project now !!! finnish the jQuery project first!!
 * TODO: Add catagories
 * TODO: Add Cart with a counter
 * TODO: Validate Contact us Form with regex
 * TODO: Beautify css
 * TODO: Hide nav when footer enter the view
 * TODO: Add cart page with added items
 * TODO: Do a zoom in & out animation  - transform origin left top  - scale to 0 - display none - reverse
 * TODO:
 */

/**
 * @author Belal Mahmoud
 */

import { scroll } from "./upArrow/arrowUp.js";
import { sliderOn } from "./slider/slider.js";
import { makeShop } from "./shop/card.js";
/** Run the script */
function onLoad() {
  sliderOn();
  makeShop();
}

window.onload = onLoad;
window.onscroll = scroll;
