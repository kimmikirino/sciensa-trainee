import React from 'react'
import { withRouter } from 'react-router-dom';
import Button from "../Button"
import './movieDetail.css'

const MovieDetail = ({ movie, handleEdit, history }) => {

  const deleteFilm = () => {
    alert('Filme excluído com sucesso')
    history.push('/')
  }
  
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
        <p><b>Ano de estréia: </b>{movie.releaseYear}</p>
        <p><b>Gêneros: </b>{movie.genres.map(genre => (
          <span key={genre.id}> {genre.description} /</span>
        ))}</p>
        <div className="btn-box">
          <Button className="btn btn-primary" onClick={handleEdit}>Editar</Button>
          <Button className="btn btn-secondary" onClick={deleteFilm}>Excluir</Button>
        </div>
      </div>
    </div>
  ) : <div>Filme selecionado não encontrado</div>
}

export default withRouter(MovieDetail)