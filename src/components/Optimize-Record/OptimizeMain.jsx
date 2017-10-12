import React, { Component } from 'react';
import OptimizeForm from './OptimizeForm';
import { Container } from 'reactstrap';

class OptimizeMain extends Component {

  render () {
    return (
      <Container>
        <OptimizeForm id={this.props.match.params.id}/>
      </Container>
    )
  }
}
export default OptimizeMain;
