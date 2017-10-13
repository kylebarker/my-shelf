import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMyAlbums } from './../actions/artists'


class NavBar extends Component {

  componentDidMount() {
    this.props.getMyAlbums();
  }

  render () {
    let ids = [];
    let albums = this.props.artists[0]
    if(albums){
      console.log("MASTER NAV BAR PROPS", albums[0].id)
      for(var i = 0; i < albums.length; i++){
        ids.push(albums[i].id)
      }

    } else {
      return null
    }
    console.log("MY IDS!!!", ids)
    let randomID = ids[Math.floor(Math.random()*ids.length)]
    console.log("MY RANDOM ID!!!", randomID)
    let randomLink = "/album/" + randomID
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">My Shelf</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="moveLeft">My Shelf</Link>
              </NavItem>
              <NavItem>
                <Link to={randomLink} className="moveLeft">Random</Link>
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

function mapStateToProps(state, props) {
  return {
    artists: state.artists,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMyAlbums: bindActionCreators(getMyAlbums, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (NavBar);
