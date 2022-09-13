import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import whitelogo from "./Images/whitelogo.png";
import "./Footer.css";
import ShareButton from "./LandingPage/ShareButton";

const MainFooter = () => {
  let navigate = useNavigate();

  return (
    <div style={{ marginTop: 50 }}>
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

export default MainFooter;
