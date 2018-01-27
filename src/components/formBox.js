import React, { Component } from 'react'
import './../css/form.css'

class FormBox extends Component {
  constructor(props) {
    super(props)
    // this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange (event) {
    // this.setState({ value: event.target.value })
    this.props.onChange({ label: this.props.label, value: event.target.value })
  }
  
  render () {
    let cssLabel = 'input ' + this.props.type
    // does it need an HTML input or an HTML textarea?
    let inputBox = ''
    if (this.props.type === "textarea") {
      inputBox = <textarea className={cssLabel} placeholder={this.props.placeholder} onChange={this.handleChange} />
    } else {
      inputBox = <input className={cssLabel} type={this.props.type} placeholder={this.props.placeholder} onChange={this.handleChange} />
    }
    
    return (
      <div className='form-box' onSubmit={this.handleSubmit}>
        <div className='label'>{this.props.label}</div>
        {inputBox}
      </div>
    )
  }
}

export default FormBox