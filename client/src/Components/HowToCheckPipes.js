import React from "react";
import { FcTodoList, FcUpload } from "react-icons/fc";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import Camera from "./Images/camera.png";
import One from "./Images/one.png";
import Two from "./Images/two.png";
import LeadPipe from "./Images/leadpipe.png";
import CopperPipe from "./Images/copperpipe2.png";
import Checkboxes from "./Images/checkboxes.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Check = () => {
  let navigate = useNavigate();

  return (
    <div className="topmargin">
      <div className="page-template">
        <div topmargin="20px">
          <h1 className="title">How to check for lead pipes </h1>
        </div>

        <div className="center" style={{ paddingTop: 50 }}>
          <img alt="camera" src={Camera} height={220} width={250} />
        </div>

        <div className="numbered-sections" style={{ paddingTop: 40 }}>
          <div className="item-1">
            <img alt="Number one" src={One} height={50} width={50} />
          </div>

          <div className="item-2">
            <h1 className="feature-text-top">
              {" "}
              Follow our guided visual test below
            </h1>
            <h1 className="feature-text-bottom">
              A visual test is the most accurate way to know if your pipes are
              lead -- it only takes a few minutes and requires no special
              equipment!
            </h1>
          </div>
        </div>

        <div className="numbered-sections">
          <div className="item-1">
            <img alt="Number two" src={Two} height={50} width={50} />
          </div>
          <div className="item-2">
            <h1 className="feature-text-top" style={{ paddingTop: 15 }}>
              Upload a photo of your pipe
            </h1>
            <h1 className="feature-text-bottom">
              Sample text where instructions on how to upload a picture of your
              pipe will be displayed.
            </h1>
          </div>
        </div>

        <div>
          <div>
            <h1 className="headers">Example Images</h1>
          </div>

          <div classname="image" style={{ paddingTop: 15 }}>
            <img alt="lead pipe" src={LeadPipe} height={140} width={332} />
          </div>

          <div>
            <h1 className="feature-text-top" style={{ lineHeight: "70px" }}>
              How a lead pipe could look
            </h1>
            <h1 className="picture-caption" style={{ lineHeight: "20px" }}>
              {" "}
              A shiny, silver scratch can mean the pipe is either lead or
              galvanized steel.
            </h1>
          </div>

          <br />

          <div>
            <img alt="copper pipe" src={CopperPipe} height={140} width={332} />
          </div>

          <div>
            <h1 className="feature-text-top" style={{ paddingTop: 15 }}>
              How a copper pipe could look
            </h1>
            <h1 className="picture-caption" style={{ paddingTop: 15 }}>
              {" "}
              After scratching, a copper pipe will look copper. Note that copper
              pipes can have lead solder.
            </h1>
          </div>
        </div>

        <br />

        <div>
          <h1 className="headers" style={{ paddingTop: 50 }}>
            {" "}
            Steps to complete a visual test
          </h1>
        </div>

        <br />

        <div style={{ paddingTop: 20 }}>
          <img
            alt="Checkboxes"
            src={Checkboxes}
            // height={210}
            // width={250}
          />
        </div>

        <br />

        <div>
          <ol>
            <li>Grab a magnet or a coin or a key for your test.</li>
            <br />
            <li>
              Locate your water meter. From the meter, look where the service
              line enters the building, either in the wall or through the floor.
            </li>
            <br />
            <li>
              Find the shut-off valve. Test the area between the shut-off valve
              and the wall or floor.
            </li>
            <br />
            <li>
              Begin with the magnet test. Magnets will not stick to the lead or
              copper. Magnets will stick to steel. However, galvanized steel may
              contain lead inside. Further investigation is needed.
            </li>
            <br />
            <li>
              If the magnet does not stick, try using a key or coin to scratch
              the pipe. A copper-colored scratch, means the pipe is copper. Note
              copper pipes can have lead solder.
            </li>
            <br />
            <li>
              A shiny, silver scratch, indicates the pipe could be lead or
              galvanized steel. Replacement or further investigation is needed.
              Request a water testing kit to check for lead in your water.
            </li>
            <br />
            <li>Wash your hands thoroughly with soap and water.</li>
          </ol>
        </div>

        <br />

        <div>
          <h1 className="headers">Still need help?</h1>
          <h1 className="feature-text-bottom">
            <ol>
              <li>
                Check out <a href="apps.npr.org"> NPR's step by step guide </a>
              </li>
              <li>Contact your local water utility directly</li>
              <li>
                Check out our <Link to="/faq"> FAQ page > </Link> for commonly
                asked questions and answers.
              </li>
            </ol>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Check;
