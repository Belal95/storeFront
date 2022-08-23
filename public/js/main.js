"use strict";
/** The slider container which holds all the image vertically */
const slider = document.getElementById("slider");

/** The visible part of the slider to the user */
const sliderView = document.getElementsByClassName("slider")[0];

/** Number of imgs in the slider */
const sliderImgsCount = document.querySelectorAll("#slider > div").length;

/** Counts what position currently the slider is on */
let sliderCounter = 0;

/** Run the script -- supposed to be called by the end of the file */
function onLoad() {
  sliderOn();
}

/** Start the slider listeners, intervals & logic */
function sliderOn() {
  // Set the width of the slider to be 100 by number of images in the slider
  slider.style.width(`${sliderImgsCount}00%`);

  makeArrows();
  makeBullets(sliderImgsCount);
}

/**
 * Find the index of a group of selected elements
 * @param children Array of selected elements
 * @param el Element to search for it's index
 * */
function indexOfChild(children, el) {
  const nodes = Array.prototype.slice.call(children);
  return nodes.indexOf(el);
}

/**
 * Move the slider view to the specified position
 * @param position The position of the image to go to
 * @param count The number of total images in the slider
 */
function goToImage(position, count) {
  if (position === -1) sliderCounter = position = count - 1;
  if (position === count) sliderCounter = position = 0;
  slider.style.left = `-${position}00%`;
}

/** Moves the slider to the right by one in the queue */
function goRight() {
  goToImage(++sliderCounter, sliderImgsCount);
}

/** Moves the slider to the left by one in the queue */
function goLeft() {
  goToImage(--sliderCounter, sliderImgsCount);
}

/** Creates the slider left amd right arrows & adds the click event listener */
function makeArrows() {
  const leftArrow = document.getElementById("arrowLeft");
  const rightArrow = document.getElementById("arrowRight");
  rightArrow.addEventListener("click", goRight);
  leftArrow.addEventListener("click", goLeft);
}

/** Create the slider bullets & add the click events to them */
function makeBullets(count) {
  const container = document.querySelector(".bullets");

  appendBullets(container, count);

  const bullets = document.querySelectorAll(".bullets div");
  console.log(bullets);
  for (let i = 0; i < bullets.length; i++) {
    // Sets a parameter on every bullet holding an array of all the bullets
    bullets[i].siblings = bullets;
    bullets[i].addEventListener("click", bulletClick);
  }
  indexOfChild(container.children, "element");
}
/**
 * Append n of div to a container
 *
 *  */
function appendBullets(container, count) {
  for (let i = 0; i < count; i++) {
    const bullet = document.createElement("div");
    container.appendChild(bullet);
  }
}
/**
 * Add click event listener for each bullet
 *
 * @param sliderCounter is set to the current bullet index
 * * The current bullet is selected
 * * Slider view change to current image
 *  */
function bulletClick(e) {
  console.log(e.target.siblings);
  sliderCounter = indexOfChild(e.target.siblings, e.target);
  e.target.siblings.forEach((el) => {
    el.classList.remove("selected");
  });
  e.target.classList.add("selected");
  goToImage(sliderCounter, sliderImgsCount);
}

onLoad();
