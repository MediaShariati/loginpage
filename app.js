let feildEmail = document.getElementById('feildEmail');
let feildpassword = document.getElementById('feildPassword');
const btnLogin = document.querySelector('.btnLogin');
const emailArrey = []
const passwordArrey = []



function setDataToLoacalStorage() {
    event.preventDefault()
    const setEmail = feildEmail.value
    const setPassword = feildpassword.value
    emailArrey.push(setEmail)
    passwordArrey.push(setPassword)
    localStorage.setItem('Email' , JSON.stringify(emailArrey))
    localStorage.setItem('Password' , JSON.stringify(passwordArrey))
}