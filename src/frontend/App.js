import React, { Component } from 'react';
import './App.css'
import Home from './Home/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Shop from './Shop/Shop';
import Navbar from './Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/shop' component={Shop} />
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
