import React from 'react'
import { Link } from 'react-router-dom'
import apple from './../assets/apple-heart.jpg'
import './../css/main.css'

const Alert = (props) => (
  <div className="alert main">
    <div className="title">Your heart rate's a little high.</div>
    <img className="main-img" src={apple} alt="an apple" />
    <div className="body">Want to save any notes about this?</div>
    <textarea 
      className="main-form" 
      placeholder="jot down a couple notes about what happened here" 
      onChange={props.handleNoteChange} 
    />
    <div className="button" onClick={props.closeAlert}><Link to="/">Submit</Link></div>
  </div>
)

export default Alert