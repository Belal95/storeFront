import { fadeIn, fadeOut } from "../general/animation.js";

const arrowUp = document.getElementById("upArrow");
arrowUp.addEventListener("click", goUp);

/**
 * Show & hide the arrow button on scroll
 */
export function scroll() {
  if (document.documentElement.scrollTop > innerHeight * 0.5)
    arrowUp.style.opacity < 1 ? fadeIn(arrowUp) : "";
  else arrowUp.style.opacity > 0 ? fadeOut(arrowUp) : "";
}

/**
 * Move the scroll to the top
 */
function goUp() {
  scrollTo({ top: 0, behavior: "smooth" });
}
