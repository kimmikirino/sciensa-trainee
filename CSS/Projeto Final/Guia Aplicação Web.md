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
  padding: 10px;
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
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
}
```

Vamos para os últimos ajustes:

```HTML
<div>
  <img src="imgs/filme1.jpg" alt="capa filme1" />
  <div class="img-legend">
    <h4>Nome Filme</h4>
    <h6>Breve descrição aqui ...</h6>
  </div>
</div>
```

```CSS
.img-legend {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
  color: white;
  padding: 10px;
}

.img-legend h4,
h6 {
  margin: 4px 10px;
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

Uma pincelada para evitar futuros problemas:

```HTML
<div>
  <img src="imgs/filme1.jpg" alt="capa filme1" />
  <div class="img-legend">
    <h4>Nome Filme</h4>
    <h6>
      Breve descrição aqui asd asd as das da d as da sdas d asd as das as a sd as dasd asd as d as da sd as da d as da sd as das d asd adasdasdas das da sd asd as da sd asdasdasd asdasd asdas dasda
    </h6>
  </div>
</div>
```

```CSS
.img-legend h4,
h6 {
  margin: 4px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

> Agora só replicar pros outros items
