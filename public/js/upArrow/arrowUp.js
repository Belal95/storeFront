import { fadeIn, fadeOut } from "../general/animation.js";

const arrowUp = document.getElementById("upArrow");
arrowUp.addEventListener("click", goUp);

export let scrollOn = window.addEventListener("scroll", scroll);
/**
 * Show & hide the arrow button on scroll
 */
function scroll() {
  if (document.documentElement.scrollTop > innerHeight * 0.5) {
    removeEventListener(scrollOn, window);
    arrowUp.style.opacity < 1 ? fadeIn(arrowUp) : "";
    setTimeout(() => {
      scrollOn = window.addEventListener("scroll", scroll);
    }, 1000);
  } else if (document.documentElement.scrollTop <= innerHeight * 0.5) {
    removeEventListener(scrollOn, window);
    arrowUp.style.opacity > 0 ? fadeOut(arrowUp) : "";
    setTimeout(() => {
      scrollOn = window.addEventListener("scroll", scroll);
    }, 1000);
  }
}

/**
 * Move the scroll to the top
 */
function goUp() {
  scrollTo({ top: 0, behavior: "smooth" });
}
