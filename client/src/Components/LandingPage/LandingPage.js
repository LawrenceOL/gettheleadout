import React, {useState} from "react";
import Map from "./Map"
import SearchAddress from "./SearchAddress";
import "./LandingPage.css"
import { StickyShareButtons } from "sharethis-reactjs";
import { InlineShareButtons } from "sharethis-reactjs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const [showOverlay, setShowOverlay] = useState(true)
  const [showInfo, setShowInfo] = useState(false)
  const [firstOverlay, setFirstOverlay] = useState(true)
  const [secondOverlay, setSecondOverlay] = useState(false)
  const [thirdOverlay, setThirdOverlay] = useState(false)

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
              className="overlayimg"
              src="https://res.cloudinary.com/adelaney923/image/upload/v1661372204/map_1_kz6tpw.png"
              alt="mapimage"
            />
            <h1 className="overlayheader">Are there leadpipes in your home?</h1>
            <h2 className="overlaytext">
              Use our interactive map to search any residence and get-up-to-date
              with lead pipes in your community.
            </h2>
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

          <div
            className="overlay2"
            style={{ display: secondOverlay ? "block" : "none" }}
          >
            <img
              src="https://res.cloudinary.com/adelaney923/image/upload/v1661372255/Online_consultation_jpaa4s.png"
              alt="persononcomputer"
            />
            <h1 className="overlayheader">Help your local government.</h1>
            <h2 className="overlaytext">
              Record the number of lead pipes in your community in order to
              apply for funding.
            </h2>
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

          <div
            className="overlay3"
            style={{ display: thirdOverlay ? "block" : "none" }}
          >
            <img
              src="https://res.cloudinary.com/adelaney923/image/upload/v1661372310/African_Mothers_with_kids_together_s4ydrd.png"
              alt="familygathering"
            />
            <h1 className="overlayheader">Increase community awareness.</h1>
            <h2 className="overlaytext">
              By finding out who may be affected and spreading the word.
            </h2>
            <button
              className="bluebutton"
              onClick={() => setShowOverlay(false)}
            >
              Explore Map
            </button>
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
            <p>legend will go here</p>
            {/* <div className="leadmap">
              <Map />
            </div> */}
            {/* {showInfo ? (
              // <div className="mapinfo">
              <>
                <h5>
                  Search your address to get up to date information on the
                  likelihood of lead pipes in your home.
                </h5>
                <h6>See more about our data and methods.</h6>
                <FontAwesomeIcon
                  icon={faAngleUp}
                  onClick={() => setShowInfo(false)}
                />
              </>
            ) : (
              // </div>
              // <div className="mapinfo">
              <>
                <p>Info</p>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  onClick={() => setShowInfo(true)}
                />
              </>
              // </div>
            )} */}
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
                "email",
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
          {/* <InlineShareButtons
            config={{
              alignment: "center", // alignment of buttons (left, center, right)
              color: "social", // set the color of buttons (social, white)
              enabled: true, // show/hide buttons (true, false)
              font_size: 12, // font size for the buttons
              labels: "cta", // button labels (cta, counts, null)
              language: "en", // which language to use (see LANGUAGES)
              networks: [
                // which networks to include (see SHARING NETWORKS)
                "linkedin",
                "facebook",
                "twitter",
              ],
              padding: 12, // padding within buttons (INTEGER)
              radius: 4, // the corner radius on each button (INTEGER)
              show_total: true,
              size: 40, // the size of each button (INTEGER)

              // OPTIONAL PARAMETERS
              url: "https://github.com/LawrenceOL/productclubteam3", // (defaults to current url)
              image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
              description: "custom text", // (defaults to og:description or twitter:description)
              title: "custom title", // (defaults to og:title or twitter:title)
              message: "custom email text", // (only for email sharing)
              subject: "custom email subject", // (only for email sharing)
              username: "custom twitter handle", // (only for twitter sharing)
            }}
          /> */}
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
