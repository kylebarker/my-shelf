import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AddToolbar from './AddToolbar'
import AddList from './AddList'

class AddMain extends Component {
  render () {
    return (
      <Container>
        <AddToolbar/>
        <AddList />
      </Container>
    )
  }
}
export default AddMain;
