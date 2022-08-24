"use strict";
/**
 * ! DON't Work on this project now !!! finnish the jQuery project first!!
 * TODO: Make the Cards added dynamically
 * TODO: Add catagories
 * TODO: Add scroll up button
 * TODO: Hide nav when footer enter the view
 * TODO: Validate Contact us Form
 * TODO:
 */

/**
 * @author Belal Mahmoud
 */
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

// General fn

/**
 * Find the index of a group of selected elements
 * @param {Element []} children Array of selected elements
 * @param {Element} el Element to search for it's index
 * @return {Number} Index of passed element
 * */

function indexOfChild(children, el) {
  const nodes = Array.prototype.slice.call(children);
  return nodes.indexOf(el);
}

/**
 * Append n of div to a container if class or src is found
 * @param {Element}container The element to append children to
 * @param {Number}count Number of elements to append
 * @param {String}_class Apply passed string to created div as class *— pass falsy value if you want to pass next parameter only*
 * @param {Element}_child Append passed element to created element
 *  */

function appendChildren(container, count, _class, _child) {
  for (let i = 0; i < count; i++) {
    const bullet = document.createElement("div");
    if (!!_class) bullet.classList.add(_class);
    if (!!_child) bullet.appendChild(_child);
    container.appendChild(bullet);
  }
}

// Start the file here

/** Run the script -- supposed to be called by the end of the file */
function onLoad() {
  sliderOn();
}

// Slider General fn

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

/**
 * Select the bullet for current image and deselect all it's siblings
 * @param {Element} bullet Pass the bullet to select *—must have property siblings holding it's siblings*
 *  */
function goToBullet(bullet) {
  bullet.siblings.forEach((el) => {
    el.classList.remove("selected");
  });
  bullet.classList.add("selected");
}

/** Moves the slider to the right by one in the queue */

function goRight() {
  goToImage(++sliderCounter);
}

/** Moves the slider to the left by one in the queue */

function goLeft() {
  goToImage(--sliderCounter);
}

/** Creates the slider, listeners, intervals & logic */

function sliderOn() {
  // Set the width of the slider to be 100 by number of images in the slider
  slider.style.width = `${sliderImgsCount}00%`;

  makeArrows();
  goToBullet(makeBullets(sliderImgsCount));
}

// Arrows fn

/** Creates the slider left amd right arrows & adds the click event listener */

function makeArrows() {
  const leftArrow = document.getElementById("arrowLeft");
  const rightArrow = document.getElementById("arrowRight");
  rightArrow.addEventListener("click", goRight);
  leftArrow.addEventListener("click", goLeft);
}

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

onLoad();
