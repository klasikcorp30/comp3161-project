import React, { Component } from 'react'
import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
            <legend>Sign In</legend>
          <label>Username</label>
          <input type="text" className='form-control'/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control"/>
        </div>
        <div className='form-group'>
            <button className='btn'>Login</button>
        </div>
      </div>
    )
  }
}
