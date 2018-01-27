import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import FormBox from './formBox'
// import Button from './button'
import './../css/form.css'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = { values: [] }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  // handles continuously updating the entered data
  handleInputChange (eventObj) {
    let valuesArray = this.state.values.filter((value) => value.label !== eventObj.label )
    valuesArray.push({ label: eventObj.label, value: eventObj.value })
    this.setState({ submitted: false, values: valuesArray })
  }
  
  // sends a labels array and a values array up the parent handleSubmit function
  async handleSubmit () {
    this.setState({ submitted: true })
    let labelsArray = this.state.values.map((valueObj) => valueObj.label)
    let valuesArray = this.state.values.map((valueObj) => valueObj.value)
    // await this.props.handleSubmit(labelsArray, valuesArray)
  }

  render (props) {
    // displays the inputs for entering data
    let formboxes = this.props.formboxes.map((formbox, i) => (
      <FormBox label={formbox.label} type={formbox.type} placeholder={formbox.placeholder} key={i} onChange={this.handleInputChange} />
    ))
    
    // displays the submitted data (for development error checking)
    /* let returnFormHeader = this.state.submitted ? <div className='return-form-header'>The following values were submitted.</div> : ''
    let returnFormData = this.state.values.map((obj, i) => (
      <div className='return-form-item' key={i}>{obj.label}: {obj.value}</div>
    ))
    let returnForm = this.state.submitted ? returnFormData : ''
    */

    return (
      <div className='form'>
        <Row>
          <Col lg="7" md="6" sm="12" xs="12">
            <div className='heading'>{this.props.heading}</div>
            <div className='body'>{this.props.body}</div>
            <div className='formboxes'>
              {formboxes}
            </div>
            <div className="button" onClick={this.props.handleSubmit}><Link to={this.props.link}>Submit</Link></div>
          </Col>
          <Col lg="5" md="6" sm="8" xs="12">
            <img className='main-img' src={this.props.img} alt="heart" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Form

/*
            <Button label="Submit" onClick={this.handleSubmit} link={this.props.link} />
            <div className='return-form'>
              {returnFormHeader}
              {returnForm}
            </div>
*/