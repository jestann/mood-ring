import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import * as firebase from 'firebase'
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
      temps: [],
      recentRate: 0
      loading: true,
      auth: false,
      new: true,
      alert: false
    }
    this.login = this.login.bind(this)
    this.saveUser = this.saveUser.bind(this)
    this.closeAlert = this.closeAlert.bind(this)
    this.setFirebaseNote = this.setFirebaseNote.bind(this)
    this.getFirebaseTemps = this.getFirebaseTemps.bind(this)
  }
  
  componentWillMount() {
    this.firebaseRef = firebase.database().ref("temps")
    this.bindAsArray(this.firebaseRef, "temps")
    /* this.firebaseRef.on("child_added", function(dataSnapshot) {
    this.items.push(dataSnapshot.val())
    this.setState({
      items: this.items
    })
  }.bind(this)) */
  }

  componentWillUnmount () {
    this.firebaseRef.off()
  }
  
  componentDidMount () {
    setTimeout(() => this.setState({ loading: false }), 3000)
  }
  
  closeAlert () {
    this.setState({ alert: false })
  }
  
  async setFirebaseNote (note) {
    await this.firebaseRef.push({ note: note })
  }
  
  async getFirebaseTemps () {
    let // call firebase API
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
          <Login {...this.state} login={this.login} />
        )
      } else {
        return (
          <div className="app">
            <header className="welcome">Hello there, User!</header>
            <Switch>
              <Route exact path="/" render={() => <Home {...this.state} />} />
              <Route path="/alert" render={() => <Alert {...this.state} closeAlert={this.closeAlert} />} />
              <Route path="/newUser" render={() => <NewUser {...this.state} saveUser={this.saveUser} />} />
              <Route path="/timeline" render={() => <Timeline {...this.state} />} />
              <Route path="/alerts" render={() => <Alerts {...this.state} />} />
              <Route path="/doctor" render={() => <Doctor {...this.state} />} />
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

/*

// AUth add later

// const authUI = new firebaseui.auth.AuthUI(firebase.auth())

  componentDidMount: function() {
    var self = this;
    var uiConfig = {
      'callbacks': {
        'signInSuccess': function(user) {
          if (self.props.onSignIn) {
            self.props.onSignIn(user);
          }
          return false;
        }
      },
      'signInOptions': [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    authUi.start('#firebaseui-auth', uiConfig);
  },
  componentWillUnmount: function() {
    authUi.reset();
  },
  render: function() {
    return (
      <div id="firebaseui-auth"></div>
    );
  }
});

*/