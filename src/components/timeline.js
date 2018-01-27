import React from 'react'
import Call from './call'
import './../css/main.css'

const Timeline = (props) => (
  <div className="main">
      <div className="box timeline">More graph options and details will be here.</div>
      <Call {...props} />
  </div>
)

export default Timeline