const passwordField = document.querySelector(".password");
const emailField = document.querySelector(".email");
const btnLogin = document.querySelector(".btnLogin");

btnLogin.addEventListener("click", function (event) {
    console.log(emailField.value);
    console.log(passwordField.value);
})

