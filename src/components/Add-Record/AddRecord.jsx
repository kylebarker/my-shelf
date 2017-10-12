import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToMyShelf } from '../../actions/artists'

class AddRecord extends Component {
  render () {
    console.log("Add Record Props",this.props)

    let albumArt = this.props.albums.thumb;
    let title = this.props.albums.title;
    let artistAlbumArray = title.split(" - ");
    let artistName = artistAlbumArray[0];
    let albumName = artistAlbumArray[1]

    let albumData = {
      artist: artistAlbumArray[0],
      album: artistAlbumArray[1],
      year: this.props.albums.year,
      genre: this.props.albums.genre[0],
      image_url: this.props.albums.thumb,
      label: this.props.albums.label[0],
      discogs_id: this.props.albums.id.toString()
    }

    return (
      <Col md="4">
        <Row>
          <Col md="6">
            <img src={albumArt} alt={albumName}/>
          </Col>
          <Col md="6">
            <Row>{artistName}</Row>
            <br/>
            <Row><p className="albumName">{albumName}</p></Row>
            <Button className="addButton" color="warning" onClick={e => this.props.addToMyShelf(albumData)}>+ My Shelf</Button>{' '}
          </Col>
        </Row>
        <br/>
      </Col>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToMyShelf: bindActionCreators(addToMyShelf, dispatch),
  }
}

function mapStateToProps(state, props) {
  return {
    artists: state.artists
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddRecord);
