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

console.log(userDetails.isAdmin);
if (userDetails && userDetails.isAdmin) {
  const dashboardLinkBtn = document.querySelector("#admin_ref");
  console.log(dashboardLinkBtn);
  const avatarDiv = document.createElement("a");
  avatarDiv.innerHTML = `<a href="/admin">A</a >`;

  dashboardLinkBtn.appendChild(avatarDiv);
}
