import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import AddRecord from './AddRecord'

class AddList extends Component {
  render () {
    console.log("AddList Props", this.props.artists[0])

    // let searchedAlbums = this.props.artists[0].results.map((album, i) => <AddRecord key={i} albums={album}/>)


    return (
      <div>
        <Row>
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
