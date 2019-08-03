# Javascript e ECMA6

Demonstração de conceitos usando:
https://codesandbox.io/s/vanilla

## 1. console.log

> Para printar qualquer informação no console do browser

```js
console.log("Bem vindos");
```


## 2. var, let e const

> Para declarar uma variável

```js
var trainee = "javascript";
let fruta = "banana";

console.log(trainee);
console.log(fruta);
```

diferenças entre o var e let:
var permite redeclaração do mesmo nome de variável, no let dá erro na variavel que já foi declarada

```js
var trainee = "javascript";
let fruta = "banana";
console.log(trainee);
var trainee = 100;
console.log(trainee);

let fruta = 'manga'
```


const é uma constante, variável que não pode ser alterada.

```js

const filme = "Avengers";
console.log(filme);
// Error filme é apenas para leitura
filme = 'Homem aranha'

```

existe um conceito de hoisting elevation. Se sobrar tempo podemos abordar.

## 3. Tipos de dados

> String, number, boolean, array, object e function, mas a função será abordada em um tópico a parte

```js
let ator = "Brad Pitt"; // string
console.log(typeof ator);

let quantidade = 25;
console.log(typeof quantidade); // number

let preco = 25.5;
console.log(typeof preco); // number

let ehBacana = true;
console.log(typeof ehBacana); // boolean

let filmes = [
  "Mulher maravilha",
  "As panteras",
  "O menino que descobriu o vento"
];

console.log(typeof filmes); // object
console.log(Array.isArray(filmes)); // true

// Para adicionar um item no array
filmes.push('Harry Potter')

// acessa o item na posição zero no array
console.log(filmes[0])

// remove último elemento do array
filmes.pop()
console.log(filmes)
// mostra o tamanho do array
console.log(filmes.length)

let avenger = {
  horas: 2,
  diretores: "Anthony e Joe Russo",
  atores: ["Chris", "Mark", "Scarlett"],
  ehBom: true
};

console.log(typeof avenger); // object

// acessar um atributo do objeto
console.log(avenger.horas)

// alterar
avenger.horas = 3

```

### Lição de casa para Array

> Existem muitos métodos úteis para utilizar com os Arrays. Por exemplo:

join, shift, unshift, splice, concat, slice... entre outros

## 4. Operações básicas

> +, - , /, %

```js

let soma = 1 + 2;
console.log(soma);
console.log(10 - 1);
console.log(10 / 2);
console.log(11 % 2);

console.log("Maria" + " " + "Silva");
console.log(5 + 1 + "1");
console.log(5 + 1 + "1" + 2);

let nome = "Joao";
let sobrenome = "Pereira";
console.log(nome + " " + sobrenome);

```

> Template literals


```js

console.log(`Olá ${nome} ${sobrenome}`);

```

## 4. Condicionais

> If

```js
const info = {
  name: 'Joao',
  age: 28
}

if (info.name === "Joao") {
  console.log(`é o Jão`);
} else {
  console.log("Não é o Jão");
}

if (info.name !== "Joao") {
  console.log(`Não é o Jão`);
} else {
  console.log("É o Jão");
}

if (info.name !== 'Joao' && info.age > 18) {
  console.log('Maior de 18 e não é o joao')
} else {
  console.log('os outros')
}

if (info.name === 'Joao' || info.age <= 15) {
  console.log('Menor que 15 anos ou se chama joão entra')
} else {
  console.log('Maior que 15 anos')
}

const valor = 5;
if (valor == "5") {
  //compara o valor mas nao compara o tipo
  console.log("comparação de valores");
} else {
  console.log("Não é 5");
}


```

> Ternário

```js
const nome = "Joao"
let ehOJao = nome === 'Joao' ? 'sim' : 'não'

console.log(ehOJao)

let isJohn = nome === 'Joao'
console.log(isJohn)

```

> Switch

```js
const dia = 2
switch(dia)
{
  case 1:
    alert('Hoje é domingo');
    break;
  case 2:
    alert('Hoje é segunda');
    break;
  case 3:
    alert('Hoje é terça');
    break;
  default:
    alert('Hoje não é nem domingo, nem segunda, nem terça');
    break
}
```
## 4. Funções

> Função é um bloco de código para executar algum tipo de tarefa, exemplo função para somar

```js
function somar(num1, num2) {
  return num1 + num2;   // The function returns the product of p1 and p2
}

```

Para executar a função é necessário invocá-la/chamá-la

```js

console.log(somar(1, 4))
console.log(somar(1, '4')) // concatenar funciona aqui

// outra forma de declarar
const quadrado = function (num) {
  return num * num 
}

console.log(quadrado(3))

```

ou utilizando ECMA6 , arrow function

```js
// arrow function
const quadrado =  num => num * num  // return está implicito 

console.log(quadrado(2))

```

### Exercício:

> Crie uma função que recebe por parâmetro a idade e retorne se é maior de idade ou não

Resposta:

```js

const maiorIdade = idade => {
  if(idade >= 18) {
    return 'É maior de idade'
  } else {
    return 'Não é maior de idade'
  }
}

console.log(maiorIdade(15));

```

## 4. Repetições

> Laço de repetição usando FOR

```js

let contador;
for(contador = 0; contador < 10; contador++)
{
  alert(contador);
}

// usando array
let linguagens = ['Javascript', 'CSS', 'HTML']

for (let i = 0; i < linguagens.length; i++) {
  alert(linguagens[i])
}

```

> Mesmo laço usando while

```js
let linguagens = ['Javascript', 'CSS', 'HTML']
let i = 0

while (i < linguagens.length) {
  alert(linguagens[i])
  i++
}

```

## Array - métodos 

> MAP

É um loop que itera sobre cada elemento do array e retorna um determinado valor.
É necessário ter um return.

Exemplo, converter dolar para reais, considerando o dolar a 3,70:

```js
const dolar = [100, 20, 50]
const cotacao = 3.7
let reais = dolar.map(  elem => {
  return `R$ ${elem * cotacao}`;
} ); 

console.log(reais)

```

> Outros para estudar:

filter, reduce, join, splice, concat, etc.

```
## Bonus

Se der tempo: 

### Hoisting

Em JavaScript, toda variável é “elevada/içada” (hoisting) até o topo do seu contexto de execução. Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código.

É por esse mesmo motivo que “é possível usar uma variável antes dela ter sido declarada”: em tempo de execução a variável será elevada (hoisting) e tudo funcionará corretamente.

```js
var exibeMensagem = function() {
    mensagem = 'Sciensa';
    console.log(mensagem);
    var mensagem;
}
```

> Escopo de função

> Responsividade

> Pode ser util: Pythontutor
