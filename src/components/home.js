import React from 'react'
import { Link } from 'react-router-dom'
import Graph from './graph'
import Call from './call'
import './../css/main.css'

const Home = (props) => (
  <div className="main">
    <section className="box">
      <h3 className="title">Most Recent</h3>
      <p className="body">Most recent heart rate here.</p>
    </section>
    <Graph {...props} />
    <section className="box">
      <h3 className="title">Alerts</h3>
      <div className="body" to="/alerts">Click on an alert here to see it in detail.</div>
      <div className="body"><Link to="/alerts">An Alert</Link></div>
    </section>
    <Call {...props} />
  </div>
)

export default Home;