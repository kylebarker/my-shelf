import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class NavBar extends Component {

  render () {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">My Shelf</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="moveLeft">My Shelf</Link>
              </NavItem>
              <NavItem>
                <Link to="/album/:id" className="moveLeft">Random</Link>
              </NavItem>
              <NavItem>
                <Link to="/addRecord" className="moveLeft">+Record</Link>
              </NavItem>
            </Nav>
        </Navbar>



      </div>
    )
  }
}
export default NavBar;
