import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends Component {

  render () {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">My Shelf</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">My Shelf</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/:id">Random</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/addRecord">+Record</NavLink>
              </NavItem>
            </Nav>
        </Navbar>



      </div>
    )
  }
}
export default NavBar;
