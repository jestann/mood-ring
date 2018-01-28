import React from 'react'
import Call from './call'
import './../css/main.css'

const Timeline = (props) => (
  <div className="main">
      <div className="box timeline">
        <div className="body">More graph options and details will be here.</div>
        <div className="box body">{props.temps.slice(0,5)}</div>
      </div>
      <Call {...props} />
  </div>
)

export default Timeline