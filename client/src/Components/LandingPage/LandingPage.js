import React, {useState} from "react";
import Map from "./Map"
import SearchAddress from "./SearchAddress";
import PageChangeButtons from "./PageChangeButtons";
import "./LandingPage.css"
import { StickyShareButtons } from "sharethis-reactjs";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { InlineShareButtons } from "sharethis-reactjs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const [showOverlay, setShowOverlay] = useState(true)
  const [showInfo, setShowInfo] = useState(false)
  const [firstOverlay, setFirstOverlay] = useState(true)
  const [secondOverlay, setSecondOverlay] = useState(false)
  const [thirdOverlay, setThirdOverlay] = useState(false)

  const showFirstOverlay = () => {
    setFirstOverlay(true);
    setSecondOverlay(false);
    setThirdOverlay(false);
  }
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
    <div id="landingpage">
      {/* if showoverlay is true show overlay */}
      {showOverlay ? (
        <div id="landingoverlay">
          {/* replace this image with actual image of our map
          <img src="https://res.cloudinary.com/adelaney923/image/upload/v1661372495/IMG_0033_1_jhmvfd.png" alt="mapimage" /> */}
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
                Our map predicts the chances of lead pipes, but we have step by
                step instructions so you can find out for sure.
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
              <h1 className="overlayheader">What if you do have lead pipes?</h1>
              <h2 className="overlaytext">
                There is funding available specifically for lead pipe
                replacement. In order for your local water system to secure this
                funding, they need to know where lead pipes are.
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
                Share our map to spread awareness of this problem and the
                solution!
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
                  <p>Confirmed non-lead</p>
                </div>
                <div className="legenditem">
                  <div className="lightbluedot"></div>
                  <p>Assumed non-lead</p>
                </div>
              </div>

              <div className="containerright">
                <div className="legenditem">
                  <div className="reddot"></div>
                  <p>Confirmed lead</p>
                </div>

                <div className="legenditem">
                  <div className="orangedot"></div>
                  <p>Assumed lead</p>
                </div>
              </div>
            </div>
          </div>

          <div className="searchform">
            <SearchAddress />
          </div>
          <div className="leadmap">
            <Map />
          </div>
          <StickyShareButtons
            config={{
              alignment: "left", // alignment of buttons (left, right)
              color: "social", // set the color of buttons (social, white)
              enabled: true, // show/hide buttons (true, false)
              font_size: 16, // font size for the buttons
              hide_desktop: false, // hide buttons on desktop (true, false)
              labels: "counts", // button labels (cta, counts, null)
              language: "en", // which language to use (see LANGUAGES)
              min_count: 100, // hide react counts less than min_count (INTEGER)
              networks: [
                // which networks to include (see SHARING NETWORKS)
                "linkedin",
                "facebook",
                "twitter",
              ],
              padding: 12, // padding within buttons (INTEGER)
              radius: 4, // the corner radius on each button (INTEGER)
              show_total: true, // show/hide the total share count (true, false)
              show_mobile: true, // show/hide the buttons on mobile (true, false)
              show_toggle: true, // show/hide the toggle buttons (true, false)
              size: 48, // the size of each button (INTEGER)
              top: 160, // offset in pixels from the top of the page

              // OPTIONAL PARAMETERS
              url: "https://github.com/LawrenceOL/productclubteam3", // (defaults to current url)
              image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
              description: "custom text", // (defaults to og:description or twitter:description)
              title: "custom title", // (defaults to og:title or twitter:title)
              message: "custom email text", // (only for email sharing)
              subject: "custom email subject", // (only for email sharing)
              username: "custom twitter handle", // (only for twitter sharing)
            }}
          />

          {/* <div className="leadmap">
            <Map />
          </div> */}

          {/* <div className="searchform">
            <SearchAddress />
          </div> */}
        </>
      ) : null}
    </div>
  );
};

export default LandingPage;
