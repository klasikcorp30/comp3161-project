import React, { Component } from 'react';
import './Register.css';
import Swal from 'sweetalert2';
let passwordValidator = require('password-validator');
let emailValidator = require('email-validator');
let $ = require('jquery');



export default class Register extends Component {
    state = {
        validateEmail: '',
        validatePassword: '',
        validUsername: '',
        disabled: true
    };

    submitHandler = (e) => {
        e.preventDefault();
        $.post('http://localhost/comp3161/api/register_user.php',{
            "firstname": $('#firstname').val(),
            "lastname": $('#lastname').val(),
            "username": $('#username').val(),
            "email": $('#email').val(),
            "phone": $('#phone').val(),
            "password": $('#password').val()

        });

        Swal.fire('Account Created','Your account has been created you can now login','success')
        window.location.href = '/';

    };

    passwordValidationHandler = (e) => {
        var validatorSchema = new passwordValidator();
        validatorSchema.min(4);
        validatorSchema.max(8);
        validatorSchema.digits();
        
        validatorSchema.validate(e.target.value) || e.target.value === ''? this.setState({validatePassword:'success', disabled:false}): this.setState({validatePassword: 'error', disabled: true});

  };

    emailValidatorHandler = (e) =>{
        emailValidator.validate(e.target.value) || e.target.value === '' ? this.setState({validateEmail:'success', disabled:false}): this.setState({validateEmail: 'error', disabled: true});
    };
    usernameValidatorHandler = (e) =>{
        var validatorSchema = new passwordValidator();
        validatorSchema.min(6);
        validatorSchema.max(8);
        validatorSchema.digits();
        validatorSchema.is().not().oneOf(['1234567', 'password']);

        validatorSchema.validate(e.target.value)  || e.target.value === ''? this.setState({validateUsername:'success', disabled: false}): this.setState({validateUsername: 'error', disabled: true});

    }
  render() {
    return (
      <div className={'container'}>
          <form method="post">
          <div className="form-group">
            <legend>Create New Account</legend>
            <label> First Name <span>Required</span></label>
            <input id="firstname" type="text" className="form-control" onChange={this.textValidationHandler}/>
          </div>
          <div className="form-group">
            <label> Last Name <span>Required</span></label>
            <input id={'lastname'} type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label> Username <span>Required</span></label>
            <input id='username' type="text" className={`form-control ${this.state.validateUsername}`} onChange={this.usernameValidatorHandler} />
          </div>
          <div className="form-group">
            <label> Email <span>Required</span></label>
            <input id='email' type="email" className={`form-control ${this.state.validateEmail}`} onChange={this.emailValidatorHandler} />
          </div>
          <div className="form-group">
              <label> Phone (Optional)</label>
              <input id='phone' type="phone" className="form-control" />
          </div>
          <div className="form-group">
            <label> Password <span>Required</span></label>
            <input id='password' type="password" className={`form-control ${this.state.validatePassword} `} onChange={this.passwordValidationHandler} />
            <small className='form-text text-muted'>must be between 4 and 8 digits and include at least one numeric digit.</small>
          </div>
          <div className="form-group text-right">
            <button onClick={this.submitHandler} className='btn' disabled={this.state.disabled}>Register</button>
          </div>
          </form>
      </div>
    )
  }
}
