# React Fundamentals

## 1. Criar pasta de fundamentals

> A pasta deve ser criada dentro da pasta src

## 2. Web components

React é um biblioteca e webcomponents. A ideia inicial é fazer com que um aplicação web / página na internet seja construída em pequenos trechos que possam vir a ser reutilizados dinamicamentes.

## 3. Primeiros Componentes

### 3.1 - Stateless components

Criar componente: **_ComponenteFuncao.js_**

```javascript
import React from "react";

export default function(props) {
  return <h1>Primeiro Componente maroto</h1>;
}
```

Precisamos mudar o **_App.js_** para importar o ComponenteFuncao e instanciá-lo na aplicação

```javascript
import Component1 from "./fundamentals/ComponenteFuncao";

function App() {
  return <Component1 />;
}
```

Temos outras formas de escrever o mesmo componente:

```javascript
function ComponenteFuncao() {
  return <h1>Primeiro Componente Maroto</h1>;
}

export default ComponenteFuncao;
```

```javascript
const ComponenteFuncao = function() {
  return <h1>Primeiro Componente Maroto</h1>;
};

export default ComponenteFuncao;
```

> Mas porra Pará, qual é a melhor forma de fazer essa porra? Vamos usar as boas práticas do ES6

```javascript
import React from "react";

export default () => <h1>Primeiro Componente Maroto</h1>
};
```

> Importante explicar aqui a ausência do _return_

### 3.2 - Class components

Vamos agora para um componente de Classe. Vamos criá-lo: **_ComponenteClasse_**

```javascript
import React from "react";

class ComponenteClasse extends React.Component {
  render() {
    return (
      <ul>
        <li>Componente com função</li>
        <li>Componente com classe</li>
      </ul>
    );
  }
}

export default ComponenteClasse;
```

Vamos inseri-lo no **_App.js_** ...

> Pará, quero adicionar os dois, posso? Pode, mas vamos treinar isso com um novo
> Componente

### 3.3 - Composição de componentes

O React diferentemente do Angular trabalha com o conceito de composição de componentes. A ideia aqui é ao invés de extender um comportamento gerando um componente com comportamento mais específico, criar um componente maior que é composto por micro componentes de comportamento específico.

Para treinar isso vamos o componente **_MultiComponentes.js_**

```javascript
import React from "react";
import ComponenteFuncao from "./ComponenteFuncao";
import ComponenteClasse from "./ComponenteClasse";

export default () => (
    <ComponenteFuncao />
    <ComponenteClasse />
);
```

> Temos um problema. O React só pode desvolver em seu render apenas um componente. Possíveis correções:

```javascript
export default () => (
  <div>
    <ComponenteFuncao />
    <ComponenteClasse />
  </div>
);
```

Outra forma de fazer seria assim:

```javascript
export default () => [<ComponenteFuncao />, <ComponenteClasse />];
```

Entretanto a forma mais utilizada do mercado é com o React.Fragment, que possui o alias abaixo:

```javascript
export default () => (
  <>
    <ComponenteFuncao />
    <ComponenteClasse />
  </>
);
```

### 3.4 - Props

Props são os únicos argumentos que um Componente React pode receber. E significa propriedades. Vamos trabalhar esse conceito melhorando o ComponenteClasse, sem mexer nele. Primeiramente criaremos o componente ItemLista:

```javascript
import React from "react";

export default props => <li>{props.text}</li>;
```

Vejam que ele recebeu um propriedade chamada de text. Quem passou essa birosca? Ainda ninguém, vamos criar um componente pai para passar esses detalhes, o Lista.js:

```javascript
import React from "react";
import Item from "./ItemLista";

const Lista = props => {
  const { data } = props;

  return (
    <ul>
      {data.map(dataItem => (
        <Item text={dataItem} />
      ))}
    </ul>
  );
};

export default Lista;
```

> Mas alguém passa a propriedade **_data_** para o componente Lista. Vamos mexer no App.js

```javascript
import Lista from "./fundamentals/Lista";

function App() {
  const data = ["ReactJs", "Angular2+", "VueJs", "AngularJs", "EmberJs"];

  return <Lista data={data} />;
}

export default App;
```

> Mas é possível se comportar que nem o elemento `<li>` mesmo? Sim, vamos lá

Primeiro o pai

```javascript
<ul>
  {data.map(dataItem => (
    <Item>{dataItem}</Item>
  ))}
</ul>
```

Agora vamos mexer no filho

```javascript
export default props => <li>{props.children}</li>;
```

Agora ta bom? Não, não está. Vamos melhorar essa bagaça.

```js
import React from "react";
import Item from "./ItemLista";

const Lista = props => {
  const { data } = props;

  const gerarItems = () => {
    const items = data.map(dataItem => <Item>{dataItem}</Item>);

    return items;
  };

  return <ul>{gerarItems()}</ul>;
};

export default Lista;
```

Agora um exercício rápido:

- Modificar o **_ComponenteFuncao_** para receber um texto por props;
- Alterar o **_App.js_** para importar também o **_ComponenteFuncao_** passando texto: _Frameworks/Libs Javascript_

### 3.5 - State

Inicialmente devemos entender que para um componente ter estado ele precisa ser declarado como componente de classe. Isso é uma verdade? Não,mas iremos tomar esse verdade para futuramente sim abordar os Hooks.

Vamos criar um novo componente chamado: ComponenteComEstado.js

```js
```
