/**
 * 
 * 
 */


//
let clientId = document.getElementById('clientId')
let projectName = document.getElementById('projectName')
let projectDescription = document.getElementById('projectDescription')  
let projectType = document.getElementById('projectType')
let desiredDeadline = document.getElementById('desiredDeadline')
let attachments = document.getElementById('attachments')
let submitButton = document.getElementById('submitButton')




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


async function requestProject() {
    console.log("teste do botao")
    console.log("teste do botao")
    console.log("teste do botao")
    alert(`  Empresa: ${clientId.value}
             Contato: ${projectName.value}
             Email ${projectDescription.value}
             Senha ${projectType.value}
             Telefone ${desiredDeadline.value}
             CNPJ ${cnpjCompany.value}`);
    console.log(`  Empresa: ${attachments.value}`)

    /* const clientData = {
         companyName: companyName,
         contactName: contactName,
         email: email,
         password: password,
         phone: phone,
         cnpjCompany: cnpjCompany
     };*/
}
