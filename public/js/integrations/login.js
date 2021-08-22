
const loginButton = document.querySelector('#login')


loginButton.addEventListener("click", function (e) {

  const email = document.querySelector("#loginEmail").value;
  const password = document.querySelector("#loginPass").value;

  console.log(password);
  console.log(email);

  fetch(`http://localhost:5000/user/login`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    })
  }).then((response) => {
    return response.json();
  }).then(res => {
    console.log(res);
    window.localStorage.setItem('userDetails', JSON.stringify(res));
    document.location.reload();
  });
});

