import React from 'react'
import Button from './button'
import Chart from './chart'
import './../css/main.css'

const Graph = (props) => (
  <section className="box">
    <Chart {...props} />
    <Button cssLabel="submit" label="More Graphs" link="/timeline" />
  </section>
)

export default Graph