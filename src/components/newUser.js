import React from 'react'
import Form from './form'
import heart from './../assets/heart-ring-doctor.jpg'

const NewUser = (props) => (
  <div className="main new-user">
    <Form 
      img={heart}
      heading="Tell us a little about yourself." 
      body="We need a little more information to set up your account."
      formboxes={[
        { label: "what's your name?", type: "text", placeholder: "your name" },
        { label: "age", type: "number", placeholder: "your age in years" },
        { label: "gender", type: "text", placeholder: "your gender identity" },
        { label: "height", type: "number", placeholder: "your height in inches" },
        { label: "weight", type: "number", placeholder: "your weight in pounds" },
        { label: "profession", type: "text", placeholder: "tell us what you do" },
        { label: "are you a smoker?", type: "text", placeholder: "yes or no" },
        { label: "are you a drinker?", type: "text", placeholder: "yes or no" },
        { label: "are you currently using beta blockers?", type: "text", placeholder: "yes or no" },
        { label: "what's your doctor's name?", type: "text", placeholder: "doctor's name" },
        { label: "and their number?", type: "password", placeholder: "doctor's phone" }
      ]}
      handleSubmit={()=>{}}
      link="/"
    />
  </div>
)

export default NewUser

//         handleSubmit={props.saveUser}
