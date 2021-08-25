
let userId = userDetails && userDetails._id;
console.log(userId);

if (userDetails) {
  console.log("inside userDetails");

  // create cart-button
  const cartButton = document.createElement("a");
  cartButton.innerHTML = `<a href='/cart/${userId}'><i class='fa fa-shopping-cart'></i></a >`;

  // append cartButton to cartList
  const cartList = document.querySelector(".cart-page");
  cartList.appendChild(cartButton);
}


