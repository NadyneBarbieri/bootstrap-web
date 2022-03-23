var nome = window.document.getElementById('nome')
var email= window.document.getElementById('email')
var assunto= window.document.getElementById('Mensagem')
var okNome = false

function validarTexto() {
    let txtNome = window.document.getElementById('txtNome')
    let txtEmail = window.document.getElementById('txtEmail')
    let txtAssunto = window.document.getElementById('txMensagem')
    if (nome.value.length < 2) {
        txtNome.innerHTML = "Incorreto"
        txtNome.style.color = "red"
        okNome = false
    } else {
        txtNome.innerHTML = "Correto"
        txtNome.style.color = "green"
        okNome = true
    }
    if (email.value.length < 5) {
        txtEmail.innerHTML = "Incorreto"
        txtEmail.style.color = "red"
        okNome = false
    } else {
        txtEmail.innerHTML = "Correto"
        txtEmail.style.color = "green"
        okNome = true
    }
    if (assunto.value.length < 2) {
        txtAssunto.innerHTML = "Incorreto"
        txtAssunto.style.color = "red"
        okNome = false
    } else {
        txtAssunto.innerHTML = "Correto"
        txtAssunto.style.color = "green"
        okNome = true
    }
}

function enviar(){
    if(okNome){
        alert("Enviado com sucesso")
    } else{
        alert("Falho no envio")
    }

}