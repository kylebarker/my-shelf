import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';


class RecordToolbar extends Component {
  render () {
    console.log("RecordToolbar", this.props)
    return (
      <div>
        <Navbar color="faded" light expand="md">
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Delete</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/:id/edit">Optimize</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    artists: state.artists
  }
}

export default connect (mapStateToProps, null) (RecordToolbar);
