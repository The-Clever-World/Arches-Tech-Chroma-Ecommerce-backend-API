
const registerButton = document.querySelector('#register')

registerButton.addEventListener("click", function (e) {

  const userName = document.querySelector("#username").value;
  const userEmail = document.querySelector("#email").value;
  const userPassword = document.querySelector("#password").value;

  fetch(`http://localhost:5000/user/register`, {
    method: "POST",
    body: JSON.stringify({
      name: userName,
      email: userEmail,
      password: userPassword,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    console.log(response);
    document.location.reload()
  });
});

