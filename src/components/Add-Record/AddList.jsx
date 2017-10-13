import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import AddRecord from './AddRecord'

class AddList extends Component {

  render () {
    console.log('search', this.props)
    if(this.props.search[0]){
      let results = this.props.search
      if(results){
        let searchedAlbums = results.map((album, i) => <AddRecord key={i} albums={album}/>)
        return (
          <div>
            <Row>
              {searchedAlbums}
            </Row>
          </div>
        )
      } else {
        return null
      }
    } else {
      return null
    }
  }
}

function mapStateToProps(state, props) {
  return {
    artists: state.artists,
    search: state.search
  }
}

export default connect(mapStateToProps, null) (AddList);
