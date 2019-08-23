import React, { useState } from 'react'
import { Link } from "react-router-dom";
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
        <Link className="btn btn-secondary" to='/'>Cancelar</Link>
      </div>
      <span>{message}</span>
    </div>
  </div>)
}

export default MovieNew