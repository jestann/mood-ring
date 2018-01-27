import React from 'react'
import { Link } from 'react-router-dom'
import './../css/form.css'

const Button = (props) => {
  let label = props.link ? <Link className='button-link' to={props.link}>{props.label}</Link> : props.label
  return (
    <div className="button" onClick={props.onClick}>
      <div className='button-label' content={props.label}>{label}</div>
    </div>
  )
}

export default Button