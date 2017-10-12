import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'reactstrap';
import { sortAlbumsBy } from '../../actions/sort'

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
              <Field
                name="sortMyRecords"
                component="select"
                defaultValue='artist'
                onChange={(e) => this.props.sortAlbumsBy(e.target.value)}
              >
                <option value="artist">Artist</option>
                <option value="album">Album</option>
                <option value="year">Year</option>
              </Field>
            </div>
          </div>
        </form>

      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortAlbumsBy: bindActionCreators(sortAlbumsBy, dispatch)
  }
}

MyToolbar = reduxForm({
  // a unique name for the form
  form: 'myToolbar'
})(MyToolbar)

export default connect(null, mapDispatchToProps)(MyToolbar);
