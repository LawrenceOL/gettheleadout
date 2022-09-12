import React from "react";
import { Link } from "react-router-dom";
import One from "../Images/one.png";
import Two from "../Images/two.png";
import YoungPeople from "../Images/youngpeople.png";
import DataPic from "../Images/datapic.png";
import UploadImage from '../Images/upload-laptop.png'
import ShareButton from "../LandingPage/ShareButton";
import Footer from "../Footer/Footer";
import './GetPipesChecked.css'

const GetChecked = () => {
  const URL = "https://form.jotform.com/222348879637169"; //embed URL

  return (
    <div className="topmargin">
      <div className="page-template">

        <div>
          <h1 className="title">Input your information </h1>
        </div>

        <div>
          <h1 className="supporting-text1">
            {" "}
            Adding your findings about your lead pipes can help your neighbors see the likelihood of lead in the neighborhood.
          </h1>
        </div>

        <br />

        <div>
          <h1 className="supporting-text2">
            {" "}
            Need help checking your pipes?
            <br/>
            <Link to="/howtocheckpipes">How to check my pipes</Link>
          </h1>
          </div>

        <div>
          <h1 className="headers">
            How This Helps:{" "}
          </h1>
          </div>

        <br />

        <div className="numbered-sections-picture-first-version">
          <div className="number-icon">
            <img 
              alt="Number one"
              src={One} 
              height={50}
              width={50} />
          </div>

          <div className="group-picture">
            <img 
              alt="People"
              src={YoungPeople}
              height={200}
              width={300} />
          </div>

          <div className="information-section">
          
              <h1 className="point-title">Increase community awareness</h1>
              <h1 className="point-description">
                Locations of lead lines have never been weel-documented. Your
                involvement can maintain clean water for your entire community.
              </h1>
            </div>
        </div>

        <br/>
        <br/>

        <div className="numbered-sections-picture-first-version">
          <div className="number-icon">
            <img 
              alt="Number two"
              src={Two}
              height={50}
              width={50} />
          </div>

        <div className="uploadinfo-picture">
            <img 
              alt="Upload" 
              src={UploadImage}
              height={200}
              width={300} />
            </div>

          <div className="information-section">
            <div>
              <h1 className="point-title">
                Allow your local government to apply for funding
              </h1>
              <h1 className="point-description">
                Your local water system needs your help in knowing for certain
                how many lead pipes there are. This is a required step to apply
                for funding to replace each one.
              </h1>
            </div>
          </div>
        </div>

        <div>
          <h1 className="headers">Update us about your water pipes </h1>
          </div>

        <br />

        <div>
          <h1 className="update-us-bottom-text">
            This will spread awareness in your community and allow your local
            government to better apply for federal funding.
          </h1>
          </div>

        <br />

        <div>
          <iframe
            className="jotform-iframe"
            title="jotform-iframe"
            src={URL}
          ></iframe>
          <div className="form_share_button">
            <ShareButton />
          </div>
        </div>

        <div>
          <h1 className="headers">Still need help?</h1>
          <h1 className="feature-text-bottom">
            <ol>
              <li>Check out NPR's step by step guide</li>
              <li>Contact your local water utility directly</li>
              <li>
                Check out our FAQ page for commonly asked questions and answers.
              </li>
            </ol>
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetChecked;
