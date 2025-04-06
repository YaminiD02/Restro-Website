import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css'; // External styling

export const Header = (props) => {
  return (
    <Navbar className='menu' bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand className='brand-title' href="#/home">
          <h1>{props.title}</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#/home">Home</Nav.Link>
            <Nav.Link href="#/about">About</Nav.Link>
            <Nav.Link href="#/menu">Menu</Nav.Link>
            {/* <Nav.Link href="#/special">Specials</Nav.Link> */}
            <Nav.Link href="#/chef">Chefs</Nav.Link>
            <Nav.Link href="#/album">Album</Nav.Link>
            <Nav.Link href="#/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
