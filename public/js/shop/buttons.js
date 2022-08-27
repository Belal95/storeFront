import { addToCart } from "./cart.js";

/**
 * Add event listener to the buttons so when clicked it adds one to the counter
 */

export function addToCartOnClick() {
  const buttons = document.querySelectorAll("#items .btn");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", addToCart);
  });
}
