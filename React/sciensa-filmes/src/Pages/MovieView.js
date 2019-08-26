import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero'
import MovieDetail from '../Components/MovieDetail'
import MovieForm from '../Components/MovieForm'
import { movies } from '../mock'

const MovieView = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }
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
          <MovieDetail movie={movie} handleEdit={handleEdit} />
      }
    </div>
  )
}

export default MovieView