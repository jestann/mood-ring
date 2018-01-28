import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import fire from './../tools/fire'

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
    let tempsRef = fire.database().ref("temperature").limitToLast(10)
    tempsRef.once('value', (snap) => {
      snap.forEach((temp) => {
        temps.push(temp.val())
      })
    })

    this.state = { 
      temps: temps,
      loading: true,
      auth: false,
      new: true,
      alert: false
    }
    this.login = this.login.bind(this)
    this.saveUser = this.saveUser.bind(this)
    this.closeAlert = this.closeAlert.bind(this)
    this.addNote = this.addNote.bind(this)
  }

  // gets data from Firebase and syncs with state  
  componentWillMount() {
    // continuously update temps
    let tempsRef = fire.database().ref("temperature").limitToLast(100)
    tempsRef.on('child_added', (snap) => {
      let temp = snap.val()
      this.setState({ temps: [temp].concat(this.state.temps) })
    })
    // let lastIndex = this.state.temps.length - 1
    // this.setState({ currentRate: this.state.temps[lastIndex]})
  }

  /* componentWillUnmount () {
    this.tempsRef.off()
  } */
  
  componentDidMount () {
    setTimeout(() => this.setState({ loading: false }), 3000)
  }
  
  closeAlert () {
    this.setState({ alert: false })
  }
  
  addNote (note) {
    fire.database().ref('notes').push({ timestamp: "now", note: note })
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
      } else if (recent > 75) {
        return (
        <div className="app">
          <Alert {...this.state} recent={recent} />
          <footer className="footer">Copyright 2018 She Hacks Boston.</footer>
        </div>
        )
      } else {
        return (
          <div className="app">
            <header className="welcome">Hello there, User!</header>
            <Switch>
              <Route exact path="/" render={() => ( <Home {...this.state} /> )} />
              <Route path="/alert" render={() => ( <Alert {...this.state} closeAlert={this.closeAlert} addNote={this.addNote} /> )} />
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