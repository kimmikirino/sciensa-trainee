import React from 'react'
import Logo from '../../assets/imgs/logo-sciensa-pb2.png'

import './header.css'

const Header = () => (
  <div className="fixed-menu">
    <div className="logo-content"><img src={Logo} alt="sciensa" /></div>
    <div className="menu-content"><button>Adicionar Filme</button></div>
  </div>
)

export default Header