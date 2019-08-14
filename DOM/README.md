# DOM - Document Object Model

O DOM (Document Object Model) é uma interface que representa como os documentos HTML e XML são lidos pelo seu browser. Após o browser ler seu documento HTML, ele cria um objeto que faz uma representação estruturada do seu documento e define meios de como essa estrutura pode ser acessada. Nós podemos acessar e manipular o DOM com JavaScript, é a forma mais fácil e usada.

## 1. Árvore

> Quando criamos um arquivo html, temos a estrutura em árvore dos elementos

exemplo HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Sciensa</title>
</head>
<body>
  <h1>Trainee</h1>
  <div>
    <p>Front</p>
  </div>
</body>
</html>
```
exemplo da arvore no slide


history
A propriedade só de leitura Window.history retorna uma referência ao objeto History, que fornece uma interface para manipular o histórico de sessão do navegador (páginas visitadas na guia ou quadro em que a página atual é carregada).

O Window.location é uma propriedade de leitura que retorna um objeto Location com informações de localização do documento atual.

Embora Window.location seja apenas um objeto de leitura de localização, você pode também atribuir uma DOMString para ele. Isto significa que você pode trabalhar com location como se fosse uma string na maioria dos casos: location = 'http://www.exemplo.com' é um sinônimo de location.href = 'http://www.exemplo.com'.

é possivel acessar o location de outras formas: 
location ou location.href e alterar a localizacao
 
**Document: **que como o nome diz, cuida de documentos HTML.
**Elements: **são todas as tags que estão em arquivos HTML ou XML se transformam em elementos da árvore DOM.
Texts: É o texto que vai entre os elementos. Todo o conteúdo das tags.

## 2. Manipular o DOM por javascript

usar o console log da pagina, nao precisa digitar o console

```js
console.log(window) //o que contem no window
console.log(window.location)
console.log(window.history)

console.log(window.document)
console.log(document) //podemos usar o document direto
```

Considerando o html abaixo:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Sciensa</title>
</head>

<body>
  <h1>Trainee</h1>
  <div class="container">
    <p>Front</p>
    <button id='btn'>Clique</button>
  </div>
</body>

</html>
```

criar arquivo index.js
```js
  let myBtn = document.getElementById('btn');
  console.log(myBtn)
  // é possível alterar o texto do botão
  myBtn.innerText = "Oh meu deus"

  // é possivel chamar pelo nome da classe
  let myContainer = document.getElementsByClassName('container');
  // retorna uma collection dos elementos filhos
  console.log(myContainer)
  //pega o primeiro elemento do array e sobrescreve todo conteudo
  myContainer[0].innerText = 'sumiu'
```

é possivel adicionar eventos também nos elementos, por exemplo Clique, mas não será possível abordar todas as funcionalidades

Para criar um elemento novo utilizamos o document.createElement

```js
let spanText = document.createElement('span');
spanText.innerText = 'Aqui é o texto'

myContainer[0].append(spanText)

```
## Se der tempo

falar de onclick