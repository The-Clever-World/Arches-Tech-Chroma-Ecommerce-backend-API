console.log("script starting");

// for regular users
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

// for admin users
// if (userDetails && userDetails.isAdmin) {
//   console.log("inside admin ui ");
//   const adminLink = document.getElementById("admin__link__ref");
//   console.log(adminLink);
//   adminLink.addEventListener("click", (e) => {
//     // prevent link direction
//     e.preventDefault();

//     // append jwt to header and send request to server
//     fetch("/admin/", {
//       method: "GET", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       headers: {
//         Authorization: `Bearer ${userDetails.token}`,
//       },
//     });
//   });
// }
