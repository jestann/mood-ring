import React from 'react'
import './../css/main.css'

const Recent = (props) => (
    <section className="recent box">
      <h3 className="title">Current Rate</h3>
      <div className="heart-rate">{props.recentRate}</div>
    </section>
)

export default Recent