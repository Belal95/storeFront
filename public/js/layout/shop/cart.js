/**
 * add 1 to cart in local storage
 */

export function addToCart() {
  localStorage.setItem("items", Number(localStorage.getItem("items")) + 1);
  updateCart();
}

/**
 * Update the cart counter div with the current count of items in cart
 */

export function updateCart() {
  const cart = document.getElementById("cart");
  cart.innerHTML = "";
  let counter = document.getElementById("counter");
  let count = localStorage.getItem("items");
  if (!counter) {
    counter = "";
    counter = document.createTextNode(count);
  }
  cart.style.display = "block";
  !!count ? cart.appendChild(counter) : (cart.style.display = "none");
}
