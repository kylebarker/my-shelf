import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArtist } from '../../actions/artists'
import { Row, Col, FormGroup } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'


class AddToolbar extends Component {


  findArtist = (artist) => {
    this.props.getArtist(artist);
    console.log("find artist props",artist)
  }

  render () {
    return (
      <Row>
        <form onSubmit={ this.props.handleSubmit(this.findArtist) }>
          <FormGroup>
            <Col>
              <div>
                <Field
                  name="artist"
                  component="input"
                  type="text"
                  placeholder="Search by Artist"
                />
              <button type="submit" className="searchSubmit">Submit</button>
              </div>
            </Col>
          </FormGroup>
        </form>
      </Row>
    )
  }
}

AddToolbar = reduxForm({
  // a unique name for the form
  form: 'addToolbar'
})(AddToolbar)

function mapStateToProps(state, props) {
  return {
    artists: state.artists
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArtist: bindActionCreators(getArtist, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddToolbar);
