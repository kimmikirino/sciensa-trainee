# HTML

Hypertext Markup Language

Liguagem de marcação, como o XML

Marca informação com as tags

> O que é uma tag?

é a marcação da informação, rótulos usados para informar ao navegador como  deve ser apresentado o site

sintaxe das tags

```html

<h1>Aqui vai o texto que é um título</h1>

<p>Aqui vai mais texto, é um parágrafo</p>

<span>Mais um texto</span>
```
sempre existe uma tag de abertura e uma de fechamento.

tags de funcionalidades duplas por exemplo o BR

> Elementos

Elemento é tudo que está dentro das tags e a própria tag

> Atributos

Atributos são informações que passamos na Tag para que ela se comporte da maneira esperada.

Exemplos de atributos:

class, id, href, src, etc.

```html

<a href="http://sciensa.com" target="_blank">Site da sciensa</a>

```



## Vamos codar: 

### Criar um arquivo index.html

Mostrar atalho
explicar html5

HEAD
São dados implícitos, de uso e controle do documento

BODY
eh o conteúdo que será mostrado na tela


#### Headings ou títulos

Headings são os títulos da página, igual do word, exitem 6

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sciensa</title>
</head>

<body>
    <h1>Esse é o Primeiro HTML Heading</h1>
    <h2>Esse é o Segundo HTML Heading</h2>
    <h3>Esse é o Terceiro HTML Heading</h3>
    <h4>Esse é o Quarto HTML Heading</h4>
    <h5>Esse é o Quinto HTML Heading</h5>
    <h6>Esse é o Sexto HTML Heading</h6>
</body>

</html>

```

#### Parágrafos

Parágrafos, utilziamos p

```html
<p>Isso é um parágrafo</p>
<p>Podemos ter vários</p>

```

Se quiser pular a linha dentro do parágrafo não adianta fazer direto dentro da tag, é necessário usar <br>

```html
<p>- Oi turu pom?
- Turu pom e vc?
- Eu tb.
</p>

```
Utilizando BR

```html
<p>- Oi turu pom?<br>
- Turu pom e vc?<br>
- Eu tb.
</p>

```

#### Listas ordenadas e não ordenadas

> Ordenada

```html
<ol>
    <li>Banana</li>
    <li>Maçã</li>
    <li>Pera</li>
</ol>
```

> não ordenado
```html
<ul>
    <li>Banana</li>
    <li>Maçã</li>
    <li>Pera</li>
</ul>
```

#### Links

```html
<a href=”www.sciensa.com” target=”_blank”>Site da Sciensa</a> 
```

#### Comentários no HTML

```html
<!-- Isso aqui é um teste -->
<p>Paragrafo maroto</p>

```

#### Imagem

```html
<img src="http://files.hgsitebuilder.com/hostgator884471/image/dsc_0855_1.jpg" alt="Catioro lindo"/>

```

### Lição de casa

Estudar outras tags de html como:
div, img, b, i, span, table, iframe, entre outros.

### Adicional

Div
É como se fosse um bloco que serve para dividir o conteúdo. Podendo estilizar ou apenas separar.

```html
<div>
    <p>Texto bacana</p>
    <p>Texto bacana 2</p>
</div>

```