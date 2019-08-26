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

### 3.5 - State Component

Inicialmente devemos entender que para um componente ter estado ele precisa ser declarado como componente de classe. Isso é uma verdade? Não,mas iremos tomar esse verdade para futuramente sim abordar os Hooks.

Vamos criar um novo componente chamado: ComponenteComEstado.js

```js
import React from "react";

class ComponenteComEstado extends React.Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <div
          style={{
            width: 400,
            height: 20,
            padding: 10,
            backgroundColor: "lightGray"
          }}
        />
        <button type="button">Abrir</button>
        <button type="button">Fechar</button>
      </div>
    );
  }
}

export default ComponenteComEstado;
```

Vamos colocar um Estado nele, e usá-lo no contexto do componente. Primeiramente o constructor:

```javascript
constructor(props){
  super(props)
}
```

> Esse super é OBRIGATÓRIO. Nunca esqueçam isso.

Agora o estado:

```js
class ComponenteComEstado extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      infoText: "Componente fechado",
      height: 20
    };
  }

  render() {
    return (
      <div style={{ padding: 10 }}>
        <div
          style={{
            width: 400,
            height: this.state.height,
            padding: 10,
            backgroundColor: "lightGray"
          }}
        >
          {this.state.infoText}
        </div>
        <button type="button">Abrir</button>
        <button type="button">Fechar</button>
      </div>
    );
  }
}
```

Vamos modificá-lo então:

```js
import React from "react";

class ComponenteComEstado extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      infoText: "Componente fechado",
      height: 20
    };
  }

  open = () => {
    this.setState({ height: 200, infoText: "Componente Aberto" });
  };

  close = () => {
    this.setState({ height: 30, infoText: "Componente fechado" });
  };

  render() {
    return (
      <div style={{ padding: 10 }}>
        <div
          style={{
            width: 400,
            height: this.state.height,
            padding: 10,
            backgroundColor: "lightGray"
          }}
        >
          {this.state.infoText}
        </div>
        <button type="button" onClick={() => this.open()}>
          Abrir
        </button>
        <button type="button" onClick={() => this.close()}>
          Fechar
        </button>
      </div>
    );
  }
}

export default ComponenteComEstado;
```

> Agora será necessário o **_this_** e o **_onClick_**

```js
<button type="button" onClick={this.open()}> // Aqui entramos em loop infinito
```

```js
<button type="button" onClick={this.open}> // Assim pode, mas perdemos a possibilidade de passar algum parametro
```

> É necessário falar sobre o ciclo de vida do ReactJs. O **_setState_** sempre chama o render, assim como o props.

> Modificar o **_state_** ou o **_props_** sempre CHAMARÁ o Render novamente

## 4 - Precisamos falar sobre Ciclo de vida

Aqui neste passo vamos ver o comportamento dos componentes em seu ciclos de vida, recebendo props e chamando o Render, e para isso iremos criar o ComponenteControlado:

```js
import React from "react";
import ComponenteComEstado from "./ComponenteComEstado";

class ComponenteControlado extends React.Component {
  state = {
    inputValue: ""
  };

  render() {
    return (
      <div style={{ padding: 10 }}>
        <h2>Insira o Texto do Painel</h2>
        <input type="text" placeholder="Insira do texto ..." />
        <br />
        <br />
        <ComponenteComEstado />
      </div>
    );
  }
}

export default ComponenteControlado;
```

> Porra Pará, que diabos é esse estado escrito dessa forma. O create-react-app utiliza um lib chamada **_react-alternative-class-component-syntax_** que, no caso, nos permite escrever o estado com componente dessa forma mais simplória.

> Temos um problema aqui que é o fato do input ser um uncontrolled component. Vamos controla-lo então:

```js
<input
  type="text"
  placeholder="Insira do texto ..."
  value={this.state.inputValue}
/>
```

> Po lega, Pará, agora eu não consigo nem editar o input. Agora é hora de falar sobre o oneWayDataBind. E vamos corrigir:

```js
<input
  type="text"
  placeholder="Insira do texto ..."
  value={this.state.inputValue}
  onChange={event => this.setState({ inputValue: event.target.value })}
/>
```

Vamos colocar um console.log logo ao abrir o Render() para avaliarmos as chamadas no mesmo:

```js
render() {
  console.log("render", this.state)
  return ();
}
```

Vamos fazer os componentes interagirem e dessa forma enteder os ciclo de vida dos mesmo:

Primeiro no ComponenteControlado:

```js
<ComponenteComEstado text={this.state.inputValue} />
```

Agora no componenteComEstado:

```js
<div
  style={{
    width: 400,
    height: this.state.height,
    padding: 10,
    backgroundColor: "lightGray",
    overflow: "hidden"
  }}
>
  {this.state.infoText}
  <p>{this.props.text}</p>
</div>
```

### 4.1 - Métodos do ciclo de vida componente

Vamos explicar os mais utilizados:

#### 4.1.1 - componentDidMount

É chamado assim que o componente é montado na árvore de componente, normalmente chamado apenas um vez. Ótimo lugar para se chamar os endpoints. Vamos testá-lo alterando o ComponenteComEstado:

```js
componentDidMount() {
  console.log("--- Passou no componentDidMount ---");
}
```

Notaremos que mesmo modificando o Props ou o Estado, está função só foi chamada a primeira quando foi montada na tela.

#### 4.1.2 - componentDidUpdate

Esse é o método que é chamado toda vez que o componente tem mudança no seu props. Este é um método que todo cuidado é pouco. Pq? Porque vc pode estar criando um loop infinito. ENTÃO CUIDADO PORRA!!!

Vamos modificar o ComponenteComEstado:

```js
componentDidUpdate(prevProps, prevState) {
  if (prevProps.text !== this.props.text && prevState.height !== 20) {
    this.close();
  }
}

render() {
  console.log("-- Passou no render do ComponenteComEstado --");
  return (
    ...
  )
}
```

> Vamos notar que quando o painel está aberto, ele é chamado duas vezes. Uma ao recebe a props e outra ao modificar o State. Pro usuário isso não será visível pq é feito por stack e executará para o usuário o último estado. Entretando modificar o State por meio de props é um PÉSSIMA pratica. Só estamos usando aqui para exemplificar.

## 5 - Hooks
