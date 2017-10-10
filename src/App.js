import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Button, Row, Col } from 'reactstrap';
import NavBar from './components/NavBar'
import AddMain from './components/Add-Record/AddMain'
import MyShelfMain from './components/My-Shelf/MyShelfMain'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/*<MyShelfMain /> */}
        <AddMain />
      </div>
    );
  }
}

export default connect(null, null)(App);
