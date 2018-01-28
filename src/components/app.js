import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import * as firebase from 'firebase'
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
    this.state = { 
      temps: [],
      recentRate: 0,
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
    let tempsRef = firebase.database().ref("temps")
    this.bindAsArray(this.firebaseRef, "temps")
    /* this.firebaseRef.on("child_added", function(dataSnapshot) {
    this.items.push(dataSnapshot.val())
    this.setState({
      items: this.items
    })
  }.bind(this)) */
  }
  
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <ul>
          { /* Render the list of messages */
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </form>
    );
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