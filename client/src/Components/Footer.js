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
        <div style={{ marginTop: 40, marginLeft: 25, marginRight: 25 }}>
          <h1 className="headers">
            Let's get your water pipes checked with a photo upload.
          </h1>
        </div>

        <br />

        <div style={{ marginTop: 20, marginLeft: 25, marginRight: 25 }}>
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
            variant="light"
            size="lg"
            className="addborder"
            onClick={() => navigate("/howtocheckpipes")}
          >
            How to check your pipes
          </Button>
          <Button
            varient="primary"
            size="lg"
            onClick={() => navigate("/getpipeschecked")}
          >
            Get your pipes checked
          </Button>
        </div>

        <br />
      </div>

      <div>
        <h1 style={{ marginTop: 50, marginLeft: 20 }}>Get the Lead Out</h1>
      </div>

      <div
        className="footer-links"
        style={{ marginTop: 30, marginLeft: 20, marginBottom: 10 }}
      >
        <div>
          <Link to="/" className="link-dark text-decoration-none">
            {" "}
            Map
          </Link>
        </div>
        <div>
          <Link
            to="/howtocheckpipes"
            className="link-dark text-decoration-none"
          >
            {" "}
            How to check your pipes
          </Link>
        </div>
        <div>
          <Link
            to="/getpipeschecked"
            className="link-dark text-decoration-none"
          >
            {" "}
            Get your pipes checked
          </Link>
        </div>
        <div>
          <Link to="/about" className="link-dark text-decoration-none">
            About
          </Link>
        </div>
        <div>
          <Link to="/faq" className="link-dark text-decoration-none">
            FAQ
          </Link>
        </div>

        <Link to="/getourdataset" className="link-dark text-decoration-none">
          Get our data set
        </Link>
      </div>
    </div>
  );
};

export default Footer;
