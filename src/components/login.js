import React from 'react'
import Form from './form'
import good from './../assets/good-day.jpg'
import './../css/main.css'

const Login = (props) => (
  <div className="app login">
    <Form 
      img={good}
      heading="Please Log In to Mood Ring." 
      body="Please log in with your Google account to continue."
      formboxes={[
        { label: "email", type: "text", placeholder: "" },
        { label: "password", type: "password", placeholder: "" }
      ]}
      handleSubmit={props.login}
      link="/newUser"
    />
    <footer className="footer">Copyright 2018 She Hacks Boston.</footer>
  </div>
)

export default Login

//         handleSubmit={props.login}
