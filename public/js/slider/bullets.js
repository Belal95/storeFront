import { appendChildren, indexOfChild } from "../general.js";
import { goToImage } from "./images.js";
// Bullets fn

/**
 * Create the slider bullets & add the click events to them
 * @param {number} count number of bullets to create for slider
 * @returns {Element} First bullet
 * */

function makeBullets(count) {
  const container = document.querySelector(".bullets");

  appendChildren(container, count);

  const bullets = document.querySelectorAll(".bullets div");
  for (let i = 0; i < bullets.length; i++) {
    // ! Do the next line take place in memory or is it referencing ???????????????????????????????????????????
    // Sets a parameter on every bullet holding an array of all the bullets
    bullets[i].siblings = bullets;
    bullets[i].addEventListener("click", onBulletClick);
  }
  indexOfChild(container.children, "element");
  console.log;
  return bullets[0];
}

/**
 * Add click event listener for each bullet
 * @param sliderCounter is set to the current bullet index
 * * The current bullet is selected
 * * Slider view change to current image
 *  */

function onBulletClick(e) {
  sliderCounter = indexOfChild(e.target.siblings, e.target);
  goToBullet(e.target);
  goToImage(sliderCounter, sliderImgsCount);
}

/**
 * Select the bullet for current image and deselect all it's siblings
 * @param {Element|Number} bullet Pass the bullet or it's index to select *—must have property siblings holding it's siblings*
 *  */
function goToBullet(bullet) {
  console.log(typeof bullet);
  console.log(document.querySelectorAll(".bullets *"));

  if (typeof bullet === "number") {
    bullet = document.querySelectorAll(".bullets > *")[bullet];
  }
  console.log(bullet);
  bullet.siblings.forEach((el) => {
    el.classList.remove("selected");
  });
  bullet.classList.add("selected");
}

export { makeBullets, goToBullet };