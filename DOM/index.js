let myBtn = document.getElementById('btn');
console.log(myBtn)
// é possível alterar o texto do botão
myBtn.innerText = "Oh meu deus"

// é possivel chamar pelo nome da classe
let myContainer = document.getElementsByClassName('container');
// retorna uma collection dos elementos filhos
console.log(myContainer)
//pega o primeiro elemento do array e sobrescreve todo conteudo
// myContainer[0].innerText = 'sumiu'

let spanText = document.createElement('span');
spanText.innerText = 'Aqui está nosso texto'

myContainer[0].append(spanText)