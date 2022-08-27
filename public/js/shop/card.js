import { appendChild } from "../general.js";
import { addToCart } from "./buttons.js";
import { selectCategory } from "./categories.js";
/**
 * An object to hold all the item data
 * @param {String} title Item title
 * @param {String} description Item descriptions
 * @param {String} category Item category
 * @param {Number} id Item id
 */
function Card(title, description, category, id) {
  /** @type HTMLDivElement*/
  this.element = (function makeCard(
    t = title,
    d = description,
    c = category,
    i = id
  ) {
    const imgHolder = document.createElement("div");
    const text = document.createElement("div");
    const btn = document.createElement("div");
    const h4Text = document.createTextNode(t);
    const pText = document.createTextNode(d);
    const btnText = document.createTextNode("Add to cart");
    const card = document.createElement("div");

    card.classList.add("card");
    appendChild(imgHolder, "img", `src:./images/${c}_${i}.jpg`);
    appendChild(text, "h4", "class:text", 0, h4Text);
    appendChild(text, "p", 0, 0, pText);
    appendChild(card, imgHolder, "class:imgHolder");
    appendChild(card, text, `category:${c}`, 0);
    appendChild(btn, btnText, `index:${i}`, 0);
    appendChild(text, btn, "class:btn");
    return card;
  })();
}

export function makeShop() {
  addCards();
  addToCart();
  selectCategory();
}
function addCards() {
  const items = document.getElementById("items");
  makeCards(6).forEach(function (el) {
    items.appendChild(el.element);
  });
}

function makeCards(count) {
  let cards = [];
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui delectus eligendi officia quisquam. Odit, necessitatibus id. Iure quos unde ipsa adipisci?";
  for (let i = 1; i <= count; i++) {
    const woman = new Card(`Women item`, text, "women", i);
    const man = new Card(`Men item`, text, "men", i);
    const kid = new Card(`Kids item`, text, "kids", i);
    cards.push(woman);
    cards.push(man);
    cards.push(kid);
  }
  return cards;
}
