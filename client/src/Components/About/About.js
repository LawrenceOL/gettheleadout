import React from "react";
import Factory from "../Images/factory.png";
import Phone from "../Images/phone.png";
import IncomeMap from "../Images/IncomeMap.png";
import "./about.css"
import Footer from "../Footer";

const About = () => {
  return (
    <div id="aboutsection">
      <h1 className="abouttitle">About us</h1>
      <p className="aboutsubtitle">Let's take you to where this all started.</p>

      <div className="abouttext">
        <p>
          Since Flint, Michigan's water crisis hit headlines in 2015, we woke up
          to the serious health risk lead pipes pose. Through reseach we found
          that every state in the nation has lead problems. However, folks
          rarely know their exposure risk as inventory of locations of lead
          service lines (LSL) have never been mandated, until recently, and
          records have not been well-kept initiatives across the U.S.
        </p>
      </div>

      <img alt="factory" src={Factory} className="factoryimage" />

      <div className="ourorigins">
        <h1 className="sectiontitle">Our origins:</h1>

        <div className="originstext">
          <p>
            With the passing of the Bipartisan Infrastructure Law, states now
            have the opportunity to access funding for lead pipe replacement.
            But often communities with the greatest need, have the fewest
            resources to conduct inventories which are critical to applying for
            funding. Mapping lines requires the cooperation of both public
            utilities and residents.
          </p>
          <p>
            To help small communities, with limited resources create
            inventories, we envisioned a map that utilized crowd-sources data
            and open-source data to engage communities in collective
            participation in the LSL mapping. We hope it educates and empowers
            residents, provides information that cities can use for funding, and
            provides open-source data for academics and researchers to utilize
            in tackling clean water initiatives across the U.S.
          </p>
        </div>

        <div className="imgcontainer">
          <img alt="phone" src={Phone} className="phoneimage" />
        </div>
      </div>

      <div className="datasection">
        <h1 className="sectiontitle">Data case study:</h1>

        <div className="datatext">
          <p>
            Our Data Team used two data sets to analyze the city of Hazel Crest,
            IL and predict whether or not an address was likely to have LSL.
          </p>
          <p>
            The variables with the strongest negative correlations were the
            estimated year of construction, median household income, size of the
            home (square feet), and the market value of the home. That means as
            each of these variables decreases the probability of lead increases.
          </p>
          <p>
            Our goal is to encourage open source data reporting through our
            survey to help communities more accurately target their lead
            problems.
          </p>
          <p>
            View our Hazelcrest visualization{" "}
            <a
              href="https://public.tableau.com/app/profile/cristinalara/viz/HazelCrestLeadAnalysis_16614458537570/DASHBOARD"
              target="_blank"
              rel="noreferrer"
              className="aboutlinks"
            >
              here
            </a>{" "}
            Read the full case study{" "}
            <a href="" className="aboutlinks">
              here
            </a>
          </p>
        </div>

        <img alt="Income Map" src={IncomeMap} height={200} width={350} />
      </div>

      <div className="whatsnext">
        <h1 className="sectiontitle" style={{ paddingTop: 50 }}>
          What's next?
        </h1>

        <div className="whatsnexttext">
          <p>
            We see opportunities to incorporate AI to help residents more
            accurately identify their lead pipes via submitted photos
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
