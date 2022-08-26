import { appendDivs, appendChild } from "../general.js";

function Card(title, paragraph, category, id) {
  this.makeCard = makeCard(title, paragraph, category, id);
}

export function test() {
  const items = document.getElementById("items");
  makeCards(6).forEach(function (el) {
    items.appendChild(el.makeCard);
  });
}

function makeCard(title, paragraph, category, id) {
  const imgHolder = document.createElement("div");
  const text = document.createElement("div");
  const btn = document.createElement("div");
  const h4Text = document.createTextNode(title);
  const pText = document.createTextNode(paragraph);
  const btnText = document.createTextNode("Add to cart");
  const card = document.createElement("div");

  card.classList.add("card");
  appendChild(imgHolder, "img", `src:./images/${category}_${id}.jpg`);
  appendChild(text, "h4", "class:text", 0, h4Text);
  appendChild(text, "p", 0, 0, pText);
  appendChild(card, imgHolder, "class:imgHolder");
  appendChild(card, text, `category:${category}`, 0);
  appendChild(btn, btnText, `number:${id}`, 0);
  appendChild(card, btn, "class:btn");
  return card;
}

function makeCards(count) {
  let cards = [];
  for (let i = 1; i <= count; i++) {
    const woman = new Card(
      `Women item`,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui delectus eligendi officia quisquam. Odit, necessitatibus id. Iure quos unde ipsa adipisci?",
      "women",
      i
    );
    const man = new Card(
      `Men item`,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui delectus eligendi officia quisquam. Odit, necessitatibus id. Iure quos unde ipsa adipisci?",
      "men",
      i
    );
    const kid = new Card(
      `Kids item`,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus qui delectus eligendi officia quisquam. Odit, necessitatibus id. Iure quos unde ipsa adipisci?",
      "kids",
      i
    );
    cards.push(woman);
    cards.push(man);
    cards.push(kid);
  }
  return cards;
}
