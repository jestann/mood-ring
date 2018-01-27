import React from 'react'
import Button from './button'
import chart from './../assets/chart.png'
import './../css/main.css'

const Graph = (props) => (
  <section className="box">
      <h3 className="title">Graphs</h3>
      <p className="body">This is your heart rate over the past few days.</p>
      <img className="graph" src={chart} alt="a chart rendered in R" />
      <Button cssLabel="submit" label="More Graphs" link="/timeline" />
  </section>
)

export default Graph