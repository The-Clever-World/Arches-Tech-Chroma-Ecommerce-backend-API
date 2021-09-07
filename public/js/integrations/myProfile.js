const firstName = document.querySelector("#first-name");
const middleName = document.querySelector("#middle-name");
const lastName = document.querySelector("#last-name");
const mobileNumber = document.querySelector("#mobile-number");
const email = document.querySelector("#email");
const gender = document.querySelector(".gender");
const saveBtn = document.querySelector(".btn-save");

// get user details from localstorage (TODO: replace with server request)

const userDetail = JSON.parse(localStorage.getItem("userDetails"));

const names = userDetail.name.split(" ");

// populate fields
firstName.value = names[0];
middleName.value = names.splice(1, names.length - 2).join(" ");
lastName.value = names[names.length - 1];
email.value = userDetail.email;
gender.value = userDetail.gender || "Prefer not to say";
mobileNumber.value = userDetail.mobileNumber;

// submit to server
saveBtn.addEventListener("click", (e) => {
  fetch(`http://localhost:5000/user/profile`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: userDetail._id,
      name: firstName.value + " " + middleName.value + " " + lastName.value,
      mobileNumber: mobileNumber.value,
      email: email.value,
      gender: gender.value,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res);
      if (res.message) {
        alert(res.message);
      } else {
        window.localStorage.setItem("userDetails", JSON.stringify(res));
        document.location.reload();
      }
    });
});
