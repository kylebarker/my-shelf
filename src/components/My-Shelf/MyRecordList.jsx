import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import RecordFromList from './RecordFromList'

class AddList extends Component {
  render () {
    console.log("AddList Props", this.props)


    return (
      <div>
        <Row>
          <RecordFromList />
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    artists: state.artists
  }
}

export default connect(mapStateToProps, null) (AddList);
