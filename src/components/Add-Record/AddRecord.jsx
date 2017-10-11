import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

class AddRecord extends Component {
  render () {
    console.log("Add Record Props",this.props.albums)
    var genre = this.props.albums.genre[0];
    var albumid = this.props.albums.id.toString();
    var label = this.props.albums.label[0];
    var albumArt = this.props.albums.thumb;
    var year = this.props.albums.year;
    var title = this.props.albums.title;
    var artistAlbumArray = title.split(" - ");
    var artistName = artistAlbumArray[0];
    var albumName = artistAlbumArray[1]



    return (
      <Col md="6">
        <Row>
          <Col md="4">
            <img src={albumArt} alt={albumName}/>
          </Col>
          <Col md="4">
            <br />
            <Row>{artistName}</Row>
            <br/>
            <Row>{albumName}</Row>
          </Col>
          <Col md="4">
            <Row>
              <Button  className="addButton" color="warning">+ My Shelf</Button>{' '}
              <Button className="addButton" color="warning">+ Wishlist</Button>{' '}
            </Row>
          </Col>
        </Row>
        <br/>
      </Col>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    artists: state.artists
  }
}

export default connect(mapStateToProps, null) (AddRecord);
