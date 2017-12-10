import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Row, Col} from 'materialize-css' 

import Side from '../Side/Side'
import View from '../View/View'

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="App-side col l3 m12 yellow accent-2 z-depth-4">
          <Side />
        </div>
        <div className="App-view col l9 m12">
          <View />
        </div>
      </div>
    );
  }
}

export default App;
