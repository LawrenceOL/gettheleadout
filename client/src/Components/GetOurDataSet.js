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
          <h2>Get our data set.</h2>
          <p>
            Community leaders can view an up-to-date version of their city’s
            data.{" "}
          </p>
          <button className="getdatabutton">
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
          <img src={DataPaperImg} alt="datapaperimage" />
          <h5>Encourages open source data.</h5>
          <p>
            By crowd sourcing data through our survey we can accurately target
            lead pipes for replacement.
          </p>

          <img src={Two} alt="numbertwo" />
          <img src={Graph} alt="graphimage" />
          <h5>
            Examines high-impact variables to determine the probability of lead
          </h5>
          <p>
            We built a model that included all of the variables that had high
            correlations to lead pipes in one’s home.
          </p>
        </section>

        <Footer />
      </div>
    );
}

export default GetOurDataSet