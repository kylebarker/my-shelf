import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';


class RecordFromList extends Component {
  render () {
    console.log("RECORD FROM LIST PROPS", this.props.album)

    let albumArt = this.props.album.image_url;
    let artistName = this.props.album.artist;
    let albumName = this.props.album.album;
    let albumid = "/" + this.props.album.id;

    return (
      <Col md="2">
        <br/>
          <Row>
            <Col md="12">
              <NavLink href={albumid}>
                <img src={albumArt} alt="placeholder" className="myAlbumArt"/>
              </NavLink>
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
