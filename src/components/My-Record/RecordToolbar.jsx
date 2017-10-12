import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeAlbum } from '../../actions/artists'


class RecordToolbar extends Component {
  render () {
    console.log("RecordToolbar", this.props)
    let editDestination = '/album/' + this.props.id + '/edit'
    return (
      <div>
        <Navbar color="faded" light expand="md">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to = "/" className="moveLeft" onClick ={e => this.props.removeAlbum(this.props.id)}>Remove</Link>
              </NavItem>
              <NavItem>
                <Link to = {editDestination} >Optimize</Link>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeAlbum: bindActionCreators(removeAlbum, dispatch)
  }
}

function mapStateToProps(state, props) {
  return {
    artists: state.artists
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (RecordToolbar);
