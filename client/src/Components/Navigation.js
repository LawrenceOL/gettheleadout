import React from 'react';
import {Link} from 'react-router-dom'
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap'

const Navigation = () => {

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link className="nav-links" to="/">
            get the lead out
          </Link>
        </Navbar.Brand>
        <Nav.Link>
          <Link className="nav-links" to="/about">
            about lead pipes
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link className="nav-links" to="/resources">
            resources
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link className="nav-links" to="/contact">
            contact
          </Link>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};
export default Navigation;
