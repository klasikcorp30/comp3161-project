import React, { Component } from 'react'
import './Shop.css'
import Laptops from './Laptops/Laptops';

export default class Shop extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row mt-3'>
            <div className='col-md-9 px-0'>
                <input type="search" name="search" className="form-control" placeholder="Search for products..." />    
            </div> 
            <div className='col-md-3 px-0'>
                <input type="text"  className='d-inline w-25 form-control input-button' value='Search' disabled/>
            </div>
            <Laptops />   
        </div>
      </div>
    )
  }
}
