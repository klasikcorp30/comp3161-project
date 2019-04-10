import React, { Component } from 'react';
import './Register.css';
var passwordValidator = require('password-validator');
var emailValidator = require('email-validator');


export default class Register extends Component {
    state = {
        validateEmail: '',
        validatePassword: '',
        validUsername: ''
    };

    passwordValidationHandler = (e) => {
        var validatorSchema = new passwordValidator();
        validatorSchema.min(4);
        validatorSchema.max(8);
        validatorSchema.digits();
        
        validatorSchema.validate(e.target.value) ? this.setState({validatePassword:'success'}): this.setState({validatePassword: 'error'}); 

  };

    emailValidatorHandler = (e) =>{
        emailValidator.validate(e.target.value) ? this.setState({validateEmail:'success'}): this.setState({validateEmail: 'error'});
    }
    usernameValidatorHandler = (e) =>{
        var validatorSchema = new passwordValidator();
        validatorSchema.min(6);
        validatorSchema.max(8);
        validatorSchema.digits();
        validatorSchema.is().not().oneOf(['Passw0rd222', 'kellyoubre23']);

        validatorSchema.validate(e.target.value) ? this.setState({validateUsername:'success'}): this.setState({validateUsername: 'error'});

    }
  render() {
    return (
      <div>
          <div className="form-group">
            <legend>Create New Account</legend>
            <label> First Name <span>Required</span></label>
            <input type="text" className="form-control" onChange={this.textValidationHandler}/> 
          </div>
          <div className="form-group">
            <label> Last Name <span>Required</span></label>
            <input type="text" className="form-control" /> 
          </div>
          <div className="form-group">
            <label> Username <span>Required</span></label>
            <input type="text" className={`form-control ${this.state.validateUsername}`} onChange={this.usernameValidatorHandler} /> 
          </div>
          <div className="form-group">
            <label> Email <span>Required</span></label>
            <input type="email" className={`form-control ${this.state.validateEmail}`} onChange={this.emailValidatorHandler} /> 
          </div>
          <div className="form-group">
            <label> Password <span>Required</span></label>
            <input type="password" className={`form-control ${this.state.validatePassword}`} onChange={this.passwordValidationHandler} /> 
            <small className='form-text text-muted'>must be between 4 and 8 digits and include at least one numeric digit.</small>
          </div>
          <div className="form-group text-right">
            <button className='btn'>Register</button>
          </div>
      </div>
    )
  }
}
