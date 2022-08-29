import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { TbArrowsRightLeft } from "react-icons/tb";
import { HiUpload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BsLadder } from "react-icons/bs";

const Faq = () => {
  return (
    <div className="topmargin">
      <div className="page-template">
        <div topmargin="20px">
          <h1 className="title">
            <b> FAQ </b>{" "}
          </h1>
        </div>

        <div>
          <h4>Find out ways to get involved.</h4>
        </div>

        <br />

        <div>
          <h4>
            <b>Frequently asked questions</b>
          </h4>
          <p>
            Common questions around lead pipe remediation and resources you can
            utilize.
          </p>
        </div>

        <br />

        <div className="pictures-row">
          <BsQuestionCircle />
          <div className="flex-column">
            <h4>Still have questions checking for lead lines?</h4>
            <h5>
              <b>Refer to NPR's complete step by step guide with photos.</b>
            </h5>
          </div>
        </div>

        <div className="pictures-row">
          <TbArrowsRightLeft />
          <div className="flex-column">
            <h4>
              Need help identifying what pipe you have or obtaining a water kit?
            </h4>
            <h5>
              <b>Contact your local water utility department.</b>
            </h5>
          </div>
        </div>

        <div className="pictures-row">
          <HiUpload />
          <div className="flex-column">
            <h4>
              Would you like to help your town map its lead lines and assist in
              lead line replacement projects?
            </h4>
            <h5>Upload a photo of your lead line here </h5>
          </div>
        </div>

        <div className="pictures-row">
          <BsLadder />
          <div className="flex-column">
            <h4>
              Have questions on how to manage your household health if you
              discover lead service line
            </h4>
            <h5>Click here for tips from the EPA </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
