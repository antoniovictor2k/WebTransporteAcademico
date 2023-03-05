let inputEmail = document.getElementById("inputEmail");
let inputSenha = document.getElementById("inputSenha");


function fazerLogin(){
    let email = inputEmail.value; 
    let senha = inputSenha.value;

    if(email === "" || senha === ""){
        alert("Por Favor Preencher Dados!");
        inputEmail.focus();
        return;
    }

    if(email != "aluno.ifal@ifal.edu.br" && senha != "aluno.ifal")
    {
        alert("Email ou Senha esta(ão) Incorreto(s).")
        inputEmail.focus();
        return;
    }

    window.location.href = "../Paginas/Tela_Principal.html";
}