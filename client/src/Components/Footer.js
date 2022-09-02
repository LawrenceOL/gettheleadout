import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Spacing.css";

const Footer = () => {
  let navigate = useNavigate();

  return (
    <div style={{ marginTop: 102 }}>
      <div className="footerblue">
        <div style={{ marginTop: 60, marginLeft: 25, marginRight: 30 }}>
          <h1 className="headers">
            Let's get your water pipes checked with a photo upload.
          </h1>
        </div>

        <br />

        <div style={{ marginTop: 20, marginLeft: 25, marginRight: 25, marginBottom:20}}>
          <h1 className="supporting-text">
            By adding your photo, we can help you confirm your pipe material and
            you can help your communitylocate & remove lead pipes.
          </h1>
        </div>

        <div
          className="d-grid gap-2"
          style={{ marginTop: 78, marginLeft: 15, marginRight: 15 }}
        >
          <Button
            variant="primary"
            size="lg"
            className="addborder"
            onClick={() => navigate("/howtocheckpipes")}
          >
            Check your pipes for lead
          </Button>
          <Button
            variant="outline-dark"
            size="lg"
            onClick={() => navigate("/getpipeschecked")}
          >
            Upload your findings 
          </Button>
        </div>

        <br />
      </div>

      <div>
        <h1 className="headers" style={{ marginTop: 50, marginLeft: 20 }}>Get the Lead Out</h1>
      </div>

      <div
        className="footer-links"
        style={{ marginTop: 30, marginLeft: 20, marginBottom: 20 }}
        >
        <div>
          <Link to="/" className="link-dark text-decoration-none">
            {" "}
            Map
          </Link>
          </div>
        <div style={{ marginTop: 15 }}>
          <Link
            to="/howtocheckpipes"
            className="link-dark text-decoration-none"
          >
            {" "}
            How to check your pipes
          </Link>
          </div>
        <div style={{ marginTop: 15 }}v>
          <Link
            to="/getpipeschecked"
            className="link-dark text-decoration-none"
          >
            {" "}
            Get your pipes checked
          </Link>
          </div>
        <div style={{ marginTop: 15 }}>
          <Link to="/about" className="link-dark text-decoration-none">
            About
          </Link>
          </div>
        <div style={{ marginTop: 15 }}>
          <Link to="/faq" className="link-dark text-decoration-none">
            FAQ
          </Link>
          </div>
        <div style={{ marginTop: 15 }}>
          <Link to="/getourdataset" className="link-dark text-decoration-none">
            Get our data set
          </Link>
          </div>
      </div>
    </div>
  );
};

export default Footer;
