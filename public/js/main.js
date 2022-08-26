"use strict";
/**
 * ! DON't Work on this project now !!! finnish the jQuery project first!!
 * TODO: Add scroll up button
 * TODO: Make the Cards added dynamically
 * TODO: Add catagories
 * TODO: Hide nav when footer enter the view
 * TODO: Validate Contact us Form
 * TODO:
 */

/**
 * @author Belal Mahmoud
 */

import { sliderOn } from "./slider/slider.js";
import { scroll } from "./upArrow/arrowUp.js";

/** Run the script -- supposed to be called by the end of the file */
function onLoad() {
  sliderOn();
}

window.onload = onLoad;
window.onscroll = scroll;
