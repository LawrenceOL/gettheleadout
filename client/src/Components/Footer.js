import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import whitelogo from "./Images/whitelogo.png"
import './Footer.css'
import ShareButton from "./LandingPage/ShareButton";


const Footer = () => {
  let navigate = useNavigate();

  return (
    <div style={{ marginTop: 102 }}>
      <div className="footerblue">
        <div>
          <h1 className="header-in-footer">
            Let us help you confirm your lead pipe status.
          </h1>
        </div>

        <br />

        <div>
          <h1 className="supporting-text">
            By adding your photo, we can help you confirm your pipe material and
            you can help your community locate & remove lead pipes.
          </h1>
        </div>

        <br />

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

      <div className="mainfooter">
        <img
          src={whitelogo}
          alt="get the lead out logo"
          className="whitelogo"
        />

        <div className="footer-links">
          <Link to="/" className="footerlink">
            {" "}
            Map
          </Link>

          <Link to="/howtocheckpipes" className="footerlink">
            {" "}
            How to Check Your Pipes
          </Link>

          <Link to="/getpipeschecked" className="footerlink">
            {" "}
            Upload Your Findings
          </Link>

          <Link to="/about" className="footerlink">
            About
          </Link>

          <Link to="/faq" className="footerlink">
            FAQ
          </Link>

          <Link to="/getourdataset" className="footerlink">
            Get the Data
          </Link>
        </div>

        <div className="linebreak">
          <div className="socialbuttons">
            <ShareButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
