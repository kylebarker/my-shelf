import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

class RecordFromList extends Component {
  render () {
    console.log("RECORD FROM LIST PROPS", this.props)
    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps(state, props){
  return{
    artists: state.artists
  }
}

export default connect(mapStateToProps, null)(RecordFromList);
