import React from 'react'
import './button.css'

const Button = ({ children, ...props }) => {
  return (
    <button type="button" {...props} >{children}</button>
  )
}

export default Button