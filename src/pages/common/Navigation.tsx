import React, { Component } from 'react';
import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface PassedProps {
  url: string;
}

type Props = PassedProps;

export class Navigation extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation-bar homepage-navigation-bar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <a className="navbar-brand" href="#">
            <img
              className="logo-image"
              src="https://drive.google.com/uc?id=1pmlBibDJ1_3SzdfD5pykIupEHePJd7ZM"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto items">
              <li className="nav-item active">
                <a className="nav-link">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/about">About</Link>
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link">
                  <Link to="/gallery">Gallery</Link>
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link">
                  <Link to="/community">Community</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
