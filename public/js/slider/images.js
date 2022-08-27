import { goToBullet } from "./bullets.js";
/** Moves the slider to the right by one in the queue */

function goRight() {
  goToImage(++sliderCounter);
  goToBullet(sliderCounter);
}

/** Moves the slider to the left by one in the queue */

function goLeft() {
  goToImage(--sliderCounter);
  goToBullet(sliderCounter);
}

/**
 * Move the slider view to the specified position
 * @param {Number} position The position of the image to go to
 * @param {Number} count The number of total images in the slider
 */

function goToImage(position, count = sliderImgsCount) {
  if (position === -1) position = count - 1;
  if (position === count) position = 0;
  sliderCounter = position;
  slider.style.left = `-${position}00%`;
}

export { goRight, goLeft, goToImage };
