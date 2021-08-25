const allCartButtons = document.querySelectorAll(".cart-button");

allCartButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let productId = this.value;
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));

    let userId = userDetails._id;

    fetch(`https://chroma-commerce.herokuapp.com/cart/add/${productId}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        userId: userId,
      }),
    });
  });
});
