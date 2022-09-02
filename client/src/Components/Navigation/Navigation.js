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
import "./navigation.css"


const NavBar = () => {

  const[sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div id="navbar">
      <Navbar collapseOnSelect expand="md" className="mb-3" fixed="top">
        <Container fluid>
          <Navbar.Brand className="navtitles" href="#">
            <img src="https://res.cloudinary.com/adelaney923/image/upload/v1662134080/Frame_291_ssx69b.png" alt="get the lead out logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            className="offCanvasnav"
          >
            <Offcanvas.Body>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  className="nav-links text-decoration-none sidebar"
                  href="/"
                  collapseOnSelect
                >
                  Map
                </Nav.Link>

                <Nav.Link
                  className="nav-links text-decoration-none sidebar"
                  href="/#/howtocheckpipes"
                  collapseOnSelect
                >
                  How to check your pipes
                </Nav.Link>

                <Nav.Link
                  className="nav-links text-decoration-none"
                  href="/#/getinvolved"
                >
                  How to get involved
                </Nav.Link>

                <Nav.Link
                  className="nav-links text-decoration-none"
                  href="/#/faq"
                >
                  FAQ
                </Nav.Link>

                <Nav.Link
                  className="nav-links  text-decoration-none"
                  href="/#/about"
                >
                  About
                </Nav.Link>

                <Nav.Link
                  className="nav-links blue text-decoration-none"
                  href="/#/getpipeschecked"
                >
                  Get your pipes checked
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
