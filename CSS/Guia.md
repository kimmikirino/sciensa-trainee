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

## 5. Display

### 5.1 Block, inline e none

**_Block_** se comportam como caixas, logo possuem largura e altura, entretanto são como peixes Beta, vivem sozinho na sua linha

**_Inline_** se comportam como palavras, logo não possuem caixa, consequentemente altura e largura e convivem normalmente com outros elementos inline (palavras)

> Cada elemento HTML possui seu próprio display, por exemplo Divs são block e span são inline

<br>

**Exemplo de Block**

```CSS
<style>
  div {
    width: 200px;
    height: 200px;
    display: block;
  }

  .div-1 {
    color: white;
    background-color: black;
  }

  .div-2 {
    background-color: yellow;
  }

  .div-3 {
    background-color: green;
  }
</style>

<div class="div-1">Primeira</div>
<div class="div-2">Segunda</div>
<div class="div-3">Terceira</div>
```

<br>

**Exemplo de inline**

```CSS
div {
  width: 200px;
  height: 200px;
  display: inline;
}
```

<br>

**Exemplo de inline-block**

```CSS
div {
  width: 200px;
  height: 200px;
  display: inline-block;
}
```

### 5.2 Flex-Box

**_Flex-Box_** foi criado devido as necessidades de layouts mais robustos, dinâmicos e simétricos.

referência: [Gui completo de Flexbox](https://origamid.com/projetos/flexbox-guia-completo/)

**Exemplo Básico:**

```CSS
.flex-container {
  display: flex;
  background-color: blue;
}

.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
}

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

```

#### 5.2.1 flex-direction

Responsável pela orientação que o alinhamento dos itens do container obedecerão

> atributos: **_row_**, **_column_** e **_-reverse_**

```CSS
.flex-container {
  display: flex;
  background-color: blue;
  flex-direction: column;
}
```

#### 5.2.1 justify-content

Responsável alinhamento (direção) dos itens do container. A propriedade só funcionará caso os itens não ocupem todo o espaço do container. No caso por exemplo de itens com propriedade de flex ou grow o justify-content não serve para nada.

> atributos: **_flex-start_**, **_flex-end_**, **_space-between_**, **_space-around_** e **_center_**

```CSS
.flex-container {
  display: flex;
  background-color: blue;
  flex-direction: row;
  justify-content: center;
}

.flex-container {
  display: flex;
  background-color: blue;
  flex-direction: column;
  justify-content: flex-end;
  height: 400px;
}
```

### 5.2.2 align-items

Inicial é o alinhamento vertical dos itens do container, oq pode mudar caso você defina um flex-direction diferente do row.

> atributos: **_stretch_**, **_flex-start_**, **_flex-end_**, **_center_** e **_baseline_**

> O default é **_stretch_**, por isso aquele comportamento da espichado do fle-direction: column

```CSS
.flex-container {
  display: flex;
  background-color: blue;
  flex-direction: column;
  align-items: center;
}
```

### 5.2.2 flex-grow

Responsável pelo comportamento expansivo do item do container.

> Este é um atributo do **ITEM** e não do container.

> Pode-se usar o atalho **_flex:_** para utilizar o grow

> O valor 0 configura o comportamento desligado, a partir do 1 em diante configura expansão.

```CSS
.flex-container > div {
  background-color: #f1f1f1;
  margin: 10px;
  padding: 20px;
  flex-grow: 1;
}

<div style="flex-grow: 8">3</div>

```
