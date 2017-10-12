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
import MyRecordMain from './components/My-Record/MyRecordMain'
import OptimizeMain from './components/Optimize-Record/OptimizeMain'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />

            <Route exact path="/" component={MyShelfMain}/>
            <Route exact path="/addRecord" component={AddMain}/>
            <Route exact path="/album/:id" component={MyRecordMain}/>
            <Route exact path="/album/:id/edit" component={OptimizeMain}/>
          </div>
        </Router>
      </div>
    );
  }
}



export default connect(null, null)(App);
