// CHECKOUT BUTTON ON CART PAGE //

const checkoutBtns = document.querySelectorAll(".cart-button");
console.log(checkoutBtns);

if (checkoutBtns) {

  checkoutBtns.forEach((checkoutBtn) => {

    checkoutBtn.addEventListener("click", () => {
      console.log("hello");
      const userId = userDetails._id;
      const products = document.querySelectorAll("#cart-id");
      const productPrice = document.querySelectorAll(".category-count b");

      const productList = [];
      var totalPrice = 0;

      console.log(userId);
      products.forEach((prod) => {
        productList.push(prod.innerHTML);
      });

      // totalPrice
      console.log(productList);
      console.log(productPrice);
      productPrice.forEach((prodP) => {
        totalPrice += Number(prodP.innerHTML);
      });
      console.log(totalPrice);

      fetch(`https://chroma-commerce.herokuapp.com/order/new`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          userId: userId,
          products: productList,
          totalPrice: totalPrice,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res._id);
          console.log(res);
          // redirect to order page of particular id
          window.location.replace(`/order/${res._id}`);
        });
    });

  });
}


// ADD SHIPPING & BILLING ADDRESS //

const addToShippingBtn = document.getElementById('saveShipping');
console.log(addToShippingBtn);

if (addToShippingBtn) {

  addToShippingBtn.addEventListener("click", (e) => {
    const inputCountry = document.getElementById('inputCountry').value;
    const inputCity = document.getElementById('inputCity').value;
    const inputState = document.getElementById('inputState').value;
    const inputZip = document.getElementById('inputZip').value;
    const inputAddress = document.getElementById('inputAddress').value;

    const shippingAddress = {
      address: inputAddress,
      city: inputCity,
      zip: inputZip,
      state: inputState,
      country: inputCountry,
    }
    console.log(shippingAddress);

    // orderId
    const orderId = location.pathname.split("/")[2];
    console.log(orderId);

    fetch(`https://chroma-commerce.herokuapp.com/order/add-shipping`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: orderId,
        shippingAddress: shippingAddress
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        document.location.reload();
      });
  })
}



// BILLING ADDRESS //

const addToBillingBtn = document.getElementById('saveBilling');
console.log(addToBillingBtn);

if (addToBillingBtn) {

  addToBillingBtn.addEventListener("click", (e) => {
    const inputCountry = document.getElementById('inputCountry2').value;
    const inputCity = document.getElementById('inputCity2').value;
    const inputState = document.getElementById('inputState2').value;
    const inputZip = document.getElementById('inputZip2').value;
    const inputAddress = document.getElementById('inputAddress2').value;

    const billingAddress = {
      address: inputAddress,
      city: inputCity,
      zip: inputZip,
      state: inputState,
      country: inputCountry,
    }
    console.log(billingAddress);

    // orderId
    const orderId = location.pathname.split("/")[2];
    console.log(orderId);

    fetch(`https://chroma-commerce.herokuapp.com/order/add-billing`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: orderId,
        billingAddress: billingAddress
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        document.location.reload();
      });
  })
}
