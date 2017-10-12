import React, { Component } from 'react';
import { Container } from 'reactstrap';
import RecordToolbar from './RecordToolbar'
import MyRecordBody from './MyRecordBody'


class MyRecordMain extends Component {

  render () {
    return (
      <Container>
        <RecordToolbar id={this.props.match.params.id}/>
        <MyRecordBody id={this.props.match.params.id}/>
      </Container>
    )
  }
}
export default MyRecordMain;
