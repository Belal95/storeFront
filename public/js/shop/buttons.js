console.log(localStorage.getItem("items"));
let counter;
export function addToCart() {
  const buttons = document.querySelectorAll("#items .btn");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", add);
  });
}
function add() {
  localStorage.setItem("items", Number(localStorage.getItem("items")) + 1);
  updateCart();
}
