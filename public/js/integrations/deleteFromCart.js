const allCartDeleteButtons = document.querySelectorAll(".cart-delete");

allCartDeleteButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    productId = this.value;

    let userId = userDetails && userDetails._id;
    console.log(userId);

    fetch(`http://localhost:5000/cart/delete/${productId}/${userId}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      credentials: "same-origin", // include, *same-origin, omit
    }).then((response) => document.location.reload());
  });
});
