import React from 'react'
import './labelInput.css'

const LabelInput = ({ label, ...props}) => {
  return (
    <div className="box-label">
      <label>{label}: </label>
      <input className="input-text" {...props} ></input>
    </div>
  )
}

export default LabelInput