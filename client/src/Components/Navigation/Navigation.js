import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  return (
    <div id="navbar">
      <Navbar expand="md" className="mb-3" fixed="top" bg="light">
        <Container fluid>
          <Navbar.Brand className="navtitles" href="#">
            {/* use map only when not on map page in mobile */}
            <FontAwesomeIcon icon={faMap} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Link className="nav-links" to="/">
                  LeadOut.
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-links" to="/">
                  Map
                </Link>
                <Link className="nav-links" to="/about">
                  About
                </Link>
                <p>For Residents</p>
                <Link className="nav-links" to="/howtocheckpipes">
                  How to Check Your Pipes
                </Link>
                <p>For Officials</p>
                <Link className="nav-links" to="/linkstogrants">
                  Links to Apply for Grants
                </Link>
                <Link className="nav-links" to="/applicationresources">
                  Application Resources
                </Link>
                <Link className="nav-links" to="/requestorverifydata">
                  Request or Verify Data
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
