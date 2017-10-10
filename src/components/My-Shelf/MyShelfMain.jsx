import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MyToolbar from './MyToolbar'
import MyRecordList from './MyRecordList'


class MyShelfMain extends Component {

  render () {
    return (
      <Container>
        <MyToolbar />
        
      </Container>
    )
  }
}
export default MyShelfMain;
