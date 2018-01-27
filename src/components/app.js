import React, { Component } from 'react';
import heart from './../assets/cardiogram.svg'
import ring from './../assets/ring.svg'
import './../css/main.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { loading: true }
  }
  
  componentDidMount () {
    console.log("component mounted")
    setTimeout(console.log("still timing"), 1000)
    setTimeout(this.endSplash(), 5000)
  }
  
  endSplash () {
    console.log("ending the loading")
    this.setState({ loading: false })
  }
  
  render (props) {
    console.log("rendering")
    if (!this.state.loading) {
      return (
        <div className="app">
          <section className="box">
            <h3 className="title">Graphs</h3>
            <p className="body">A graph will be right here.</p>
          </section>
          <section className="box">
            <h3 className="title">Alerts</h3>
            <p className="body">Alerts could be here</p>
          </section>
          <div className="title">And... that's it.</div>
          <img className="logo" src={ring} />
        </div>
      )
    } else {
      return (
        <div className="app">
          <img className="logo" src={heart} />
          <header className="title main-title">
            <h1>Anxiety Tracker</h1>
          </header>
        </div>
      )
    }
  }
}

export default App;
