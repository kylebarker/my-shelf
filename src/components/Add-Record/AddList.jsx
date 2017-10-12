import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import AddRecord from './AddRecord'

class AddList extends Component {

  render () {
    if(this.props.artists[this.props.artists.length-1]){
      console.log('addlist props', this.props.artists[this.props.artists.length-1]);
      let {results} = this.props.artists[this.props.artists.length-1]
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
    artists: state.artists
  }
}

export default connect(mapStateToProps, null) (AddList);
