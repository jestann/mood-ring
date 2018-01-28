import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDQe42tpRbhXpv8FmVTCEZi7GtR0QAKHcA",
  authDomain: "mood-ring-she-hacks.firebaseapp.com",
  databaseURL: "https://mood-ring-she-hacks.firebaseio.com",
  projectId: "mood-ring-she-hacks",
  storageBucket: "mood-ring-she-hacks.appspot.com",
  messagingSenderId: "1001938512612"
}
var fire = firebase.initializeApp(config)

export default fire