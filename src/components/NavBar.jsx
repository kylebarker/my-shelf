import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import MyToolbar from './My-Shelf/MyToolbar'
import AddMain from './Add-Record/AddMain'


class NavBar extends Component {

  render () {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">My Shelf</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Random</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Wishlist</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">+Record</NavLink>
              </NavItem>
            </Nav>
        </Navbar>


      
      </div>
    )
  }
}
export default NavBar;
