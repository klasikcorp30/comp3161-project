import React, { Component } from 'react';
import './App.css'
import Home from './Home/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Shop from './Shop/Shop';
import Register from './Register/Register';
import Navbar from './Navbar/Navbar';
import Laptop_Details from './Shop/Laptops/Laptop/Laptop_Details/Laptop_Details';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/shop' component={Shop} exact/>
            <Route path='/register' component={Register} exact />
            <Route path='/shop/buy' component={Laptop_Details} exact/>
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
