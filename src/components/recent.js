import React from 'react'
import './../css/main.css'

const Recent = (props) => {
  let temps = props.temps
  let recent = temps.pop()
  return (
    <section className="recent box">
      <h3 className="title">Current Rate</h3>
      <div className="heart-rate">{recent}</div>
    </section>
  )
}

export default Recent