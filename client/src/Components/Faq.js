import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { TbArrowsRightLeft } from "react-icons/tb";
import { HiUpload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BsLadder } from "react-icons/bs";
import Questionmark from "./Images/questionmark.png";
import Arrows from "./Images/arrows.png";
import UploadIcon from "./Images/uploadicon.png";
import PipeIcon from "./Images/pipeicon.png";
import EPA from "./Images/epabrochure.png";
import "./Spacing.css";
import Footer from "./Footer";

const Faq = () => {
  return (
    <div className="topmargin">
      <div className="page-template">
        <div topmargin="20px">
          <h1 className="title">FAQ </h1>
        </div>

        <div>
          <h1 className="supporting-text">
            {" "}
            Lead can be a scary thing to tackle. Let's help you tackle it.
          </h1>
        </div>

        <div className="numbered-sections-small" style={{ paddingTop: 30 }}>
          <div className="item-1">
            <img
              alt="Question mark"
              src={Questionmark}
              height={50}
              width={50}
            />
          </div>

          <div className="item-2">
            <h1 className="feature-text-top ">
              {" "}
              Still have questions about checking for lead pipes?
            </h1>
            <h1 className="feature-text-bottom">
              Refer to NPR's complete step by step guide with photos.
            </h1>
          </div>
        </div>

        <div className="numbered-sections-small">
          <div className="item-1">
            <img alt="Arrows" src={Arrows} height={50} width={50} />
          </div>

          <div className="item-2">
            <h1 className="feature-text-top">
              {" "}
              Need help identifying what pipe you have or obtaining a water kit?
            </h1>
            <h1 className="feature-text-bottom" style={{ marginTop: 30 }}>
              Contact your local water utility department.
            </h1>
          </div>
        </div>

        <div className="numbered-sections-small">
          <div className="item-1">
            <img alt="Upload icon" src={UploadIcon} height={50} width={50} />
          </div>

          <div className="item-2">
            <h1 className="feature-text-top">
              {" "}
              Would you like to help your town map its lead lines and assist in
              lead line replacement projects?
            </h1>
            <h1 className="feature-text-bottom" style={{ marginTop: 50 }}>
              Upload a photo of your lead pipe here
            </h1>
          </div>
        </div>

        <div className="numbered-sections-small">
          <div className="item-1">
            <img alt="Pipe icon" src={PipeIcon} height={50} width={50} />
          </div>

          <div className="item-2">
            <h1 className="feature-text-top">
              {" "}
              Have questions on how to manage your household health if you
              discover lead pipes?
            </h1>
            <h1 className="feature-text-bottom" style={{ marginTop: 60 }}>
              Click <a href="">here ></a> for tips from the EPA
            </h1>
          </div>
        </div>

        <div>
          <img alt="EPA Infographic" src={EPA} width={320} height={700} />
        </div>

        {/* <div topmargin="20px">
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
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
