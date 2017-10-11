import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row } from 'reactstrap';
import { getMyAlbums } from '../../actions/artists'
import RecordFromList from './RecordFromList'

class MyRecordList extends Component {

  componentDidMount() {
    this.props.getMyAlbums();
  }

  render () {
    console.log("MY RECORD LIST PROPS", this.props)
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

function mapDispatchToProps(dispatch) {
  return {
    getMyAlbums: bindActionCreators(getMyAlbums, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyRecordList);
