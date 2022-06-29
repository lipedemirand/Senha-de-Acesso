var loginCadastro = "Felipe";
var senhaCadastrada = "34367225";

var tentativas = 2;

while(tentativas <= 4) {
    loginInformado = prompt("informe seu login")
    senhaInformada = prompt("informe sua senha")

    if(loginCadastro == loginInformado && senhaCadastrada == senhaInformada){
        alert("Bem vindo ao sistema " + loginInformado);

        break;
    }else{
        window.location.href = 'página_01.html';
        alert("Senha ivalida, tente novamente");
        tentaivas++;   
    }
}