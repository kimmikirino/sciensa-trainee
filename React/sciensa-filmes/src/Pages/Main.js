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
      <div class="gallery-container">
        {
          movies.map(movie => <MovieItem movie={movie} key={movie.id} />)
        }
      </div>
    </>
  );
}

export default Main;
