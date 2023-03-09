let nome = document.getElementById("inputNomeCadastro");
let sobrenome = document.getElementById("inputSobrenomeCadastro");
let email = document.getElementById("inputEmail");
let senha = document.getElementById("inputSenha");
let confirmarSenha = document.getElementById("inputConfirmarSenha");
let errorSenha = document.getElementById("idVerificarSenha");
let caixaTermo = document.getElementById("checkboxTermo");
let asterisco = document.getElementById("asterisco");
asterisco ="<span>*</span>";
// caixaTermo.checked



function verificaoDeCadastro() {
    // nome = inputNomeCadastro.value;
    // sobrenome = inputSobrenomeCadastro.value;
    // email = inputEmail.value;
    senha = inputSenha.value;
    confirmarSenha = inputConfirmarSenha.value;
    
    
    if(senha != confirmarSenha){
        errorSenha.innerHTML=asterisco+"A confirmação de senha não confere."+asterisco;
}
if(senha === confirmarSenha){
    errorSenha.innerHTML="";
}


}

// funcionando ...
function acessarTelaPrincipalPorCadastro() {
    nome = inputNomeCadastro.value;
    sobrenome = inputSobrenomeCadastro.value;
    caixaTermo = checkboxTermo.checked;
    email = inputEmail.value;
    senha = inputSenha.value;
    confirmarSenha = inputConfirmarSenha.value;
    // funcionando 
        if (nome === "" || !isNaN(nome)) {
            alert("Nome precisar esta preenchindo corretamente."+nome);
            inputNomeCadastro.focus();
            return;
            
        }
        
        if (sobrenome === "" || !isNaN(sobrenome)) {
            alert("Sobrenome precisar esta preenchindo corretamente.");
            inputSobrenomeCadastro.focus();
            return;

        }
        if (email === "" || !isNaN(email)) {
            alert("E-mail precisar esta preenchindo corretamente.");
            inputEmail.focus();
            return;

        }
        if (senha === "") {
            alert("Senha precisar esta preenchindo corretamente.");
            inputSenha.focus();
            return;

        }
        if (senha != confirmarSenha) {
            alert("A confirmação de senha não confere.");
            inputConfirmarSenha.focus();
            return;

        }
        
        // alert("Preenchar o Sobrenome")
        // inputSobrenomeCadastro.focus();
        // return;
    



    // verificar se chenckebox esta marcado . funcionando
 
        if(caixaTermo  === false){
            alert("Para continuar o cadastro precisar marcar a caixinha e aceitar nossos termos.")
        }
        else{
            window.location.href = "../Paginas/Tela_Principal.html"
    }
        


}
