import { makeCard } from "./card.js";

/**
 * Hold all the item data
 * @param {String} title Item title
 * @param {String} description Item descriptions
 * @param {String} category Item category
 * @param {Number} id Item id
 */
export function Item(title, description, category, id) {
  /** The Card element in the DOM corresponding to an item */
  this.card = makeCard(title, description, category, id);
}
