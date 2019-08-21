import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../../assets/imgs/logo-sciensa-pb2.png'

import './header.css'

const Header = () => (
  <div className="fixed-menu">
    <div className="logo-content">
      <Link to='/'><img src={Logo} alt="sciensa" /></Link>
    </div>
    <div className="menu-content"><button>Adicionar Filme</button></div>
  </div>
)

export default Header