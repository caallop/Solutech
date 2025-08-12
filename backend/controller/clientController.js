
/**
 * 
 * 
 */

let companyName = document.getElementById('companyName').value
let contactName = document.getElementById('contactName').value
let email = document.getElementById('email').value
let password = document.getElementById('password').value
let phone = document.getElementById('phone').value
let cnpjCompany = document.getElementById('cnpjCompany').value
let clientForm = document.getElementById('clientForm').value
let submitButton = document.getElementById('submitButton')

clientForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("teste do botao")
    console.log("teste do botao")
    console.log("teste do botao")
    console.log(phone);
    console.log(contactName);
    console.log(companyName);
    console.log(email);
    console.log(password);
    console.log(cnpjCompany)
    alert(phone);
    alert(contactName);
    alert(companyName);
    alert(email);
    alert(password);
    alert(cnpjCompany)
})


function saveClient() {
        console.log("teste do botao")
    console.log("teste do botao")
    console.log("teste do botao")
    console.log(phone);
    console.log(contactName);
    console.log(companyName);
    console.log(email);
    console.log(password);
    console.log(cnpjCompany)
    alert(phone);
    alert(contactName);
    alert(companyName);
    alert(email);
    alert(password);
    alert(cnpjCompany)
    console.log(companyName, contactName, email, password, phone, cnpjCompany);
    alert(companyName, contactName, email, password, phone, cnpjCompany);
    /* const clientData = {
         companyName: companyName,
         contactName: contactName,
         email: email,
         password: password,
         phone: phone,
         cnpjCompany: cnpjCompany
     };*/
}
