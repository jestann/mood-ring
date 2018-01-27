import React from 'react'
import { Link } from 'react-router-dom'
import ring from './../assets/ring.svg'
import './../css/main.css'

const Call = (props) => (
    <div className="main">
      <Link to="/doctor"><img className="logo" src={ring} alt="ring logo"/></Link>
      <div className="body">Remember you can always click on the ring above to call your doctor.</div>
    </div>
)

export default Call