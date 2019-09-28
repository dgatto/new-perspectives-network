import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface PassedProps {
  url: string;
}

type Props = PassedProps;

export class Navigation extends React.Component<Props> {
  render() {
    return (
      <Navbar className="homepage-navigation-bar" expand="lg">
        <Navbar.Brand className="navbar-brand">
          <img alt="Not found" src="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav centered">
            <Nav>
              <Link className="item" to="/home">
                Home
              </Link>
            </Nav>
            <Nav>
              <Link className="item" to="/about">
                About
              </Link>
            </Nav>
            <Nav>
              <Link className="item" to="/gallery">
                Gallery
              </Link>
            </Nav>
            <Nav>
              <Link className="item" to="/community">
                Community
              </Link>
            </Nav>
            <Nav className="item">Contact Us</Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
