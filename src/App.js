import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import NavBar from './components/NavBar'
import AddMain from './components/Add-Record/AddMain'
import MyShelfMain from './components/My-Shelf/MyShelfMain'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Router>
          <div>

            <Route exact path="/" component={MyShelfMain}/>
            <Route path="/addRecord" component={AddMain}/>
          </div>
        </Router>
      </div>
    );
  }
}



export default connect(null, null)(App);
