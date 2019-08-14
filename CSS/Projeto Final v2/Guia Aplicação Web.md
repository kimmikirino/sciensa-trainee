# Guia Aplicação web final

## 1 - Criar o Header

```CSS
.header {
  width: 100%;
  height: 150px;
  background-color: red;
}
```

```HTML
<div class="header"></div>
```

## 2 - Zerar o body

```CSS
body {
  margin: 0px;
}
```

## 2 - Criar a galeria de imagens

```HTML
<div class="gallery-container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

<br>

Classe **.gallery container**

```CSS
.gallery-container {
  margin: 10px auto;
  width: 1360px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: gray;
}
```

<br>

Modificando os itens do container **.gallery container**

```CSS
.gallery-container > div {
  width: 250px;
  height: 380px;
  margin: 10px;
  background-color: green;
  border: 1px solid red;
  border-radius: 5px;
}
```

## 2 - Inserindo e ajustando os elementos de imagem

```HTML
<div><img src="imgs/filme1.jpg" alt="capa filme1" /></div>
```

> Nos deparamos com o problema da imagem estar indo para fora do elemento. Vamos corrigir. Vamos modificar os itens do container

```CSS
.gallery-container > div {
  width: 250px;
  height: 380px;
  margin: 10px;
  background-color: green;
  border: 1px solid red;
  border-radius: 5px;

  overflow: hidden;
}
```

<br>

Teremos imagens de tamanhos diferentes. O ideal é centralizarmos a imagem.

```CSS
.gallery-container > div {
  width: 250px;
  height: 380px;
  margin: 10px;
  background-color: green;
  border: 1px solid red;
  border-radius: 5px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
}
```

> O filme 7 tem tamanho menor do que os outros que normalmente são maiores. Para melhorarmos visualmente esses casos, vamos aplicar um fundo preto.

```CSS
.gallery-container > div {
  width: 250px;
  height: 380px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid gray;
  background-color: #363636;
}

.gallery-container {
  margin: 10px auto;
  width: 1360px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  background-color: gray; /** remover **/
}
```

## 3 - Criando o elemento de legenda

Primeiramente criaremos a div dentro dos itens com a classe **_img-legend_**:

```HTML
<div>
  <img src="imgs/filme1.jpg" alt="capa filme1" />
  <div class="img-legend"></div>
</div>
```

Agora criaremos a classe referenciada na div acima:

```CSS
.img-legend {
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
  color: white;
  border-radius: 5px;
}
```

> Ahhhhhh temos um problema, qual problema? A div pai não tem position definida.

```CSS
.gallery-container > div {
  position: relative;

  width: 250px;
  height: 380px;
  margin: 10px;
  background-color: #363636;
  border: 1px solid gray;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Precisamos separar os espaço onde ficará o botão de mais detalhes e a legenda:

```html
<div class="img-legend">
  <div class="text-legend"></div>
  <div class="more-details"></div>
</div>
```

```css
.img-legend {
  width: 250px;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  color: white;

  display: flex;
}

.text-legend {
  flex-grow: 4;
  padding: 5px 0px;
  background-color: red;
}

.more-details {
  flex-grow: 1;
  background-color: green;
}
```

Vamos incluir conteúdo na legenda .... e ter alguns problemas

```html
<div class="img-legend">
  <div class="text-legend">
    <h4>Nome Filme</h4>
    <h6>
      Breve descrição aqui asd asd as das da d as da sdas d asd as das asd a sd
      as dasd asd as d as da sd as da d as da sd as das d asd adasdasdas das da
      sd asd as da sd asdasdasd asdasd asdas dasda
    </h6>
  </div>
  <div class="more-details">
    <button><span>+</span></button>
  </div>
</div>
```

> Eita que nem apareceu esse texto gigante. Vamos melhorar:

```css
.img-legend div h4,
h6 {
  margin: 4px 10px;
}
```

> Beleza, mas continua uma merda. Vamos continuar melhorando:

```css
.img-legend div {
  white-space: nowrap;
  overflow: hidden;
}
.img-legend div h4,
h6 {
  margin: 4px 10px;
  /*Adicionar essas linhas*/
  overflow: hidden;
  text-overflow: ellipsis;
}
```

> Po, melhorou, mas piorou. Pois é, precisamos falar sobre flex-grow. Este atributo respeita o conteúdo interno para se distribuir pela tela. Olhe os exemplos abaixo:

```css
.text-legend {
  flex-grow: 4;
  flex-basis: 0;
  padding: 5px 0px;
  background-color: red;
}

.more-details {
  flex-grow: 1;
  flex-basis: 0;
  background-color: green;
}
```

> O flex-basis com valor 0 faz com que o espaço seja divido na soma dos Grow e respeito o tamanho mínimo dessa divisão;

> Ai entra o flex, que seta os flex-bases: 0 automaticamente;

> Depois do teste de espaço, vamos retirar o background-color e colocar o conteúdo nas divs

```css
.text-legend {
  flex: 4;
  padding: 12px 0px;
}

.more-details {
  flex: 1;
}
```

Esse botão está feio hein, vamos fazer uma coisinha um pouco melhor:

```css
.more-details button {
  background-color: #e72f85;
  border: 0px;
  border-radius: 20px;
  width: 37px;
  height: 37px;
  color: white;
  font-size: 35px;
  padding: 0px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.more-details button:hover {
  background-color: #e5bace;
  color: #e72f85;
}

.more-details button:focus {
  outline: none;
}

.more-details button span {
  margin-top: -5px;
  font-weight: 600;
}
```

Centralizar esse caboco:

```css
.more-details {
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
}
```

Vamos alterar a font que nossa aplicação web utilizará como default. Primeiramente aplicaremos dentro da tag <HEAD> o seguinte link:

```HTML
<link
  href="https://fonts.googleapis.com/css?family=Noto Sans"
  rel="stylesheet"
/>
```

Agora alteraremos o body

```CSS
body {
  margin: 0px;
  font-family: "Noto Sans";
  background-color: #fffcf2;
}
```

## 4 - Vamos evoluir o Header e finalizar o site

Primeiramente vamos alterar a font que nossa aplicação web utilizará como default. Primeiramente aplicaremos dentro da tag <HEAD> o seguinte link:

```HTML
<link
  href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
  rel="stylesheet"
/>
```

Agora alteraremos o body

```CSS
body {
  margin: 0px;
  font-family: "Open Sans";
  background-color: #fffcf2;
}
```

Agora vamos evoluir o Header para:

```HTML
<div class="header">
  <div><h1 class="title-trainee">Programa de Trainees</h1></div>
  <div><h1>SCIENSA</h1></div>
</div>
```

```css
.header {
  height: 450px;
  background-image: url("../imgs/fundo_header.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 70px;
}

.header h1 {
  font-size: 65px;
  margin: 5px;
}

.title-trainee {
  font-weight: 300;
}
```

Por fim o fixed-menu

```html
<div class="fixed-menu">
  <div class="logo-content"><img src="imgs/logo-sciensa-pb2.png" /></div>
  <div class="menu-content"><button>Adicionar Filme</button></div>
</div>
```

```css
.fixed-menu {
  height: 70px;
  width: 100%;
  background-color: rgba(97, 61, 155, 0.7);
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fixed-menu div {
  margin: 10px;
}

.logo-content {
  border-right: 1px solid white;
  padding: 0px 30px;
}

.menu-content {
  padding-right: 30px;
}

.menu-content button {
  background-color: transparent;
  border: 0px;
  border-radius: 20px;
  width: auto;
  height: 37px;
  color: white;
  font-size: 16px;
  font-weight: 200;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.menu-content button:hover {
  background-color: #e72f85;
}

.menu-content button:focus {
  outline: none;
}
```

## 5 - Responsividade

Sabe o que falta realmente? Responsividade. E para isso utilizaremos **_@media_**.

```CSS
@media only screen and (min-width: 1360px) {
  .gallery-container {
    width: 1360px;
  }
}

@media only screen and (max-width: 1359px) {
  .gallery-container {
    width: 816px;
  }
  .header {
    height: 225px;
    text-align: center;
  }
  .header h1 {
    font-size: 50px;
    margin: 5px;
  }
}

@media only screen and (max-width: 815px) {
  .gallery-container {
    width: 544px;
  }

  .header h1 {
    font-size: 40px;
    margin: 5px;
  }
}

@media only screen and (max-width: 543px) {
  .gallery-container {
    width: 272px;
  }
  .header h1 {
    font-size: 30px;
    margin: 5px;
  }

  .menu-content button {
    font-size: 12px;
  }
}
```
