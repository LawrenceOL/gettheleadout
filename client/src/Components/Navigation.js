import React from 'react';
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Navigation = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>get the lead out</Navbar.Brand>
        <Nav.Link href="./About.js">about lead pipes</Nav.Link>
        <Nav.Link href="./Resources.js">resources</Nav.Link>
        <Nav.Link href="./Contact.js">contact</Nav.Link>
      </Container>
    </Navbar>
  );
};
export default Navigation;
