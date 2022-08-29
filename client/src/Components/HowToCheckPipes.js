import React from "react";
import { FcTodoList, FcUpload } from "react-icons/fc";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import Camera from './Images/camera.png'
import One from './Images/one.png'
import Two from './Images/two.png'
import LeadPipe from './Images/leadpipe.png'
import CopperPipe from './Images/copperpipe2.png'

const Check = () => {
  let navigate = useNavigate();

  return (
    <div className="topmargin">
      <div className="page-template">

        <div topmargin="20px">
          <h1 className="title">
          How to check for lead pipes {" "}
          </h1>
        </div>

        <div>
            <img
                alt="camera"
                src={Camera}
                height={220}
                width={250}
              />
          </div>

        <div className="numbered-sections">
            <div className="item-1">
              <img
                alt="Number one"
                src={One}
                height={50}
                width={50}
                />
            </div>
            <div className="item-2">
              <h1 className="feature-text-top">
                {" "}
                Follow our guided visual test below
              </h1>
              <h1 className="feature-text-bottom">
                A visual test is the most accurate way to know if your pipes are lead -- it only takes a few minutes and requires no special equipment!
              </h1>
            </div>
        </div>

        <br/>

        <div className="numbered-sections">
          <div className="item-1">
            <img
                alt="Number two"
                src={Two}
                height={50}
                width={50}
                />
          </div>
            <div className="item-2">
              <h1 className="feature-text-top">
                Upload a photo of your pipe
              </h1>
              <h1 className="feature-text-bottom">
                Sample text where instructions on how to upload a picture of your pipe will be displayed.
              </h1>
            </div>
        </div>

        <div>

          <div>
            <h1 className="headers">Example Images</h1>
          </div>

          <div classname="image">
            <img
              alt="lead pipe"
              src={LeadPipe}
              height={200}
              width={350}
            />
          </div>

          <div>
            <h1 className="feature-text-top">How a lead pipe could look</h1>
            <h1 className="feature-text-bottom"> A shiny, silver scratch can mean the pipe is either lead or galvanized steel.
            </h1>
          </div>

          <div>
            <img
              alt="copper pipe"
              src={CopperPipe}
              height={200}
              width={350}
            />
          </div>

          <div>
            <h1 className="feature-text-top">How a copper pipe could look</h1>
            <h1 className="feature-text-bottom"> After scratching, a copper pipe will look copper. Note that copper pipes can have lead solder.
            </h1>
          </div>

        </div>

        <div>

          <h2 className="headers"> Steps to complete a visual test</h2>

          <br/>
        
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
        </div>
        <div>
          <h1 className="headers">
            Still need help?
          </h1>
          <h1 className="feature-text-bottom">
          <ol>
            <li>Check out NPR's step by step guide</li>
            <li>Contact your local water utility directly</li>
            <li>Check out our FAQ page > for commonly asked questions and answers.</li>
            </ol>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Check;
