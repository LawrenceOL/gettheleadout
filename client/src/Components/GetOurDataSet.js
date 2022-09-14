import React from "react"
import emailjs from "@emailjs/browser";
import "./getourdataset.css"
import One from "./Images/one.png"
import Two from "./Images/two.png"
import DataPaperImg from "./Images/long data paper.png"
import Graph from "./Images/Falling graph.png"
import Footer from "./Footer";


const GetOurDataSet = () => {

    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();

    //   emailjs
    //     .sendForm(
    //       "GetTheLeadOut",
    //       "YOUR_TEMPLATE_ID",
    //       form.current,
    //       "YOUR_PUBLIC_KEY"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // };
    return (
      <div id="getourdata">
        <section className="getourdata">
          <h2>Get our Data Set.</h2>
          <p>
            Community leaders can view an up-to-date version of their city’s
            data.{" "}
          </p>
          <button className="bluebutton">
            <a
              href="https://drive.google.com/file/d/19Pqmp5JDlU-xoPGSzhRFBghNUybP97Du/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="buttonlink"
            >
              View Data Set
            </a>
          </button>
        </section>

        <section className="ourplatform">
          <h3>Our Platform:</h3>

          <img src={One} alt="numberone" />
          <img
            src={DataPaperImg}
            alt="datapaperimage"
            className="platformimages"
          />
          <div className="platformtext">
            <h5>Encourages open source data.</h5>
            <p>
              By crowd sourcing data through our survey we can accurately target
              lead pipes for replacement.
            </p>
          </div>

          <img src={Two} alt="numbertwo" />
          <img src={Graph} alt="graphimage" className="platformimages" />
          <div className="platformtext">
            <h5>Grant Applications Need Estimated Budgets</h5>
            <p>
              There are many types of grants available to assist or fully fund
              lead-pipe replacement, but all of them need for you to have an
              accurate inventory of lead-pipes in your location.
            </p>
          </div>
          <button className="bluebutton">Grants for Lead Pipe Replacement</button>
        </section>

        <Footer />
      </div>
    );
}

export default GetOurDataSet