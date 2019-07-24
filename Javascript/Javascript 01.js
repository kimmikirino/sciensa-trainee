console.log("Bem vindos");

// declaração de variavel
var trainee = "javascript";
let fruta = "banana";

console.log(trainee);
console.log(fruta);

// diferenças entre o var e let:
// var permite redeclaração da mesma variavel

// var trainee = 100;
// console.log(trainee);

// erro na variavel já foi declarada
// let fruta = 'manga'

// constante
const filme = "Avengers";
console.log(filme);
// Error filme é apenas para leitura
// filme = 'Homem aranha'

// TIPO DE DADOS
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

// existe mais um tipo de dados Função, mas veremos depois

// OPERACOES BASICAS
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

// template literals
console.log(`${nome} ${sobrenome}`);

// Condicionais
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

// escopo de variavel
// tipo de dados função
