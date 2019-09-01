import React, { useState, useEffect } from 'react'
import './main.css'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero'
import MovieItem from '../Components/MovieItem'
// import { movies } from '../mock'
import { getMovies } from '../API/Movies'


const Main = () => {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    getMovies().then(({ data }) => { // destructuring
      setMovie(data)
    }).catch((error) => {
      console.log(error)
    })
  }, []);

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
