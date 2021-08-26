const checkout = document.querySelector(".cart-button");
console.log(checkout);
checkout.addEventListener("click", () => {
    console.log("hello");
    const userId = userDetails._id;
    const products = document.querySelectorAll("#cart-id");
    const productList = []

    console.log(userId);
    products.forEach((prod) => {
        productList.push(prod.innerHTML);
    })
    console.log(productList);

    fetch(`http://localhost:5000/order/new`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId: userId,
            products: productList
        })
    }).then((response) => {
        return response.json();
    }).then(res => {
        console.log(res._id);
        console.log(res);
        // redirect to order page of particular id
        window.location.replace(`/order/${res._id}`);
    });
})