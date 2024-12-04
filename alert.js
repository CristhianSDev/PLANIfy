function Alerta(){
    var email = document.getElementById('email-login').value;
    var senha = document.getElementById('senha-login').value;
    var mensagem = document.getElementById("mensagem");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var minLength = /(?=.{8,})/; // Pelo menos 8 caracteres
    var upperCase = /(?=.*[A-Z])/; // Pelo menos uma letra maiúscula
    var lowerCase = /(?=.*[a-z])/; // Pelo menos uma letra minúscula
    var number = /(?=.*\d)/; // Pelo menos um número
    var specialChar = /(?=.*[!@#$%^&*])/; // Pelo menos um caractere especial

    if (!emailRegex.test(email)) { 
        mensagem.innerText = "Email inválido!";
        mensagem.style.color = "red"; 
        return false;
    };

    if (!minLength.test(senha)) {
        mensagem.innerText = "A senha deve ter pelo menos 8 caracteres.";
        mensagem.style.color = "red";
        return false;
    } else if (!upperCase.test(senha)) {
        mensagem.innerText = "A senha deve conter pelo menos uma letra maiúscula.";
        mensagem.style.color = "red";
        return false;
    } else if (!lowerCase.test(senha)) {
        mensagem.innerText = "A senha deve conter pelo menos uma letra minúscula.";
        mensagem.style.color = "red";
        return false;
    } else if (!number.test(senha)) {
        mensagem.innerText = "A senha deve conter pelo menos um número.";
        mensagem.style.color = "red";
        return false;
    } else if (!specialChar.test(senha)) {
        mensagem.innerText = "A senha deve conter pelo menos um caractere especial.";
        mensagem.style.color = "red";
        return false;
    } else {
        location.href = 'indexplanify.html';
    };
};

function Alertacadastro(){
    var usuario = document.getElementById('usuario').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var mensagem = document.getElementById("mensagem");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var minLength = /(?=.{8,})/; // Pelo menos 8 caracteres
    var upperCase = /(?=.*[A-Z])/; // Pelo menos uma letra maiúscula
    var lowerCase = /(?=.*[a-z])/; // Pelo menos uma letra minúscula
    var number = /(?=.*\d)/; // Pelo menos um número
    var specialChar = /(?=.*[!@#$%^&*])/; // Pelo menos um caractere especial
    var minUsernameLength = 5; // Definição do comprimento mínimo do nome de usuário
    var usernameNoSpaces = /^\S+$/; // Verificação de espaços no nome de usuário

    if(usuario === ''){
        alert("Nome de Usuário Necessário!"); 
        return false;
    } else if (usuario.length < minUsernameLength) { 
        mensagem.innerText = "O nome de usuário deve ter pelo menos 5 caracteres.";
        mensagem.style.color = "red"; 
        return false; 
    } else if (!usernameNoSpaces.test(usuario)) {
        mensagem.innerText = "O nome de usuário não deve conter espaços."; 
        mensagem.style.color = "red"; 
        return false;
    };

    if (!emailRegex.test(email)) { 
        mensagem.innerText = "Email inválido!";
        mensagem.style.color = "red"; 
        return false;
    };

    if (!minLength.test(senha)) {
        mensagem.innerText = "A senha deve ter pelo menos 8 caracteres.";
        mensagem.style.color = "red";
        return false;
    } else if (!upperCase.test(senha)) {
        mensagem.innerText = "A senha deve conter pelo menos uma letra maiúscula.";
        mensagem.style.color = "red";
        return false;
    } else if (!lowerCase.test(senha)) {
        mensagem.innerText = "A senha deve conter pelo menos uma letra minúscula.";
        mensagem.style.color = "red";
        return false;
    } else if (!number.test(senha)) {
        mensagem.innerText = "A senha deve conter pelo menos um número.";
        mensagem.style.color = "red";
        return false;
    } else if (!specialChar.test(senha)) {
        mensagem.innerText = "A senha deve conter pelo menos um caractere especial.";
        mensagem.style.color = "red";
        return false;
    } else {
        location.href = 'login.html';
    };
};