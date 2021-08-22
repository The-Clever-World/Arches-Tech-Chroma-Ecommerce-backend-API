console.log("script for logout starting");

let logoutButton = document.getElementById("logoutButton");

console.log(logoutButton);

logoutButton.addEventListener("click", (e) => {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));

    if (userDetails) {
        localStorage.removeItem("userDetails");

        document.location.reload();
    }
})

