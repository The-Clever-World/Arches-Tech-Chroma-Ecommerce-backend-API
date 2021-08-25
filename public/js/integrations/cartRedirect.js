let userDetails = JSON.parse(localStorage.getItem("userDetails"));

let userId = userDetails._id;

document.querySelector(".fa-shopping-cart").addEventListener("click", () => {
  window.location.href = `/cart/${userId}`;
});
