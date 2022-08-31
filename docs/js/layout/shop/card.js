import { appendChild } from "../../helpers/manipulation.js";
import { addToCartOnClick } from "./buttons.js";
import { selectCategory } from "./categories.js";
import { Item } from "./item.js";

/**
 * Fires the shop function & listeners
 */

export function makeShop() {
  addCards(6);
  addToCartOnClick();
  selectCategory();
}

/**
 * Takes the item data and return a card element with all the data appended
 * @param {String} title Card title
 * @param {String} description Card descriptions
 * @param {String} category Card category
 * @param {Number} id Card index
 * @return {HTMLDivElement} Div with card as class & category as category attribute and all the items data appended
 */

export function makeCard(title, description, category, id) {
  /** Div holding image */
  const imgHolder = document.createElement("div");
  /** Div holding text & button */
  const text = document.createElement("div");
  /** Div as add to cart button */
  const btn = document.createElement("div");
  /** Product title text node */
  const h4Text = document.createTextNode(title);
  /**  Product description text node */
  const pText = document.createTextNode(description);
  /**  Add to cart text node */
  const btnText = document.createTextNode("Add to cart");
  /**  Container for all Elements */
  const card = document.createElement("div");
  card.classList.add("card");

  /**Append img with it's src to image holder div */
  appendChild(imgHolder, "img", `src:./images/${category}_${id}.jpg`);
  /**Append title to h4 and the h4 to text holder and give text holder */
  appendChild(text, "h4", "class:text", 0, h4Text);
  /** Append description to p and the p to text div */
  appendChild(text, "p", 0, 0, pText);
  /** Append image holder to card */
  appendChild(card, imgHolder, "class:imgHolder");
  /** Append text holder to card and give the card the attribute category */
  appendChild(card, text, `category:${category}`, 0);
  /** Append text to button and give the button the attribute index */
  appendChild(btn, btnText, `index:${id}`, 0);
  /** Append btn to text holder */
  appendChild(text, btn, "class:btn");
  return card;
}

/**
 * Add all the cards to the items section
 * @param {Number} count Number of cards is 3 times the count — one time for each category
 */

function addCards(count) {
  /** Cards container */
  const items = document.getElementById("items");
  makeCards(count).forEach(function (item) {
    items.appendChild(item.card);
  });
}

/**
 * Make cards the cards
 * @param {Number} count Number of cards is 3 times of count — one time for each category
 */

function makeCards(count) {
  /** Array of cards */
  let cards = [];
  /** Default text */
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui delectus eligendi officia quisquam. Odit, necessitatibus id. Iure quos unde ipsa adipisci?";
  for (let i = 1; i <= count; i++) {
    const woman = new Item(`Women item`, text, "women", i);
    const man = new Item(`Men item`, text, "men", i);
    const kid = new Item(`Kids item`, text, "kids", i);
    cards.push(woman);
    cards.push(man);
    cards.push(kid);
  }
  return cards;
}
