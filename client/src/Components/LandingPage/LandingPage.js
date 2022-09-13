import React, { useState } from "react";
import Map from "./Map";
import SearchAddress from "./SearchAddress";
import PageChangeButtons from "./PageChangeButtons";
import ShareButton from "./ShareButton";
import "./LandingPage.css";
import Footer from "../Footer";

const LandingPage = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [firstOverlay, setFirstOverlay] = useState(true);
  const [secondOverlay, setSecondOverlay] = useState(false);
  const [thirdOverlay, setThirdOverlay] = useState(false);

  const showFirstOverlay = () => {
    setFirstOverlay(true);
    setSecondOverlay(false);
    setThirdOverlay(false);
  };
  const showSecondOverlay = () => {
    setFirstOverlay(false);
    setSecondOverlay(true);
    setThirdOverlay(false);
  };
  const showThirdOverlay = () => {
    setFirstOverlay(false);
    setSecondOverlay(false);
    setThirdOverlay(true);
  };

  return (
    <div>
      <div id="landingpage">
        {/* if showoverlay is true show overlay */}
        {showOverlay ? (
          <div id="landingoverlay">
            <div
              className="overlay1"
              style={{ display: firstOverlay ? "block" : "none" }}
            >
              <img
                style={{ float: "right", margin: "5px" }}
                src="https://res.cloudinary.com/adelaney923/image/upload/v1661378258/X_moskof.png"
                alt="closeoverlaybutton"
                onClick={() => setShowOverlay(false)}
              />
              <div className="overlayelements">
                <img
                  className="overlayimg"
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1661372204/map_1_kz6tpw.png"
                  alt="mapimage"
                />
                <h1 className="overlayheader">
                  Do you know if you have lead pipes in your home?
                </h1>
                <h2 className="overlaytext">
                  Our map uses available data to show how likely a place is to
                  have lead pipes. You can add to this data to make our map
                  better!
                </h2>
                <PageChangeButtons
                  showFirstOverlay={showFirstOverlay}
                  showSecondOverlay={showSecondOverlay}
                  showThirdOverlay={showThirdOverlay}
                  setFirstOverlay={setFirstOverlay}
                  firstOverlay={firstOverlay}
                  secondOverlay={secondOverlay}
                  thirdOverlay={thirdOverlay}
                />
                <button
                  className="bluebutton"
                  onClick={() => {
                    setFirstOverlay(false);
                    setSecondOverlay(true);
                  }}
                >
                  Next
                </button>
                <button
                  className="whitebutton"
                  onClick={() => setShowOverlay(false)}
                >
                  Skip
                </button>
              </div>
            </div>
            <div
              className="overlay2"
              style={{ display: secondOverlay ? "block" : "none" }}
            >
              <img
                style={{ float: "right", margin: "5px" }}
                src="https://res.cloudinary.com/adelaney923/image/upload/v1661378258/X_moskof.png"
                alt="closeoverlaybutton"
                onClick={() => setShowOverlay(false)}
              />
              <div className="overlayelements">
                <img
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1661372255/Online_consultation_jpaa4s.png"
                  alt="persononcomputer"
                />
                <h1 className="overlayheader">
                  What if you do have lead pipes?
                </h1>
                <h2 className="overlaytext">
                  Lead pipe replacement is a big priority. To get funding for
                  lead pipe replacement your community needs to know where these
                  pipes are.
                </h2>
                <PageChangeButtons
                  showFirstOverlay={showFirstOverlay}
                  showSecondOverlay={showSecondOverlay}
                  showThirdOverlay={showThirdOverlay}
                  setFirstOverlay={setFirstOverlay}
                  firstOverlay={firstOverlay}
                  secondOverlay={secondOverlay}
                  thirdOverlay={thirdOverlay}
                />
                <button
                  className="bluebutton"
                  onClick={() => {
                    setSecondOverlay(false);
                    setThirdOverlay(true);
                  }}
                >
                  Next
                </button>
                <button
                  className="whitebutton"
                  onClick={() => setShowOverlay(false)}
                >
                  Skip
                </button>
              </div>
            </div>
            <div
              className="overlay3"
              style={{ display: thirdOverlay ? "block" : "none" }}
            >
              <img
                style={{ float: "right", margin: "5px" }}
                src="https://res.cloudinary.com/adelaney923/image/upload/v1661378258/X_moskof.png"
                alt="closeoverlaybutton"
                onClick={() => setShowOverlay(false)}
              />
              <div className="overlayelements">
                <img
                  src="https://res.cloudinary.com/adelaney923/image/upload/v1661372310/African_Mothers_with_kids_together_s4ydrd.png"
                  alt="familygathering"
                />
                <h1 className="overlayheader">What can you do right now?</h1>
                <h2 className="overlaytext">
                  Check the status of your water pipes and share our app to
                  spread awareness to encourage others to do the same!
                </h2>
                <PageChangeButtons
                  showFirstOverlay={showFirstOverlay}
                  showSecondOverlay={showSecondOverlay}
                  showThirdOverlay={showThirdOverlay}
                  setFirstOverlay={setFirstOverlay}
                  firstOverlay={firstOverlay}
                  secondOverlay={secondOverlay}
                  thirdOverlay={thirdOverlay}
                />
                <button
                  className="bluebutton"
                  onClick={() => setShowOverlay(false)}
                >
                  Explore Map
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {/* if showoverlay not true then show search form on map */}
        {!showOverlay ? (
          <>
            {/* <div className="mapinfo">
              <p>Info</p>
              <FontAwesomeIcon
                icon={faAngleDown}
                onClick={() => setShowInfo(true)}
              /> */}
            <div className="mapinfo">
              <p className="keytitle">Key:</p>
              <div className="legendcontainer">
                <div className="containerleft">
                  <div className="legenditem">
                    <div className="darkbluedot"></div>
                    <p>Assumed non-lead</p>
                  </div>
                  <div className="legenditem">
                    <div className="lightbluedot"></div>
                    <p>Likely non-lead</p>
                  </div>
                  <div className="legenditem">
                    <div className="yellowdot"></div>
                    <p>Unknown Lead Status</p>
                  </div>
                </div>

                <div className="containerright">
                  <div className="legenditem">
                    <div className="reddot"></div>
                    <p>Assumed lead</p>
                  </div>

                  <div className="legenditem">
                    <div className="orangedot"></div>
                    <p>Likely lead</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="searchform">
            <SearchAddress />
          </div> */}
            <div className="leadmap">
              <Map />
            </div>
            {/* <ShareButton /> */}

            {/* <div className="leadmap">
            <Map />
          </div> */}

            {/* <div className="searchform">
            <SearchAddress />
          </div> */}
          </>
        ) : null}
      </div>
      <div className="landing-footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LandingPage;
