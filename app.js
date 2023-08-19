let feildEmail = document.getElementById('feildEmail');
let feildPassword = document.getElementById('feildPassword');
const btnLogin = document.querySelector('.btnLogin');
const emailArray = []
const passwordArray = []



function setDataToLoacalStorage() {
    event.preventDefault()
    const setEmail = feildEmail.value
    const setPassword = feildPassword.value
    emailArray.push(setEmail)
    passwordArray.push(setPassword)
    localStorage.setItem('Email', JSON.stringify(emailArray))
    localStorage.setItem('Password', JSON.stringify(passwordArray))
    feildEmail.value = ""
    feildPassword.value = ""

}