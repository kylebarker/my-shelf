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
    console.log("PLEASE LOG THIS", this.props.artists)
    if(this.props.artists[this.props.artists.length-1]){
      let results = this.props.artists[0];
      if(results){
        console.log("RESULTS", results)
        let myAlbums = results.map((album, i) => <RecordFromList key={i} album={album}/>)
        return(
          <div>
            <Row>
              {myAlbums}
            </Row>
          </div>
        )

      }else{
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMyAlbums: bindActionCreators(getMyAlbums, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyRecordList);
