import React from 'react'
import './movieItem.css'

//usar destructuring e template literals
const MovieItem = ({ movie }) => (
  <div>
    <img src={movie.image} alt={movie.title} />
    <div class="img-legend">
      <div class="text-legend">
        <h4>{ movie.title }</h4>
        <h6>
          { `Dirigido por: ${movie.director}` }
          </h6>
      </div>
      <div class="text-more-detail">
        <button><span>+</span></button>
      </div>
    </div>
  </div>
)

export default MovieItem