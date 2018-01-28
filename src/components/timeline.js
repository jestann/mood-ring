import React from 'react'
import Chart from './chart'
import Call from './call'
import './../css/main.css'

const Timeline = (props) => (
  <div className="main">
      <div className="box timeline">
        <div className="body">Here's how you've been doing.</div>
        <Chart {...props} />
      </div>
      <Call {...props} />
  </div>
)

export default Timeline