let feildEmail = document.getElementById('feildEmail');
let feildpassword = document.getElementById('feildpassword');
const btnLogin = document.querySelector('.btnLogin');
let emailArrey = []
let passwordArrey=[]


function setDataToLoacalStorage() {
    event.preventDefault()
    let setemail = feildEmail.value
    emailArrey.push(setemail)
    localStorage.setItem('email', JSON.stringify(emailArrey))

    let setPassword = feildpassword.value
    passwordArrey.push(setPassword)
    localStorage.setItem('password', JSON.stringify(passwordArrey))
}
