import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import fire from './../tools/fire'
import auth from './../tools/auth'

import Alert from './alert'
import Home from './home'
import Login from './login'
import NewUser from './newUser'
import Timeline from './timeline'
import Alerts from './alerts'
import Doctor from './doctor'

import heart from './../assets/cardiogram.svg'
import './../css/main.css'


class App extends Component {
  constructor (props) {
    super(props)
    
    // set initial temps
    let temps = []
    let tempsRef = fire.database().ref("temperature")
    tempsRef.once('value', (snap) => {
      snap.forEach((temp) => {
        temps.push(temp.val())
      })
    })
    let saveTemps = temps
    let recent = saveTemps.pop()

    // set initial alerts
    let alerts = []
    let alertsRef = fire.database().ref("alerts")
    alertsRef.once('value', (snap) => {
      snap.forEach((alert) => {
        alerts.push(alert.val())
      })
    })

    this.state = { 
      temps: temps,
      recent: recent,
      alerts: alerts,
      loading: true,
      auth: false,
      new: true,
      alert: false,
      note: ''
    }
    this.login = this.login.bind(this)
    this.saveUser = this.saveUser.bind(this)
    this.closeAlert = this.closeAlert.bind(this)
    this.addNote = this.addNote.bind(this)
    this.handleNoteChange = this.handleNoteChange.bind(this)
  }

  componentWillMount() {
    // continuously update temps
    let tempsRef = fire.database().ref("temperature")
    tempsRef.on('child_added', (snap) => {
      let temps = this.state.temps
      temps.push(snap.val())
      this.setState({ temps: temps })
    })
    
    let temps = this.state.temps
    let recent = temps.pop()
    if (recent > 75) {
      this.setState({ alert: true })
    }
  }

  /* componentWillUnmount () {
    this.tempsRef.off()
  } */
  
  componentDidMount () {
    setTimeout(() => this.setState({ loading: false }), 3000)
  }
  
  closeAlert () {
    this.addNote(this.state.note, this.state.recent)
    this.setState({ alert: false })
  }
  
  handleNoteChange (event) {
    this.setState({ note: event.target.value })
  }
  
  addNote (note, heartRate) {
    fire.database().ref('alerts').push(note)
    // fire.database().ref('alerts').push({ timestamp: "now", note: note, heartrate: heartRate })
  }

  login () {
    // authenticate here
    this.setState({ auth: true })
    /* const { history } = this.props
    if (this.state.new) {
      history.push('/newUser')
    } else {
      this.setState({ auth: true })
      history.push('/')
    } */
  }
  
  saveUser () {
    // const { history } = this.props
    // this.setState({ auth: true })
    // history.push('/')
  }
  
  render (props) {
    // gets current heart rate
    let temps = this.state.temps
    let recent = temps.pop()
    
    if (!this.state.loading) {
      if (!this.state.auth) {
        return (
          <Login {...this.state} login={this.login} />
        )
      } else if (this.state.alert) {
        return (
          <div className="app">
            <Alert {...this.state} recent={recent} closeAlert={this.closeAlert} handleNoteChange={this.handleNoteChange} />
            <footer className="footer">Copyright 2018 She Hacks Boston.</footer>
          </div>
        )
      } else {
        return (
          <div className="app">
            <header className="welcome">Hello there, User!</header>
            <Switch>
              <Route exact path="/" render={() => ( <Home {...this.state} /> )} />
              <Route path="/alert" render={() => ( <Alert {...this.state} closeAlert={this.closeAlert} handleNoteChange={this.handleNoteChange} /> )}/>
              <Route path="/newUser" render={() => ( <NewUser {...this.state} saveUser={this.saveUser} /> )}/>
              <Route path="/timeline" render={() => ( <Timeline {...this.state} /> )} />
              <Route path="/alerts" render={() => ( <Alerts {...this.state} /> )} />
              <Route path="/doctor" render={() => ( <Doctor {...this.state} /> )} />
            </Switch>
            <footer className="footer">Copyright 2018 She Hacks Boston.</footer>
          </div>
        )
      }
    } else {
      return (
        <div className="splash app">
          <img className="logo" src={heart} alt="heart logo" />
          <header className="main-title">
            <h1>Mood Ring</h1>
            <div className="subtitle">a tracker for anxiety</div>
          </header>
        </div>
      )
    }
  }
}

export default App;