import { enlarge, shrink } from "../general.js";

const btns = document.querySelectorAll(".categories p");
export function selectCategory() {
  const allItems = document.querySelectorAll("#items > .card");
  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const category = e.target.getAttribute("category");
      const selectedItems = document.querySelectorAll(
        `#items div[category="${category}"]`
      );
      let outItems = [...allItems].filter(
        (key) => ![...selectedItems].includes(key)
      );
      console.log(outItems);
      outItems.forEach((item) => {
        shrink(item, 1);
      });
      selectedItems.forEach((item) => {
        enlarge(item, 0);
      });
    });
  });
}

// const p = document.createElement('p')
// p.
