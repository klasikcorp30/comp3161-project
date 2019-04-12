import React, { Component } from 'react'
import './Login.css';
import {NavLink} from 'react-router-dom';
export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
            <legend className='text-center mt-3'>Sign In</legend>
          <label className="offset-3">Username</label>
          <input type="text" className='form-control w-50 mx-auto'/>
        </div>
        <div className="form-group">
          <label className="offset-3">Password</label>
          <input type="password" className="form-control w-50 mx-auto"/>
        </div>
        <div className='form-group text-center mt-3'>
            <button className='btn'>Login</button>
        </div>
       <span className="text-muted">Don't have an account?</span> <NavLink className="text-primary" to="/register" >Register</NavLink>
      </div>
    )
  }
}
