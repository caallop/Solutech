
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


async function saveClient() {
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
}
