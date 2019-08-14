import React from 'react'
import Logo from '../../assets/imgs/logo-sciensa-pb2.png'

import './header.css'

const Header = () => (
  <div class="fixed-menu">
    <div class="logo-content"><img src={Logo} /></div>
    <div class="menu-content"><button>Adicionar Filme</button></div>
  </div>
)

export default Header