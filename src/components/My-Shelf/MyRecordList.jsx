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
    if(this.props.artists[0]){
      let myAlbums = this.props.artists[0].map((album, i) => <RecordFromList key={i} album={album}/>)
      return(
        <div>
          <Row>
            {myAlbums}
          </Row>
        </div>
      )
    } else {
      return null
    }
  }
}

function mapStateToProps(state, props) {
  return {
    artists: state.artists,
    sortAlbumsBy: state.sortAlbumsBy
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMyAlbums: bindActionCreators(getMyAlbums, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyRecordList);
