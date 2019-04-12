import React, { Component } from 'react'
import './Laptop.css';
import { NavLink } from 'react-router-dom';

export default class Laptop extends Component {
  render() {
    return (
    <div className='col-md-3'>
        <div class="card h-100">
        <img src='http://loremflickr.com/g/100/100/car' alt='laptop'/>
          <div class="card-body">
            <h4 class="card-title text-center">{this.props.name}</h4>   
            <NavLink className="btn w-100" to="/shop/buy">View</NavLink>
          </div>
        </div>
    </div>
    )
  }
}
