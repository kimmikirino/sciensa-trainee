import React from 'react'
import { withRouter } from 'react-router-dom';
import Button from "../Button"
import './movieDetail.css'

const MovieDetail = ({ movie, handleEdit, history }) => {

  const deleteFilm = () => {
    alert('Pet excluído com sucesso')
    history.push('/')
  }
  
  return movie ? (
    <div className="container">
      <img className="movie-img" src={movie.photo} alt={movie.name} ></img>
      <div className="movie-box">
        <h2 className="box-title">{movie.name}</h2>
        <p>{movie.description}</p>
        <p><b>Raça: </b>{movie.breed}</p>
        <p><b>Onde o Pet está? </b>{movie.location}</p>
        <p><b>Tipo de Pet: </b>{movie.pet_type}</p>
        <p><b>Tamanho: </b>{movie.size}</p>
        <p><b>Sexo: </b>{movie.gender}</p>
        <p><b>Status: </b>{movie.status}</p>
        <p><b>Categoria: </b>{movie.category}</p>
        <p><b>Contato: </b>Nome: {movie.contact.name} e email: {movie.contact.email}</p>
        <div className="btn-box">
          <Button className="btn btn-primary" onClick={handleEdit}>Editar</Button>
          <Button className="btn btn-secondary" onClick={deleteFilm}>Excluir</Button>
        </div>
      </div>
    </div>
  ) : <div>Pet selecionado não encontrado</div>
}

export default withRouter(MovieDetail)