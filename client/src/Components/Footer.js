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
    <div style={{ marginTop: 102 }} id="footer">
      <div className="footerblue">
        <div>
          <h1 className="header-in-footer">
            Let Us Help You Confirm Your Lead Pipe Status.
          </h1>
        </div>

        <br />

        <div>
          <p className="supporting-text">
            By answering some simple questions and adding a photo of your pipe,
            we can help you confirm your pipe material This will help your
            neighborhood replace lead pipes for good!
          </p>
        </div>

        <br />

        <div className="footerbuttons">
          <button
            className="bluebutton"
            onClick={() => navigate("/getpipeschecked")}
          >
            Upload Your Findings
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
