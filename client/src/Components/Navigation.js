import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { GrClose } from "react-icons/gr";
import { useState } from 'react';
import '../Components/Spacing.css'


const NavBar = () => {

  const[sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
   <div id="navbar">
      <Navbar expand="md" className="mb-3" fixed="top" bg="light">
        <Container fluid>
          <Navbar.Brand className="navtitles" href="#">
            {/* use map only when not on map page in mobile */}
            <FontAwesomeIcon icon={faMap} onClick={showSidebar}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Body>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <div className='flex-column justify-content-between'>
                <div>
                  <Nav.Link className="nav-links link-dark text-decoration-none sidebar" href="/" onClick={showSidebar}>
                    Map
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link className="nav-links link-dark text-decoration-none sidebar" href="/#/howtocheckpipes">
                    How to check your pipes
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link className="nav-links link-dark text-decoration-none" href="/#/getinvolved">
                    How to get involved
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link className="nav-links link-dark text-decoration-none" href="/#/contribute">
                    Put yourself on the map
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link className="nav-links link-dark text-decoration-none" href="/#/faq">
                    FAQ
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link className="nav-links link-dark text-decoration-none" href="/about">
                    About
                  </Nav.Link>
                </div>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
