import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from './CartWidget.js';
import logo from '../logo.svg';


function NavbarPrin() {
  return (
    // la estructura de este navbar es de react-bootstrap:
    <Navbar  className='navbar_color_fondo' expand="md">

      <Container fluid className="d-flex justify-content-center navbar_ancho">

        <Navbar.Brand href="#"> 

          <img src={logo} alt="icono" />
          
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll"  />

        <Navbar.Collapse id="navbarScroll" >
          
            
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Collections</Nav.Link>
            <Nav.Link href="#action2">Men</Nav.Link>
            <Nav.Link href="#action2">Women</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            
          </Nav>

            <CartWidget/> 
          
        </Navbar.Collapse>

      </Container>
    </Navbar>

    
  );
}

export default NavbarPrin;