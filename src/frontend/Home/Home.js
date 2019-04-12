import React, { Component } from 'react'
import Login from '../Login/Login';
import logo from '../../logo.png';
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
            <div className="col-lg-6 mt-5 shadow p-3 mb-5 bg-white rounded">
                <Login />
            </div>
            <div className="col-lg-6">
                <img src={logo} alt="logo" className='w-100 h-100'/>
            </div>  
          </div> 
      </div>
    )
  }
}
