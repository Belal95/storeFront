import { enlarge, shrink } from "../general/animation.js";

/** Categories buttons */
const btns = document.querySelectorAll(".categories p");

/**
 * Hide all the cards and only show the selected category cards
 */

export function selectCategory() {
  /** Select all the items */
  const allItems = document.querySelectorAll("#items > .card");
  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      /** The selected category */
      const category = e.target.getAttribute("category");
      /** The selected items from that category */
      const selectedItems = document.querySelectorAll(
        `#items div[category="${category}"]`
      );
      /** Subtraction of selected items all the items  */
      let outItems = [...allItems].filter(
        (key) => ![...selectedItems].includes(key)
      );
      outItems.forEach((item) => {
        shrink(item, 1);
      });
      selectedItems.forEach((item) => {
        enlarge(item, 0);
      });
    });
  });
}
