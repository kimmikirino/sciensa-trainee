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