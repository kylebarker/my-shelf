import React, { Component } from 'react';
import { Container } from 'reactstrap';
import RecordToolbar from './RecordToolbar'
import MyRecordBody from './MyRecordBody'


class MyRecordMain extends Component {

  render () {
    return (
      <Container>
        <RecordToolbar />
        <MyRecordBody />
      </Container>
    )
  }
}
export default MyRecordMain;
