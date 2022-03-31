// localStorage => vai salva locamente no seu navegador 
//sessionStorage => funciona quando o navegador estiver aberto e quando fecha o navegador perde o historico


var nome = '';

if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome? ");
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;