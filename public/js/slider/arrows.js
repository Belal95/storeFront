import { goLeft, goRight } from "./images.js";

// Arrows fn

/** Creates the slider left amd right arrows & adds the click event listener */

export function makeArrows() {
  const leftArrow = document.getElementById("arrowLeft");
  const rightArrow = document.getElementById("arrowRight");
  rightArrow.addEventListener("click", goRight);
  leftArrow.addEventListener("click", goLeft);
}
