import React, {useState} from "react";
import Map from "./Map"
import SearchAddress from "./SearchAddress";
import "./LandingPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const [showOverlay, setShowOverlay] = useState(true)
  console.log(showOverlay)
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div id="landingpage">
      {/* if showoverlay is true show overlay */}
      {showOverlay ? (
        <div id="landingoverlay">
          <h1>Do you have lead pipes? Let us help you find out.</h1>
          <h2>Find out today with our interactive map.</h2>
          <button onClick={() => setShowOverlay(false)}>Explore the Map</button>
        </div>
      ) : null}

      <div className="leadmap">
        <Map />
      </div>
      
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
            {showInfo ? (
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
            )}
          </div>

          <div className="searchform">
            <SearchAddress />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default LandingPage;
