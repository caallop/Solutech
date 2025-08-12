
/**
 * 
 * 
 */

let companyName = document.getElementById('companyName')
let contactName = document.getElementById('contactName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let phone = document.getElementById('phone')
let cnpjCompany = document.getElementById('cnpjCompany')
let clientForm = document.getElementById('clientForm')
let submitButton = document.getElementById('submitButton')

clientForm.addEventListener('submit', (e) => {
    /*e.preventDefault()
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
    alert(cnpjCompany)*/
})


function saveClient() {
    console.log("teste do botao")
    console.log("teste do botao")
    console.log("teste do botao")
<<<<<<< HEAD
    alert(`  Empresa: ${companyName.value}
             Contato: ${contactName.value}
             Email ${email.value}
             Senha ${password.value}
             Telefone ${phone.value}
             CNPJ ${cnpjCompany.value}`);
    console.log(`  Empresa: ${companyName.value}
             Contato: ${contactName.value}
             Email ${email.value}
             Senha ${password.value}
             Telefone ${phone.value}
             CNPJ ${cnpjCompany.value}`);

=======
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
>>>>>>> ac2a27ae91f31ad32ca357090af90be4c4652458
    /* const clientData = {
         companyName: companyName,
         contactName: contactName,
         email: email,
         password: password,
         phone: phone,
         cnpjCompany: cnpjCompany
     };*/
}
