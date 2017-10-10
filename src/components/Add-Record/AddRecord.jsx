import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddRecord extends Component {
  render () {
    console.log("Add Record Props",this.props)
    return (
      <Col md="6">
        <Row>
          <Col md="4">
            <img src="http://imgfill.com/125x125" alt="Placeholder"/>
          </Col>
          <Col md="4">
            <br />
            <Row>Artist Name</Row>
            <br/>
            <Row>Album Name</Row>
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
