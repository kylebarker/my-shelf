import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';


class MyToolbar extends Component {

  render () {
    const { handleSubmit } = this.props
    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Search</label>
            <div>
              <Field
                name="searchRecord"
                component="input"
                type="text"
                placeholder="Search"
                />
            </div>
          </div>
          <div>
            <label>Sort By</label>
            <div>
              <Field name="sortMyRecords" component="select">
                <option value="ff0000">Artist</option>
                <option value="00ff00">Album</option>
                <option value="0000ff">Year</option>
              </Field>
            </div>
          </div>
        </form>

      </Container>
    )
  }
}

MyToolbar = reduxForm({
  // a unique name for the form
  form: 'myToolbar'
})(MyToolbar)

export default connect(null, null)(MyToolbar);