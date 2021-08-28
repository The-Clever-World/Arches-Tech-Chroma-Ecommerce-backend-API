console.log("Dashboard integration script started");

let PayToggles = document.querySelectorAll(".payToggle");
let deliverToggles = document.querySelectorAll(".deliverToggle");

// console.log(PayToggle, deliverToggle);

// change payment status on click
PayToggles.forEach((toggle) =>
  toggle.addEventListener("click", (e) => {
    let rowId = e.target.dataset.id;
    fetch(`https://chroma-commerce.herokuapp.com/admin/order/${rowId}/update/paid`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      document.location.reload();
    });
  })
);

// change delivery status on click
deliverToggles.forEach((toggle) =>
  toggle.addEventListener("click", (e) => {
    let rowId = e.target.dataset.id;
    fetch(`https://chroma-commerce.herokuapp.com/admin/order/${rowId}/update/delivered`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      document.location.reload();
    });
  })
);
