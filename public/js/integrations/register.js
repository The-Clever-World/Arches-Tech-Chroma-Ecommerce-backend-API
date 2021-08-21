const userName = document.querySelector("#username");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const registerButton = document.querySelector('#register')

registerButton.addEventListener("click", function (e) {

    fetch(`http://localhost:5000/user/register`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      }) // body data type must match "Content-Type" header
    }).then((response) =>{
        console.log(response);
        document.location.reload();
      });
  });

