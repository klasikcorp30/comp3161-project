import React, { Component } from 'react'
import './Laptops.css';
import  Laptop from './Laptop/Laptop'

export default class Laptops extends Component {
  render() {
    return (
      <div className='container laptops-container'>
      <legend className='display-4 text-center'>Laptops</legend>
      <hr />
        <div className='row'>
         {this.props.laptops.map((laptop) => {
           return <Laptop key={laptop.prod_id} name={laptop.prod_brand} model={laptop.prod_model} />
         })}
        </div>
      </div>
    )
  }
}
