import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArtist } from '../../actions/search'
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
        <Col>
        <form onSubmit={ this.props.handleSubmit(this.findArtist) }>
          <FormGroup>
              <div>
                <Field
                  name="artist"
                  component="input"
                  type="text"
                  placeholder="Search by Artist or Album"
                  className="stretch"
                />
              <button type="submit" className="searchSubmit">Submit</button>
              </div>
          </FormGroup>
        </form>
      </Col>
      </Row>
    )
  }
}

AddToolbar = reduxForm({
  // a unique name for the form
  form: 'addToolbar'
})(AddToolbar)

function mapStateToProps(state, props) {
  console.log("LABEL",state)
  return {
    artists: state.artists,
    search: state.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getArtist: bindActionCreators(getArtist, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddToolbar);
