import { goRight } from "./images.js";
import { makeArrows } from "./arrows.js";
import { makeBullets, goToBullet } from "./bullets.js";
// Slider General fn
/** Creates the slider, listeners, intervals & logic */

function sliderOn() {
  // Set the width of the slider to be 100 by number of images in the slider
  slider.style.width = `${sliderImgsCount}00%`;

  makeArrows();
  goToBullet(makeBullets(sliderImgsCount));
  setInterval(goRight, 5000);
}

export { sliderOn };
