import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.css"
import "./Footer.css"

export const Footer = () => {
    return (
        <Navbar className='footer' expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand className='offset-5' href="#">&copy; FoodX Restaurant</Navbar.Brand>
          </Container>
        </Navbar>
      );
}
