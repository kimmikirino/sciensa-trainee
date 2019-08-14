# React baseado no html

## Instalações

- nodejs

```bash
npx create-react-app sciensa-filmes
cd sciensa-filmes
npm start
```

### Estrutura de pastas
Explicar a estrutura

```
sciensa-filmes
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

## Alteração da estrutura de pastas e configurações

> Alterar a estrutura de pastas

Criar pasta Components, Pages e assets
Copiar as fontes utilizadas para o index.html
Copiar as imagens para a pasta asset
Trocar o Title para Sciensa filmes
Apagar o conteudo do App.css

Adicionar no app.css

```css
body {
  margin: 0px;
  font-family: "Open Sans";
  background-color: #fffcf2;
}
```

## Criar componente main dentro de page 

mover o codigo que estava no app para o main

## Criar componente header

Dentro de components criar o header, copiar código previamente feito
Fazer alterações de imagens
Trocar o class pelo className
importar o header dentro de page

## Criar componente hero
Dentro de components criar o hero, copiar código previamente feito
importar o header dentro de page

## Criar componente item de filme
Baseado no html ja feito anteriormente
importar o header dentro de page

```jsx
import React from 'react'
import filme1 from '../../assets/imgs/filme1.jpg'
import './movieItem.css'

const MovieItem = () => (
  <div>
    <img src={filme1} alt="capa filme1" />
    <div className="img-legend">
      <div className="text-legend">
        <h4>Nome Filme</h4>
        <h6>
          Breve descrição aqui asd asd as das da d as da sdas d asd as das
          asd a sd as dasd asd as d as da sd as da d as da sd as das d asd
          adasdasdas das da sd asd as da sd asdasdasd asdasd asdas dasda
            </h6>
      </div>
      <div className="more-details">
        <button><span>+</span></button>
      </div>
    </div>
  </div>
)

export default MovieItem
```

### Criar mock dos dados do filme
Criar pasta mock e arquivo index.js

```js
import filme1 from '../../assets/imgs/filme1.jpg' 

const movie = {
    id: 1,
    title: 'Los Parecidos',
    releaseYear: 2015,
    genres: [{
        id: 1,
        description: 'Ficção científica'
    },
    {
        id: 2,
        description: 'Terror'
    }],
    director: 'Isaac Ezban',
    cast: [{
        id: 1,
        firstName: 'Gustavo',
        lastName: 'Sánchez Parra',
        dateOfBirth: '01-01-1990'
    }],
    image: filme1
}


export { movie }
```

### Chamar o mock no componente Main

```js
import React from 'react'
import './main.css'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero'
import MovieItem from '../Components/MovieItem'
import { movie } from '../mock'

const Main = () => {
  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <div className="gallery-container">
        <MovieItem movie={movie} />
      </div>
    </>
  );
}

export default Main;
```

### Alterar o arquivo index do movieitem
As informações serão alteradas de acordo com o props

```js
import React from 'react'
import './movieItem.css'

//usar destructuring e template literals
const MovieItem = ({ movie }) => (
  <div>
    <img src={movie.image} alt={movie.title} />
    <div className="img-legend">
      <div className="text-legend">
        <h4>{ movie.title }</h4>
        <h6>
          { `Dirigido por: ${movie.director}` }
          </h6>
      </div>
      <div className="text-more-detail">
        <button><span>+</span></button>
      </div>
    </div>
  </div>
)

export default MovieItem
```

## Criar mock de movies, array de mais de um filme

```js
import filme1 from '../assets/imgs/filme1.jpg' 
import filme2 from '../assets/imgs/filme2.jpg'

const movie = {
    id: 1,
    title: 'Los Parecidos',
    releaseYear: 2015,
    genres: [{
        id: 1,
        description: 'Ficção científica'
    },
    {
        id: 2,
        description: 'Terror'
    }],
    director: 'Isaac Ezban',
    cast: [{
        id: 1,
        firstName: 'Gustavo',
        lastName: 'Sánchez Parra',
        dateOfBirth: '01-01-1990'
    }],
    image: filme1
}

const movies = [
    movie,
    {
        id: 2,
        title: 'The Square',
        releaseYear: 2018,
        genres: [{
            id: 3,
            description: 'Comédia'
        },
        {
            id: 4,
            description: 'Drama'
        }],
        director: 'Ruben Östlund',
        cast: [{
            id: 2,
            firstName: 'Claes',
            lastName: 'Bang',
            dateOfBirth: '01-01-1990'
        }],
        image: filme2
    }
]

export { movie, movies }
```

## Fazer iteração do array de filmes no Main.js

```js
import React from 'react'
import './main.css'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero'
import MovieItem from '../Components/MovieItem'
import { movies } from '../mock'

function Main() {
  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <div className="gallery-container">
        {
          movies.map(movie => <MovieItem movie={movie} key={movie.id} />)
        }
      </div>
    </>
  );
}

export default Main;

```

## Instalar o react router

Realizar a instalação do react-router-dom

```shell
npm install --save react-router-dom
```

### Alterar o arquivo App.js para rotear

```js
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './Pages/Main'
import './App.css'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/main" exact component={Main} />
    </Router>
  );
}

export default App;

```

## Vamos criar uma visualização para que ao clicar no mais (detalhes do filme) abra uma pagina relativa ao filme

Criar uma page nova MovieView.js

Apenas para demonstração de rota

```js
import React from 'react'

const MovieView = () => {
    return (
        <div>Teste</div>
    )
}

export default MovieView
```

importar componente no app.js 

```js
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './Pages/Main'
import MovieView from './Pages/MovieView'
import './App.css'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/filme" component={MovieView} />
    </Router>
  );
}

export default App;
```

### Adicionar no botão "MAIS" o link para redirecionamento de pagina dentro do MovieItem

```js
import React from 'react'
import { Link } from "react-router-dom";
import './movieItem.css'

//usar destructuring e template literals
const MovieItem = ({ movie }) => (
  <div>
    <img src={movie.image} alt={movie.title} />
    <div className="img-legend">
      <div className="text-legend">
        <h4>{ movie.title }</h4>
        <h6>
          { `Dirigido por: ${movie.director}` }
          </h6>
      </div>
      <div className="more-details">
        <Link to="/filme">
          <button><span>+</span></button>
        </Link>
      </div>
    </div>
  </div>
)

export default MovieItem
```

Vamos remover o traço que aparece embaixo do link, por ser um comportamento padrão da tag A

> No app.css adicionar 

```css
a {
  text-decoration: none;
}
```

