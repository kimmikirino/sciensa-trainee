# CSS

## 1. Style > CSS

> O estilo é a definição de maior peso quando se fala em estilização do html

```css
<style>
  .classe-teste {
    background-color: red
  }
</style>

<div class="classe-teste" style="width: 100px; height:100px; background-color:green;"> </div>


```

## 2. Pesos

> id > classe > elemento

```css
<style>

  div {
    background-color: green;
    width: 100px;
    height: 100px;
  }

  .classe-teste {
    background-color: red
  }

  #id-teste {
    background-color: yellow
  }
</style>

<div class="classe-teste"> </div>

```

## 3. Somando os Pesos

> O Peso só é importante para sobrescrever o comportamento (propriedades), sendo assim, propriedades não sobrescritas terão comportamento definido por pesos anteriores ou pelo default

```css
<style>

  div {
    background-color: green;
    width: 100px;
    height: 100px;
  }

  .classe-teste {
    width: 50px;
    background-color: green;
    border: 5px solid blue;
  }

  div.classe-teste {
    width: 200px;
    background-color: red;
  }

  .classe-teste.classe-teste2 {
    background-color: yellow;
  }
</style>

<div class="classe-teste"> </div>

```

## 4. Cuidados

> Vírgula caracteriza seletores com mesmo comportamento porém não soma peso

```css
.classe-teste,
.classe-teste2 {
  background-color: yellow;
}
```

<br>

> Espaço e Maior caracterizam trabalho em filhos. Logo podemos substituir isso:

```css
<style>
  .mae {
    background-color: green;
    width: 200px;
    height: 200px;
  }

  .filha {
    height: 96px;
    width: 96px;
    border: 2px solid black;
    background-color: blue;
  }

  .neta {
    height: 44px;
    width: 44px;
    border: 2px solid black;
    background-color: red;
  }
</style>

<div class="mae">
  <div class="filha"></div>
  <div class="filha">
    <div class="neta"></div>
    <div class="neta"></div>
  </div>
</div>
```

> Por isso:

```CSS
<style>
  .mae {
    background-color: green;
    width: 200px;
    height: 200px;
  }

  .mae div {
    border: 2px solid black;
    height: 44px;
    width: 44px;
    background-color: red;
  }

  .mae > div {
    height: 96px;
    width: 96px;
    background-color: blue;
  }
</style>

<div class="mae">
  <div></div>
  <div>
    <div></div>
    <div></div>
  </div>
</div>
```
