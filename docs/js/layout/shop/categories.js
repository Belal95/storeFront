import {
  widthUp,
  widthDown,
  show,
  hide,
  fadeIn,
} from "../../helpers/animation.js";

const loader = document.getElementById("loading");
const itemsHolder = document.getElementById("items");
console.log();
/**
 * hide the loader and show the items
 * @param {Number} hideLoader pass timeout
 */
export function hideLoader(_time = 0) {
  window.setTimeout(() => {
    hide(loader);
    show(itemsHolder);
  }, _time);
}

/** Categories buttons */
const btns = document.querySelectorAll(".categories p");
/**
 * Hide all the cards and only show the selected category cards
 */

export function selectCategory() {
  /** Select all the items */
  const allItems = itemsHolder.children;
  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      hide(itemsHolder);
      show(loader);
      /** The selected category */
      const category = e.target.getAttribute("category");
      /** The selected items from that category */
      const selectedItems = document.querySelectorAll(
        `#items div[category="${category}"]`
      );
      /** Subtraction of selected items from all the items  */
      let outItems = [...allItems].filter(
        (key) => ![...selectedItems].includes(key)
      );
      outItems.forEach((item) => {
        hide(item);
      });
      selectedItems.forEach((item) => {
        show(item);
      });
      hideLoader(500);
    });
  });
}
