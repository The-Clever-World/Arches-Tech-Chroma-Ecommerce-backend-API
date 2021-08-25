const checkoutButton = document.querySelector(".cart-button");

checkoutButton.addEventListener("click", () => {

    
  fetch(`https://chroma-commerce.herokuapp.com/order/new`, {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      products: products,
    }),
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => document.location.reload());
});
