import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAlbum } from '../../actions/artists'

class MyRecordBody extends Component {

  componentDidMount() {
    this.props.getAlbum(this.props.id);
  }

  render () {
    if(this.props.artists[this.props.artists.length - 1]){
      console.log("MyRecordBody Props", this.props)
      let item = this.props.artists[this.props.artists.length -1]

      let albumArtist = this.props.artists[this.props.artists.length - 1].artist;
      let album = item.album;
      let year = item.year;
      let genre = item.genre;
      let artist = item.artist;
      let albumArt = item.image_url;
      let label = item.label;
      let cat_num = item.cat_num;
      let print_year = item.print_year;
      let color = item.color;

      console.log("cat_num",cat_num);
      console.log("print_year", print_year);
      console.log("color", color);

      if(cat_num !== null) {
        cat_num = <h5>Catalog Number: {cat_num}</h5>
      }

      if(print_year !== null) {
        print_year = <h5>Print Year: {print_year}</h5>
      }

      if(color !== null) {
        color = <h5>Color: {color}</h5>
      }

      return (
        <div>
          <Row>
            <Col md={3}>
              <img src={albumArt} alt="placeholder" className="recordImage"/>
            </Col>
            <Col>
              <h1>{albumArtist}</h1>
              <h1>{album}</h1>
              <h3>{year}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <br/>
              <br/>
              <h5>Genre: {genre}</h5>
              <br/>
              <h5>Label: {label}</h5>
              <br/>
              {cat_num}
              <br/>
              {print_year}
              <br/>
              {color}
            </Col>
            <Col>
              <br/>
              <button>Get Track List</button>
            </Col>

          </Row>
        </div>
      )
    } else {
      return null
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAlbum: bindActionCreators(getAlbum, dispatch),
  }
}

function mapStateToProps(state, props) {
  return {
    artists: state.artists
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyRecordBody);
