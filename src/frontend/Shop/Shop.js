import React, { Component } from 'react'
import './Shop.css'
import Laptops from './Laptops/Laptops';
let $ = require('jquery');


export default class Shop extends Component {
    state = {
        radioVal: '',
        isChecked: false,
        laptops: []
    }

    changeSearchTypeHandler = (e) => {
        this.setState({radioVal: e.target.value, isChecked: !this.state.isChecked})
    }

    onSearchHandler = (e) => {
        $.post('http://localhost/comp3161/api/get_laptops.php',{'name': e.target.value, 'type': this.state.radioVal})
            .then((response) => {
                let retrievedLaptops = JSON.parse(response);
                let laptopArray =[];
                retrievedLaptops.map((item) => {
                    laptopArray.push(item);
                    return true;

                });
                this.setState({laptops: retrievedLaptops});
                console.log(retrievedLaptops)
            })
            .catch((err) =>{
                console.log(err)
            })
    }




  render() {
    return (
      <div className='container'>
        <div className='row mt-3'>
            <div className='col-md-9 px-0'>
                <input onChange={this.onSearchHandler}  type="search" name="search" className="form-control" placeholder="Search for Laptop" />
            </div>
            <div className='col-md-3 px-0'>
                <input onClick={this.onSearchHandler} type="text"  className='d-inline w-25 form-control input-button' value='Search' disabled/>
            </div>
            <div className='form-group mt-3'>
                <p className="lead">Search by Category</p>
            </div>
        </div>
          <div className="form-check">
              <input onChange={this.changeSearchTypeHandler} checked={this.state.isCehcked} className="form-check-input" type="radio" name="search-option" id="exampleRadios1" value="brand"
                      />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                      Brand
                  </label>
          </div>
          <div className="form-check">
              <input onChange={this.changeSearchTypeHandler} checked={this.state.isCehcked} className="form-check-input" type="radio" name="search-option" id="model" value="model"/>
                  <label className="form-check-label" htmlFor="model">
                      Model
                  </label>
          </div>
          <div className="form-check">
              <input onChange={this.changeSearchTypeHandler} checked={this.state.isCehcked} className="form-check-input" type="radio" name="search-option" id="storage" value="storage"/>
              <label className="form-check-label" htmlFor="storage">
                  Storage
              </label>
          </div>
          <div className="form-check">
              <input onChange={this.changeSearchTypeHandler} checked={this.state.isCehcked} className="form-check-input" type="radio" name="search-option" id="ram" value="ram"/>
              <label className="form-check-label" htmlFor="ram">
                  RAM
              </label>
          </div>
          <div className="form-check">
              <input onChange={this.changeSearchTypeHandler} checked={this.state.isCehcked} className="form-check-input" type="radio" name="search-option" id="price" value="price"/>
              <label className="form-check-label" htmlFor="price">
                  Price
              </label>
          </div>
          <Laptops laptops={this.state.laptops} />
      </div>
    )
  }
}
