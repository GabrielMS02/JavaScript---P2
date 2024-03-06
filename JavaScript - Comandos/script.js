
var mes = prompt('Digite o mes: ' 
                 +' \n 1 - Janeiro'
                 + '\n 2 - Fevereiro'
                 + '\n 3 - Março')

                
if(mes == 1){
    alert('Janeiro');
} else if(mes ==2){
    alert('Fevereiro');
}else if(mes == 3){
    alert('Março');
}else {
}('Mês inválido');

switch(mes){
    case '1':
        alert('Janeiro')
        break;
    case '2':
        alert('Fevereiro')
        break;
    case '3':
        alert('Março')
        break;
    default:
        alert('Mês inválido')
        break;            
}





// var manha = false;
// var tarde = false;
// var noite = false;

// if(manha){
//     alert('Manhã');
// } else if(tarde){
//     alert('Tarde')
// } else if(noite){
//     alert('Noite')
// }
 

 
//  var nome = prompt('Qual o seu nome?');
//var resposta = confirm(nome + ', você gostaria de continuar?');
// 
//if(resposta){
//    alert('Bem vindo...');
//} else{
//   window.location.href = 'https://www.minecraft.net'
//}


// var preco = promt('Qual o preço do produto')
// var mensagem = (preco<=20)? 'barato...': 'caro...'
// alert(mensagem)
