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

let avenger = {
  horas: 2,
  diretores: "Anthony e Joe Russo",
  atores: ["Chris", "Mark", "Scarlett"],
  ehBom: true
};

console.log(typeof avenger); // object


```

## 4. Operações básicas

> +, - , /, %

```js

let soma = 1 + 2;
console.log(soma);
console.log(10 - 1);
console.log(10 / 2);
console.log(11 % 2);

console.log("Maria" + " " + "Silva");
console.log(1 + "1");

let nome = "Joao";
let sobrenome = "Pereira";
console.log(nome + " " + sobrenome);

```

> Template literals


```js

console.log(`${nome} ${sobrenome}`);

```

## 4. Condicionais

> If, ternário

```js
const nome = "Joao"

if (nome === "Joao") {
  console.log(`é o Jão`);
} else {
  console.log("Não é o Jão");
}

if (nome !== "Joao") {
  console.log(`Não é o Jão`);
} else {
  console.log("É o Jão");
}

const valor = 5;
if (valor == "5") {
  //compara o valor mas nao compara o tipo
  console.log("comparação de valores");
} else {
  console.log("Não é 5");
}
```