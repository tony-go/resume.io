import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Row, Col} from 'materialize-css' 
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

import Side from '../Side/Side'
import Work from '../Work/Work'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App row">
          <div className="App-side col l3 m12 yellow accent-2 z-depth-4">
            <Side />
          </div>
          <div className="App-view col l9 m12">
            <Route path='/work' component={Work} />
            <Route path='/skills' component={Skills} />
            <Route path='/education' component={Education} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
