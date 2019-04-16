import React, { Component } from 'react'
import './Login.css';
import {NavLink} from 'react-router-dom';
let $ = require('jquery');
let Swal = require('sweetalert2');
export default class Login extends Component {
    state = {
        isLoggedIn: false
    }

    loginHandler = (e) => {
        e.preventDefault();
            // if($("#username").val() === "" || $("#password").val() === ""){
            //     Swal.fire('Fields are empty','Please ensure fields are not empty','error')
            // }
            $.post('http://localhost/comp3161/api/login.php',{
                "username": $('#username').val(),
                "password": $('#password').val()
            }).then((response) => {
                if(response !== 'true'){
                    Swal.fire('Incorrect credentials','Your username/password contains an error','error')
                }
                else{
                    Swal.fire(`Welcome ${$('#username').val()}`,'','success')
                }
            })

    };

  render() {

    return (
      <div>
        <div className="form-group">
            <legend className="text-center mt-3">Sign In</legend>
          <label className="offset-3">Username</label>
          <input id="username" type="text" className='form-control w-50 mx-auto'/>
        </div>
        <div className="form-group">
          <label className="offset-3">Password</label>
          <input id='password' type="password" className="form-control w-50 mx-auto"/>
        </div>
        <div className='form-group text-center mt-3'>
            <button onClick={this.loginHandler} className='btn'>Login</button>
        </div>
       <span className="text-muted">Don't have an account?</span> <NavLink className="text-primary" to="/register" >Register</NavLink>
      </div>
    )
  }
}
