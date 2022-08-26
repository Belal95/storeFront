import { fadeIn, fadeOut } from "../general.js";

const arrowUp = document.getElementById("upArrow");

export function scroll() {
  if (document.documentElement.scrollTop > innerHeight * 0.5)
    arrowUp.style.opacity < 1 ? fadeIn(arrowUp) : "";
  else arrowUp.style.opacity > 0 ? fadeOut(arrowUp) : "";
}
function goUp() {
  scrollTo({ top: 0, behavior: "smooth" });
}
arrowUp.addEventListener("click", goUp);
