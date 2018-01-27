import React from 'react'
import { Link } from 'react-router-dom'
import ring from './../assets/ring.svg'
import './../css/main.css'

const Doctor = (props) => (
    <div className="main">
      <div className="body">We let your doctor know you want to talk.</div>
      <Link to="/">Return to Dashboard</Link>
    </div>
)

export default Doctor