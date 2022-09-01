import React from "react"
import emailjs from "@emailjs/browser";


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
        <div>
            <h2>Get our data set emailed to you.</h2>
            <h6>Community leaders can get sent an up-to-date version of their city’s data. </h6>
        </div>
    )
}

export default GetOurDataSet