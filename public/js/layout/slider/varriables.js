// Global Variables

/** The slider container which holds all the image vertically
 * @type Element
 */

const slider = document.getElementById("slider");

/** The visible part of the slider to the user
 * @type Element
 */

const sliderView = document.getElementsByClassName("slider")[0];

/** Number of imgs in the slider
 * @type Number
 */

const sliderImgsCount = document.querySelectorAll("#slider > div").length;

/** Counts what position currently the slider is on
 * @type Number
 */

let sliderCounter = 0;
