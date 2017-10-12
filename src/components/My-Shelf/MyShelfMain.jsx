import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MyRecordList from './MyRecordList'

class MyShelfMain extends Component {

  render () {
    return (
      <Container>
        <MyRecordList />
      </Container>
    )
  }
}
export default MyShelfMain;
