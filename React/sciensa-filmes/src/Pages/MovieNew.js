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