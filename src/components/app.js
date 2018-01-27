import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Firebase from 'firebase'
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
    this.state = { 
      loading: true,
      auth: false,
      new: true,
      alert: true
    }
    this.login = this.login.bind(this)
    this.saveUser = this.saveUser.bind(this)
    this.closeAlert = this.closeAlert.bind(this)
  }
  
  componentDidMount () {
    setTimeout(() => this.setState({ loading: false }), 4000)
  }
  
  closeAlert () {
    this.setState({ alert: false })
  }
  
  firebaseConfig () {
    // call firebase API
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
    if (!this.state.loading) {
      if (!this.state.auth) {
        return (
          <Login {...this.props} login={this.login} />
        )
      } else {
        return (
          <div className="app">
            <header className="welcome">Hello there, User!</header>
            <Switch>
              <Route exact path="/" render={() => <Home {...this.props} />} />
              <Route path="/alert" render={() => <Alert {...this.props} closeAlert={this.closeAlert} />} />
              <Route path="/newUser" render={() => <NewUser {...this.props} saveUser={this.saveUser} />} />
              <Route path="/timeline" render={() => <Timeline {...this.props} />} />
              <Route path="/alerts" render={() => <Alerts {...this.props} />} />
              <Route path="/doctor" render={() => <Doctor {...this.props} />} />
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
            <h1>Mood Ring Anxiety Tracker</h1>
          </header>
        </div>
      )
    }
  }
}

export default App;
