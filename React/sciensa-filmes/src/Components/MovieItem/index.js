import React from 'react'
import filme1 from '../../assets/imgs/filme1.jpg'
import './movieItem.css'

const MovieItem = () => (
  <div>
    <img src={filme1} alt="capa filme1" />
    <div class="img-legend">
      <div class="text-legend">
        <h4>Nome Filme</h4>
        <h6>
          Breve descrição aqui asd asd as das da d as da sdas d asd as das
          asd a sd as dasd asd as d as da sd as da d as da sd as das d asd
          adasdasdas das da sd asd as da sd asdasdasd asdasd asdas dasda
            </h6>
      </div>
      <div class="text-more-detail">
        <button><span>+</span></button>
      </div>
    </div>
  </div>
)

export default MovieItem