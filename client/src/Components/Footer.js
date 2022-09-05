import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import './Footer.css'


const Footer = () => {
  let navigate = useNavigate();

  return (
    <div style={{ marginTop: 102 }}>
      <div className="footerblue">

        <div>
          <h1 className="header-in-footer">
            Let's get your water pipes checked with a photo upload.
          </h1>
        </div>

        <br />

        <div>
          <h1 className="supporting-text">
            By adding your photo, we can help you confirm your pipe material and
            you can help your communitylocate & remove lead pipes.
          </h1>
        </div>

        <br/>

        <div className="footerbuttons">
          <button
            className="bluebutton"
            onClick={() => navigate("/howtocheckpipes")}
          >
            Check your pipes for lead
          </button>

          <button
            className="whitebutton"
            onClick={() => navigate("/getpipeschecked")}
          >
            Upload your findings 
          </button>
        </div>

        <br />
      </div>

      <div>
        <h1 className="getLeadOut-header">
          Get the Lead Out
          </h1>
        </div>

      <div
        className="footer-links"
        >
        <div>
          <Link to="/" className="link-dark text-decoration-none">
            {" "}
            Map
          </Link>
          </div>
        <div className="individual-footerlink">
          <Link
            to="/howtocheckpipes"
            className="link-dark text-decoration-none"
          >
            {" "}
            How to check your pipes
          </Link>
          </div>
        <div className="individual-footerlink">
          <Link
            to="/getpipeschecked"
            className="link-dark text-decoration-none"
          >
            {" "}
            Get your pipes checked
          </Link>
          </div>
        <div className="individual-footerlink">
          <Link to="/about" className="link-dark text-decoration-none">
            About
          </Link>
          </div>
        <div className="individual-footerlink">
          <Link to="/faq" className="link-dark text-decoration-none">
            FAQ
          </Link>
          </div>
        <div className="individual-footerlink">
          <Link to="/getourdataset" className="link-dark text-decoration-none">
            Get our data set
          </Link>
          </div>
      </div>
    </div>
  );
};

export default Footer;
