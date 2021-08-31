
if (userDetails) {
    const myOrderDiv = document.createElement("div");
    const myProfileDiv = document.createElement("div");

    myOrderDiv.innerHTML = `<a href="/my-account/order/${userDetails._id}"> <i class="fas fa-business-time text-info"></i></a>`;
    myProfileDiv.innerHTML = `<a href="/my-account/myProfile"> <i class="far fa-user-circle text-info"></i></a>`

    // myOrder container
    const myOrderContainer = document.getElementById("myOrders");
    myOrderContainer.appendChild(myOrderDiv);

    // myProfile container
    const myProfileContainer = document.getElementById("myProfile");
    myProfileContainer.appendChild(myProfileDiv);
}