const allCartButtons = document.querySelectorAll(".cart-button");

allCartButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let productId = this.value;
    fetch(`https://chroma-commerce.herokuapp.com/cart/${productId}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        id: productId,
      }), // body data type must match "Content-Type" header
    });
  });
});
