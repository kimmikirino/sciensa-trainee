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
    image: filme1,
    description: 'Em uma noite escura e chuvosa, um grupo de oitro estranhos fica preso em uma remota estação de ônibus esperando pela condução até a Cidade do México. Coisas estranhas começam a acontecer e eles ficam presos em uma luta pela sobrevivência e sanidade mental.'
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
        image: filme2,
        description: 'Um gerente de museu está usando de todas as armas possíveis para promover o sucesso de uma nova instalação e decide contratar uma empresa de relações públicas. Porém, isso acaba gerando consequências infelizes e um grande embaraço.'
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
Demonstrar no browser 

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
          { movie.description }
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
propriedade text-decoration

> No app.css adicionar 

```css
a {
  text-decoration: none;
}
```

Testar o botão +, vai abrir a rota /filme

> Mudar no arquivo movieItem.css todos o button, mudar para a (como a tag A já faz o redirecionamento, não precisaremos mais do button)

O botão ficará torto um pouco, vamos arrumar "live"", inspeciona e muda o flex e o margin negativo.

```css
.more-details a {
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
  align-items: center;
}

.more-details a:hover {
  background-color: #e5bace;
  color: #e72f85;
}

.more-details a:focus {
  outline: none;
}

.more-details a span {
  font-weight: 600;
}
```

### Alterar a página de detalhes do filme

1. Adicionar o header
2. Adicionar o hero
3. Criar um componente de visualização do filme (dar um tempo para o pessoal tentar criar), função simples
4. Criar estrutura movieDetail

```js
import React from 'react'
import filme from '../../assets/imgs/filme1.jpg'

const MovieDetail = () => {
    return (
        <div className="gallery-container">
            <img src={filme} alt="imagem filme" ></img>
        </div>
    )
}

export default MovieDetail
```

5. Importar movie detail na page MovieView
6. Alterar arquivo de app.js, adicionar MovieView

```js
import MovieView from './Pages/MovieView'

<Route path="/filme/:id" component={MovieView} />
```

id é o filme que iremos filtrar no array mockado, futuramente, irá bater diretamente na rota para pegar os detalhes
7. Alterar o arquivo movieView, importar o mock e alterar para hooks

```js
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero'
import MovieDetail from '../Components/MovieDetail'
import { movies } from '../mock'

const MovieView = ({ match }) => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        const filtered = movies.filter((movie) => movie.id === parseInt(match.params.id))[0]
        setMovie(filtered)
    }, [match.params.id]);

    return (
        <div>
            <Header />
            <Hero />
            <MovieDetail movie={movie}/>
        </div>
    )
}

export default MovieView
```

8. Alterar o arquivo movieDetail, para receber os dados por props, editar css


```js
import React from 'react'
import './movieDetail.css'

const MovieDetail = ({ movie }) => {

  return movie ? (//valider se tem filme
    <div className="container">
      <img src={movie.image} alt={movie.title} ></img>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p><b>Diretor: </b>{movie.director}</p>
        <p><b>Artistas: </b>{movie.cast.map(artist => (
          <span key={artist.id}>{`${artist.firstName} ${artist.lastName}`} / </span>
        ))}</p>
        <p><b>Ano de estréia: </b>{movie.director}</p>
        <p><b>Gêneros: </b>{movie.genres.map(genre => (
          <span key={genre.id}> {genre.description} /</span>
        ))}</p>
      </div>
    </div>
  ) : <div>Filme selecionado não encontrado</div>
}

export default MovieDetail
```

Alterar arquivo css para adicionar container, distanciar a imagem do texto e cor da fonte

```css
.container {
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  padding: 20px;
}

.movie-box {
  margin: 0 50px;
}

.box-title {
  color: #59398E;
  font-size: 34px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px 0;
}
```

9. Criar componente de botão para depois importar no arquivo de movieDetail

Dar um tempo para o pessoal criar o componente

/Button/index.js
```js
import React from 'react'
import './button.css'

const Button = ({ children, ...props }) => {
  return (
    <button type="button" {...props} >{children}</button>
  )
}

export default Button
```

Criar o css por partes de acordo com o layout
/Button/button.css

```css
.btn {
  font-size: 20px;
  border-radius: 10px;
  padding: 10px;
  flex: 1;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 10px;
  background-color: white;
  border: none;
}

.btn-primary {
  background-color: #E72F85;
  color: white;
}

.btn-secondary {
  border: 1px solid #E72F85;
  color: #E72F85;
}
```

10. Importar o botao no MovieDetail

```js
import React from 'react'
import Button from "../Button";
import './movieDetail.css'

const MovieDetail = ({ movie }) => {

  return movie ? (
    <div className="container">
      <img className="movie-img" src={movie.image} alt={movie.title} ></img>
      <div className="movie-box">
        <h2 className="box-title">{movie.title}</h2>
        <p>{movie.description}</p>
        <p><b>Diretor: </b>{movie.director}</p>
        <p><b>Artistas: </b>{movie.cast.map(artist => (
          <span key={artist.id}>{`${artist.firstName} ${artist.lastName}`} / </span>
        ))}</p>
        <p><b>Ano de estréia: </b>{movie.director}</p>
        <p><b>Gêneros: </b>{movie.genres.map(genre => (
          <span key={genre.id}> {genre.description} /</span>
        ))}</p>
        <div className="btn-box">
          <Button className="btn btn-primary">Editar</Button>
          <Button className="btn btn-secondary">Excluir</Button>
        </div>
      </div>
    </div>
  ) : <div>Filme selecionado não encontrado</div>
}

export default MovieDetail
```
Alterar o css

```css
.container {
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  padding: 20px;
}

.movie-box {
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.movie-box p {
  margin: 10px 0;
}

.box-title {
  color: #59398E;
  font-size: 34px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px 0;
}

.btn-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
```

11. Responsividade

movieDetail.css
Adição de flex direction column e acima de 600 row
movie-img  
width 100%

```css
.container {
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  padding: 20px;
  flex-direction: column;
  margin-bottom: 10px;
}

.movie-box {
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.movie-img {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  .container {
    flex-direction: row;
    padding: 20px;
  }
  .movie-box {
    margin: 0 50px;
  }
}
```

### Adicionar o link para home no logo 

./Header

```js
import React from 'react'
import { Link } from "react-router-dom"; //add
import Logo from '../../assets/imgs/logo-sciensa-pb2.png'

import './header.css'

const Header = () => (
  <div className="fixed-menu">
    <div className="logo-content">
      <Link to='/'><img src={Logo} alt="sciensa" /></Link>
    </div>
    <div className="menu-content"><button>Adicionar Filme</button></div>
  </div>
)

export default Header
```

### Criar uma nova página para criação de um novo filme

1. Cria uma nova página de edição com Header

```js
import React from 'react'
import Header from '../Components/Header'

const MovieNew = () => {
    return (<div>
        <Header></Header>
        Teste
    </div>)
}

export default MovieNew
```

2. Cria uma nova rota (app.js) e importa o Componente MovieNew e envolver com switch, pois irá respeitar a ordem, como no switch case

```js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Pages/Main'
import MovieView from './Pages/MovieView'
import MovieNew from './Pages/MovieNew'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/filme/novo" component={MovieNew} />
        <Route path="/filme/:id" component={MovieView} />
      </Switch>
    </Router>
  );
}

export default App;

```

3. Alteração do movieNew , criando input e depois extraindo para um componente

```js
import React from 'react'
import Header from '../Components/Header'
import LabelInput from '../Components/LabelInput'
import './movieNew.css'

const MovieNew = () => {
  return (<div>
    <Header></Header>
    <div className="container new-top">
      <div className="box-label">
					<label>Titulo: </label>
					<input type="text"></input>
        </div>
    </div>
  </div>)
}

export default MovieNew
```

./movieNew.css
```css
.new-top {
  padding-top: 70px;
  flex-direction: column;
}
```

./LabelInput.js
```js
import React from 'react'
import './labelInput.css'

const LabelInput = ({ label, ...props}) => {
  return (
    <div className="box-label">
      <label>{label}: </label>
      <input className="input-text" {...props} ></input>
    </div>
  )
}

export default LabelInput
```

./labelInput.css

```css
.box-label {
  display: flex;
  padding-top: 25px;
  flex-direction: column;
}

.input-text {
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #613D9B;
  border-radius: 10px;
  height: 30px;
  padding: 5px 10px;
  margin-top: 10px;
}

.input-text:focus, .input-text:active {
  outline: none;
  border: 2px solid #E72F85;
}
```

> Arquivo MovieNew

```js
import React from 'react'
import Header from '../Components/Header'
import LabelInput from '../Components/LabelInput'
import './movieNew.css'

const MovieNew = () => {
  return (<div>
    <Header></Header>
    <div className="container new-top">
      <LabelInput label="Título" type="text"></LabelInput>
      <LabelInput label="Descrição" type="text"></LabelInput>
      <LabelInput label="Diretor" type="text"></LabelInput>
      <LabelInput label="Artistas" type="text"></LabelInput>
      <LabelInput label="Gêneros" type="text"></LabelInput>
    </div>
  </div>)
}

export default MovieNew
```

4. Adicionar botoes para salvar ou cancelar 

```js
import React from 'react'
import Header from '../Components/Header'
import LabelInput from '../Components/LabelInput'
import Button from '../Components/Button'
import './movieNew.css'

const MovieNew = () => {
  return (<div>
    <Header></Header>
    <div className="container new-top">
      <LabelInput label="Título" type="text"></LabelInput>
      <LabelInput label="Descrição" type="text"></LabelInput>
      <LabelInput label="Diretor" type="text"></LabelInput>
      <LabelInput label="Artistas" type="text"></LabelInput>
      <LabelInput label="Gêneros" type="text"></LabelInput>
      <div className="btn-box">
        <Button className="btn btn-primary">Salvar</Button>
        <Button className="btn btn-secondary">Cancelar</Button>
      </div>
    </div>
  </div>)
}

export default MovieNew
```

> Ajustar btn:last-child e max-width do page movieNew

5. Escurecer header - Receber props para ficar darker

./Header/index.js

```js

```

./Header/header.css

```css
.fixed-menu.darker {
    background-color: rgba(97, 61, 155, 1);
}
```

### Criar componentes controlados - input type

Forma fácil de fazer é criar um on change para cada input

```js
import React, { useState } from 'react'
import Header from '../Components/Header'
import LabelInput from '../Components/LabelInput'
import Button from '../Components/Button'
import './movieNew.css'

const MovieNew = () => {

  const [filename, setFilename] = useState('');

  const handleChange = event => setFilename(event.target.value);

  const handleClickSave = () => console.log(filename)

  return (<div>
    <Header className="darker"></Header>
    <div className="container new-top">
      <LabelInput label="Importar Imagem" type="file" value={filename} onChange={handleChange}></LabelInput>
      <LabelInput label="Título" type="text"></LabelInput>
      <LabelInput label="Descrição" type="text"></LabelInput>
      <LabelInput label="Diretor" type="text"></LabelInput>
      <LabelInput label="Artistas" type="text"></LabelInput>
      <LabelInput label="Gêneros" type="text"></LabelInput>
      <div className="btn-box">
        <Button className="btn btn-primary" onClick={handleClickSave}>Salvar</Button>
        <Button className="btn btn-secondary">Cancelar</Button>
      </div>
    </div>
  </div>)
}

export default MovieNew
```

Campo com o mesmo tipo, input type="text" dá para utilizar o mesmo método
É preciso nomear cada campo
Criar um useState para cada campo, será um objeto
Criar um handleChangeFields e atribuir cada variável com o eventtargetname, podemos primeiramente ver o que tem dentro do event

```js
import React, { useState } from 'react'
import Header from '../Components/Header'
import LabelInput from '../Components/LabelInput'
import Button from '../Components/Button'
import './movieNew.css'

const MovieNew = () => {

  const [filename, setFilename] = useState('');
  const [fields, setFields] = useState({
    title: '',
    description: '',
    director: '',
    cast: '',
    genres: ''
  });

  const handleChange = event => setFilename(event.target.value);

  const handleChangeFields = event => {
    const value = event.target.value;
    setFields({
      ...fields,
      [event.target.name]: value
    });
  }

  const handleClickSave = () => console.log(filename, fields)

  return (<div>
    <Header className="darker"></Header>
    <div className="container new-top">
      <LabelInput label="Importar Imagem" type="file" value={filename} onChange={handleChange}></LabelInput>
      <LabelInput label="Título" type="text" name="title" value={fields.title} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Descrição" type="text" name="description" value={fields.description} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Diretor" type="text" name="director" value={fields.director} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Artistas" type="text" name="cast" value={fields.cast} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Gêneros" type="text" name="genres" value={fields.genres} onChange={handleChangeFields}></LabelInput>
      <div className="btn-box">
        <Button className="btn btn-primary" onClick={handleClickSave}>Salvar</Button>
        <Button className="btn btn-secondary">Cancelar</Button>
      </div>
    </div>
  </div>)
}

export default MovieNew
```

Agora todos os campos estão controlados


### Criar evento no botão salvar 

Criar uma função handleClickSave
e após salvar, apagar os campos e mostrar mensagem de informações foram salvas.
Não fará chamada API nos dados mockados

```js
const handleClickSave = () => {
    //Aqui teria uma chamada para o back para salvar as infos
    
    //Apagar informações do form
    setFilename('')
    //Vamos utilizar as informações dos estados para apagar os dados de formulário, podemos apenas copiar e colar as informações zeras, ou
    // criar uma variável com essas informações zeradas e atribuir, no caso vamos copiar e colar.
    setFields({
      title: '',
      description: '',
      director: '',
      cast: '',
      genres: ''
    })
    
  }
```

mostrar mensagem de informações foram salvas. 
Vamos criar uma variável message

```js
import React, { useState } from 'react'
import Header from '../Components/Header'
import LabelInput from '../Components/LabelInput'
import Button from '../Components/Button'
import './movieNew.css'

const MovieNew = () => {

  const [filename, setFilename] = useState('');
  const [fields, setFields] = useState({
    title: '',
    description: '',
    director: '',
    cast: '',
    genres: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = event => setFilename(event.target.value);

  const handleChangeFields = event => {
    const value = event.target.value;
    setFields({
      ...fields,
      [event.target.name]: value
    });
  }

  const handleClickSave = () => {
    //Aqui teria uma chamada para o back para salvar as infos

    //Apagar informações do form
    setFilename('')
    //Vamos utilizar as informações dos estados para apagar os dados de formulário, podemos apenas copiar e colar as informações zeras, ou
    // criar uma variável com essas informações zeradas e atribuir, no caso vamos copiar e colar.
    setFields({
      title: '',
      description: '',
      director: '',
      cast: '',
      genres: ''
    })

    // aqui haverá uma validação dos campos se necessário   
    setMessage('Filme criado com sucesso! :)') 
  }

  return (<div>
    <Header className="darker"></Header>
    <div className="container new-top">
      <LabelInput label="Importar Imagem" type="file" value={filename} onChange={handleChange}></LabelInput>
      <LabelInput label="Título" type="text" name="title" value={fields.title} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Descrição" type="text" name="description" value={fields.description} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Diretor" type="text" name="director" value={fields.director} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Artistas" type="text" name="cast" value={fields.cast} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Gêneros" type="text" name="genres" value={fields.genres} onChange={handleChangeFields}></LabelInput>
      <div className="btn-box">
        <Button className="btn btn-primary" onClick={handleClickSave}>Salvar</Button>
        <Button className="btn btn-secondary">Cancelar</Button>
      </div>
      <span>{message}</span>
    </div>
  </div>)
}

export default MovieNew
```

### Botão cancelar

O que vcs acham que podemos fazer no botão cancelar?

Vamos fazer com que esse botão volte para a home. Como podemos fazer isso? Esperar a resposta
Para facilitar, vamos adicionar um componente Link e colocar as classes do botão

```js
import { Link } from "react-router-dom";
<Link className="btn btn-secondary" to='/'>Cancelar</Link>
```

### Agora vamos criar a parte de Edição

Podemos reaproveitar o componente de criação para edição, certo?
Vamos extrair a parte do componente MovieNew para outro novo componente

Dar um tempo para extraírem esse componente 15min

Criar componente ./MovieForm/index.js
```js
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import LabelInput from '../LabelInput'
import Button from '../Button'
const MovieForm = () => {

  const [filename, setFilename] = useState('');
  const [fields, setFields] = useState({
    title: '',
    description: '',
    director: '',
    cast: '',
    genres: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = event => setFilename(event.target.value);

  const handleChangeFields = event => {
    const value = event.target.value;
    setFields({
      ...fields,
      [event.target.name]: value
    });
  }

  const handleClickSave = () => {
    //Aqui teria uma chamada para o back para salvar as infos

    //Apagar informações do form
    setFilename('')
    //Vamos utilizar as informações dos estados para apagar os dados de formulário, podemos apenas copiar e colar as informações zeras, ou
    // criar uma variável com essas informações zeradas e atribuir, no caso vamos copiar e colar.
    setFields({
      title: '',
      description: '',
      director: '',
      cast: '',
      genres: ''
    })

    // aqui haverá uma validação dos campos se necessário   
    setMessage('Filme criado com sucesso! :)')
  }

  return (
    <div className="container new-top">
      <LabelInput label="Importar Imagem" type="file" value={filename} onChange={handleChange}></LabelInput>
      <LabelInput label="Título" type="text" name="title" value={fields.title} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Descrição" type="text" name="description" value={fields.description} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Diretor" type="text" name="director" value={fields.director} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Artistas" type="text" name="cast" value={fields.cast} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Gêneros" type="text" name="genres" value={fields.genres} onChange={handleChangeFields}></LabelInput>
      <div className="btn-box">
        <Button className="btn btn-primary" onClick={handleClickSave}>Salvar</Button>
        <Link className="btn btn-secondary" to='/'>Cancelar</Link>
      </div>
      <span>{message}</span>
    </div>
  )
}

export default MovieForm
```

E importar o MovieForm na página

/Page/MovieNew.js
```js
import React from 'react'
import Header from '../Components/Header'
import MovieForm from '../Components/MovieForm'
import './movieNew.css'

const MovieNew = () => {

  return (<div>
    <Header className="darker"></Header>
    <MovieForm />
  </div>)
}

export default MovieNew
```

Agora vamos criar uma condição para chamar o formulário na página ao clicar em editar e voltar ao clicar em cancelar

Page/MovieView.js
```js
import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero'
import MovieDetail from '../Components/MovieDetail'
import MovieForm from '../Components/MovieForm'
import { movies } from '../mock'

const MovieView = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [isEditing, setIsEditing] = useState(false); //cria 

  const handleEdit = () => {
    console.log('alo') //testa com console log
  } //cria novo metodo
  useEffect(() => {
    const filtered = movies.filter((movie) => movie.id === parseInt(match.params.id))[0]
    setMovie(filtered)
  }, [match.params.id]);

  return (
    <div>
      <Header />
      <Hero />
      {
        isEditing ?
          <MovieForm movie={movie} /> :
          <MovieDetail movie={movie} handleEdit={handleEdit} /> // passa por parametro
      }
    </div>
  )
}

export default MovieView
```

importa o método handleEdit e atribui no botão editar

```js
const MovieDetail = ({ movie, handleEdit }) => {

  <Button className="btn btn-primary" onClick={handleEdit}>Editar</Button>

```

Dentro de handleEdit, como podemos fazer para alterar a variavel isEditing?

Aguardar

Alterar o método usando o setIsEditing
```js
  const handleEdit = () => { //linha 12
    setIsEditing(!isEditing)
  } 
```

Agora vamos passar por props o movie e importar

MovieView.js
```js
<MovieForm movie={movie} /> : //linha 26
``` 

Alterar o movieForm para receber props

Components/MovieForm.js
```js

```

### Estrutura AXIOS



