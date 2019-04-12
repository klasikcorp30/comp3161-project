import React, { Component } from 'react'
import './Laptop_Details.css';
import sample from './img/sample.jpg';

export default class Laptop_Details extends Component {
  render() {
    return (
      <div className='container mt-5'>
          <div className="row">
            <div className='col-md-6'>
            <img src={sample} alt='img' className='w-100'/>
            </div>
            <div className='col-md-6'>
              <div className="shadow p-3 mb-5 bg-white rounded">
                <h1>Apple Mac Book Pro</h1>
                <i className="fab fa-star "></i>
                  <hr />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis hic cupiditate veritatis tempore repellendus minima necessitatibus aut. Amet alias rem quibusdam voluptate quaerat maiores nam reiciendis ut sint velit?</p>
                  <ul>
                    <li>MacOS</li>
                    <li>1TB</li>
                    <li>i7</li>
                    <li>6 hours battery life</li>
                  </ul>
                  <h2 className="price-tag">$2099.99</h2>
                  <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et architecto sint cum impedit mollitia similique explicabo ratione possimus ut magni repellat quibusdam dignissimos nisi, dolores facilis! Perferendis, doloribus dolor.</p>
                  <button className='btn'>Add to Cart</button>
                </div>
            </div>
          </div>
      </div>
    )
  }
}
