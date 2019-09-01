import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero'
import MovieDetail from '../Components/MovieDetail'
import MovieForm from '../Components/MovieForm'
import { getMovieById } from '../API/Movies'
// import { movies } from '../mock'

const MovieView = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    //Edição desabilitada
    // setIsEditing(!isEditing)
  }

  useEffect(() => {
    getMovieById(match.params.id).then(({ data }) => {
      setMovie(data)
    })
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