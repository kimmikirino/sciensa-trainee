import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../../assets/imgs/logo-sciensa-pb2.png'

import './header.css'

const Header = ({ className }) => (
  <div className={`fixed-menu ${className || ''}`}>
    <div className="logo-content">
      <Link to='/'><img src={Logo} alt="sciensa" /></Link>
    </div>
    <div className="menu-content"><Link to='/filme/novo'><button>Adicionar Filme</button></Link></div>
  </div>
)

export default Header