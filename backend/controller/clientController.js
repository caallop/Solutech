
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
    e.preventDefault()
})


function saveClient() {
    console.log("teste do botao")
    console.log("teste do botao")
    console.log("teste do botao")
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

    /* const clientData = {
         companyName: companyName,
         contactName: contactName,
         email: email,
         password: password,
         phone: phone,
         cnpjCompany: cnpjCompany
     };*/
}
