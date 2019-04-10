import React, { Component } from 'react'
import './Laptops.css';
import  Laptop from './Laptop/Laptop'

export default class Laptops extends Component {
    state = {
        laptops: [
            {
                id: 0,
                brand: 'HP',
                os: 'Windows',
                isUsed: true
            
            },
            
            {
                id: 1,
                brand: 'Acer',
                os: 'Linux',
                isUsed: false
            
            },
            {
                id: 2,
                brand: 'Dell',
                os: 'Windows',
                isUsed: true
            
            },
            {
              id: 3,
              brand: 'Lenovo',
              os: 'Windows',
              isUsed: true
          
          }
            
        ]
    }
  render() {
    return (
      <div className='container laptops-container'>
      <legend className='display-4'>Laptops</legend>
      <hr />
        <div className='row'>
         {this.state.laptops.map((laptop) => {
           return <Laptop key={laptop.id} name={laptop.brand} />
         })}
        </div>
      </div>
    )
  }
}
