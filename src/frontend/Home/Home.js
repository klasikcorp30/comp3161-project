import React, { Component } from 'react'
import Login from '../Login/Login';
import Register from '../Register/Register';
import axios from 'axios';
export default class Home extends Component {
  
  getDataHandler = () => {
    axios.get('http://localhost/comp3161/api/get_laptops.php')
    .then((response) => {
      var data = {...response.data};
      console.log(data)
    })
  }
  
  render() {
    return (
      <div className='container'>
        <div className="row">
            <div className="col-lg-6">
                <Login />
                <button onClick={this.getDataHandler} className="btn btn-primary">Test</button>
            </div>
            <div className="col-lg-6">
                <Register />
            </div>  
        </div> 
      </div>
    )
  }
}
