import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import WorkingMan from "./Images/workingman_cartoon.png";
import CameraMan from "./Images/manWithCamera_cartoon.png";
import TwoPeople from "./Images/twopeople_cartoon.png";
import One from "./Images/one.png";
import Two from "./Images/two.png";
import Three from "./Images/three.png";
import "./GetInvolved.css";
import MainFooter from "./MainFooter";
import ShareButton from "./LandingPage/ShareButton";

const GetInvolved = () => {
  let navigate = useNavigate();

  return (
    <div className="topmargin">
      <div className="page-template">
        <div>
          <h1 className="title">How can you get involved? </h1>
        </div>

        <div>
          <h1 className="subtitle">
            {" "}
            Get involved to help your community progress towards a lead-free
            future.
          </h1>
        </div>

        <br />

        <div className="numbered-sections">
          <div className="number-icon">
            <img alt="Number one" src={One} height={50} width={50} />
          </div>

          <div className="information">
            <h1 className="step1-title">
              {" "}
              Stay up-to-date on the impact lead pipes have in your community.
            </h1>
            <h1 className="step1-description">
              Contact your local water utilities or local officials and find out
              about on-going or up-coming initiatives.
            </h1>
          </div>
        </div>

        <div className="center">
          <img alt="Working man" src={WorkingMan} height={239} width={300} />
        </div>

        <div className="center">
          <button
            className="bluebutton"
            onClick={() => navigate("/howtocheckpipes")}
          >
            Learn more
          </button>
        </div>

        <br />

        <div className="numbered-sections2">
          <div className="number-icon">
            <img alt="Number two" src={Two} height={50} width={50} />
          </div>

          <div className="information">
            <h1 className="step2-title">
              {" "}
              Upload pictures of your water pipes to our platform.
            </h1>
            <h1 className="step2-description">
              This allows us to update the map on the latest data, which in turn
              enables your local government to more easily receive funding.{" "}
            </h1>
          </div>
        </div>

        <div className="center">
          <img
            alt="man with camera cartoon"
            src={CameraMan}
            height={250}
            width={300}
          />
        </div>

        <div className="center">
          <button
            className="bluebutton"
            onClick={() => navigate("/getpipeschecked")}
            block
          >
            Put your pipes on the map
          </button>
        </div>

        <br />

        <div>
          <div className="numbered-sections-small">
            <div className="number-icon">
              <img alt="Number three" src={Three} height={50} width={50} />
            </div>

            <div className="information">
              <h1 className="step3-title">
                {" "}
                Share our interactive map to people in your community!
              </h1>
              <h1 className="step3-description">
                We can only have a farther reach and impact with your help.
              </h1>
            </div>
          </div>

          <div className="center">
            <img alt="two people" src={TwoPeople} height={220} width={240} />
          </div>

          <div>
            <h4 style={{ marginTop: 50 }}>Share our map on:</h4>
            <ShareButton />
          </div>
        </div>

        <br />
      </div>
      <MainFooter />
    </div>
  );
};

export default GetInvolved;
