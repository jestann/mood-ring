import React from 'react'
import { Link } from 'react-router-dom'
import heart from './../assets/heart-ring-doctor.jpg'
import './../css/main.css'

const Doctor = (props) => (
    <div className="main doctor">
      <div className="body">We let your doctor know you want to talk.</div>
      <img className="logo" src={heart} alt="your doctor loves you" />
      <Link to="/">Return to Dashboard</Link>
    </div>
)

export default Doctor