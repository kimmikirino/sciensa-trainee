import React from 'react'
import filme from '../../assets/imgs/filme1.jpg'

const MovieDetail = props => {
    console.log(props)
    return (
        <div className="gallery-container">
            <img src={filme} alt="imagem filme" ></img>
        </div>
    )
}

export default MovieDetail