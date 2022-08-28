import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const GetInvolved = () => {
  let navigate = useNavigate();

  return (
    <div className="topmargin">
      <div className="page-template">
        <div topmargin="20px">
          <h1 className="title" style={{fontWeight: 'bold'}}>
            How can you get involved?
          </h1>
        </div>

        <div>
          <h1 className="supporting-text">
            {" "}
            Get involved to help your community progress towards a lead-free
            future.
          </h1>
        </div>

        <br />

        <div>
          <h1 className="feature-text-top">
            {" "}
            Stay up-to-date on the impactlead pipes have in your community.
          </h1>
          <h1 className="feature-text-bottom">
            Read through this site and explore our interactive map to understand
            the effects of lead pipe continue to have.
          </h1>
          <img
            alt="working man cartoon"
            src={require("./Images/workingman_cartoon.png").default}
            height={50}
            width={100}
          />
        </div>
        <div>
          <Button
            variant="primary"
            onClick={() => navigate("/howtocheckpipes")}
          >
            How to check my pipes
          </Button>
        </div>

        <br />

        <div>
          <h1 className="feature-text-top">
            {" "}
            Upload pictures of your water pipes to our platform.{" "}
          </h1>
          <h1 className="feature-text-bottom">
            This allows us to update the map on the latest data, which in turn
            enables your local government to more easily receive funding.{" "}
          </h1>
          <img
            alt="man with camera cartoon"
            src={require("./Images/manWithCamera_cartoon.png").default}
            height={50}
            width={100}
          />
        </div>
        <div>
          <Button variant="primary" onClick={() => navigate("/contribute")}>
            Upload picture
          </Button>
        </div>

        <br />

        <div>
          <h1 className="feature-text-top">
            {" "}
            Share our interactive map to people in your community!
          </h1>
          <h1 className="feature-text-bottom">
            We can only have a farther reach and impact with your help.
          </h1>
          <img
            alt="girl with megaphone"
            src={require("./Images/girlWithMegaphone_cartoon.png").default}
            height={50}
            width={100}
          />
        </div>

        <br />
      </div>
    </div>
  );
};

export default GetInvolved;
