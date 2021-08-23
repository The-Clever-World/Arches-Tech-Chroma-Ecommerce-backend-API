console.log("script starting");

let userDetails = JSON.parse(localStorage.getItem("userDetails"));

if (userDetails) {
  console.log("inside userDetails");

  // hide login prompt
  document.getElementById("login__link").style.display = "none";

  // create avatar
  const avatarDiv = document.createElement("div");
  const logoutDiv = document.createElement("div");

  avatarDiv.innerHTML = `<li id="userAvatar" style="height: 30px;width: 30px;background: #fffefd;border-radius: 50%;position: relative;" > <a style="color:black; transform: translate(50%);" href="#">${userDetails.name[0]}</a ></li > `;

  logoutDiv.innerHTML = `<li style="height: 30px; width: 30px; margin-left: 40px;position: relative;"><a id="logoutButton" href="#"> Logout </a ></li >`;
  // append div to header and hide icon
  const loginContainer = document.getElementById("login__container");
  loginContainer.appendChild(avatarDiv);
  loginContainer.appendChild(logoutDiv);
}

if (userDetails && userDetails.isAdmin) {
  const adminBtn = document.getElementById("admin__link");
  adminBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(userDetails.token);
    fetch("http://localhost:5000/admin/", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      withCredentials: true,
      credentials: "include",
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        Authorization: `Bearer ${userDetails.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        window.history.pushState("admin", "admin", "/admin/");
        document.appendChild(data);
      });
  });
}
