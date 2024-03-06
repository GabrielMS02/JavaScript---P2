var nome = prompt('Qual o seu nome?');
var resposta = confirm(nome + ', você gostaria de continuar?');

if(resposta){
    alert('Bem vindo...');
} else{
   window.location.href = 'https://www.minecraft.net'
}