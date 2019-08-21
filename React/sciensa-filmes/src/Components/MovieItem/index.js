import React from 'react'
import { Link } from "react-router-dom";
import './movieItem.css'

//usar destructuring e template literals
const MovieItem = ({ movie }) => (
  <div>
    <img src={movie.image} alt={movie.title} />
    <div className="img-legend">
      <div className="text-legend">
        <h4>{movie.title}</h4>
        <h6>
          {movie.description}
        </h6>
      </div>
      <div className="more-details">
          <Link to={`/filme/${movie.id}`} >
          <span>+</span>
        </Link>
      </div>
    </div>
  </div>
)

export default MovieItem