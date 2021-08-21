const email = document.querySelector("#loginEmail");
const password = document.querySelector("#loginPassword");
const loginButton = document.querySelector('#login')

loginButton.addEventListener("click", function (e) {

    fetch(`http://localhost:5000/user/login`, {
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
        email: email,
        password: password,
      }), // body data type must match "Content-Type" header
    }).then((response) =>{
      console.log(response);
      window.localStorage.setItem('userDetails', response);
      //document.location.reload();
    });
  });

