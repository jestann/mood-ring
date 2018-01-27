import React from 'react'
import Call from './call'
import Button from './button'
import './../css/main.css'

const Alerts = (props) => (
  <div className="main">
      <div className="box alerts">A list of alerts will be here.</div>
      <Button link="/alert" label="Trigger an alert here." />
      <Call {...props} />
  </div>
)

export default Alerts