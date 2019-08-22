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
