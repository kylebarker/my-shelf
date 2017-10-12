import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { NavLink } from 'reactstrap';


class RecordFromList extends Component {
  render () {
    console.log("RECORD FROM LIST PROPS", this.props.album)

    let albumArt = this.props.album.image_url;
    let artistName = this.props.album.artist;
    let albumName = this.props.album.album;
    let albumid = "/album/" + this.props.album.id;

    return (
      <Col md="2">
        <br/>
          <Row>
            <Col md="12">
              <Link to={albumid}>
                <img src={albumArt} alt="placeholder" className="myAlbumArt"/>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Row>{artistName}</Row>
              <Row className="albumName">{albumName}</Row>
            </Col>
          </Row>
      </Col>
    )
  }
}

function mapStateToProps(state, props){
  return{
    artists: state.artists
  }
}

export default connect(mapStateToProps, null)(RecordFromList);
