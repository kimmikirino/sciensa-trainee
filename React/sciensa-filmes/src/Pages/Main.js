import React from 'react'
import './main.css'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero'
import MovieItem from '../Components/MovieItem'
import { movie } from '../mock'

function Main() {
  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <div class="gallery-container">
        <MovieItem movie={movie} />
      </div>
    </>
  );
}

export default Main;
