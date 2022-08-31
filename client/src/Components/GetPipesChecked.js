import React from "react";
import { Link } from "react-router-dom";
import One from './Images/one.png'
import Two from './Images/two.png'
import YoungPeople from './Images/youngpeople.png'
import DataPic from './Images/datapic.png'

const GetChecked = () => {

    const URL = "https://form.jotform.com/222348879637169"; //embed URL

    return(
        <div className="topmargin">
            <div className="page-template">

                <div topmargin="20px">
                    <h1 className="title">
                        Let's get your pipes checked {" "}
                        </h1>
                    </div>

                <div style={{paddingTop: 20}}>
                    <h1 className="supporting-text" >
                        {" "}
                        Get involved to help your community progress towards a lead-free future.
                        </h1>
                    </div>

                <br/>

                <div style={{paddingTop: 10}}>
                    <h1 className="supporting-text" style={{paddingTop: 35}} >
                        {" "}
                        Need help finding them?
                       </h1>
                        <Link to="/howtocheckpipes">
                            How to check my pipes
                            </Link>
                    </div>


                <div style={{marginTop: 70}}>
                    <h1 className="headers">
                        Giving us more information about your water pipes will: {" "}
                        </h1>
                    </div>

                <br/>

                <div className="numbered-sections" style={{paddingTop: 10}}>
                    <div className="item-1"> 
                        <img
                            alt="Number one"
                            src={One}
                            height={50}
                            width={50}
                            />
                        </div>

                    <div className="item-2-pic">
                        <img
                            alt="People"
                            src={YoungPeople}
                            height={200}
                            width={300}
                            />
                        </div>


                    <div className="item-3">
                        <div style={{paddingLeft: 50}}>
                            <h1 className="feature-text-top">
                                Increase community awareness
                                </h1>
                            <h1 className="feature-text-bottom"> 
                                Locations of lead lines have never been weel-documented. Your involvement can maintain clean water for your entire community.
                                </h1>

                           </div> 
                        </div>

                    </div>
                
                <br/>

                <div className="numbered-sections" style={{paddingTop: 10}}>
                    <div className="item-1"> 
                        <img
                            alt="Number two"
                            src={Two}
                            height={50}
                            width={50}
                            />
                        </div>

                    <div className="item-2-pic">
                        <img
                            alt="Data"
                            src={DataPic}
                            height={200}
                            width={300}
                            />
                        </div>


                    <div className="item-3">
                        <div style={{paddingLeft: 50}}>
                            <h1 className="feature-text-top">
                                Allow your local government to apply for funding
                                </h1>
                            <h1 className="feature-text-bottom"> 
                                Your local water system needs your help in knowing for certain how many lead pipes there are. This is a required step to apply for funding to replace each one.
                                </h1>

                           </div> 
                        </div>

                    </div>

                <div style={{marginTop: 150}}>
                    <h1 className="headers">
                        Update us about your water pipes {" "}
                        </h1>
                    </div>
                <br/>
                <div>
                    <h1 className="feature-text-bottom-2"> 
                        This will spread awareness in your community and allow your local government to better apply for federal funding.
                        </h1>
                    </div>
                
                <br/>
                <div>
                    <iframe
                        className="jotform-iframe"
                        title="jotform-iframe"
                        src={URL}
                    ></iframe>
                    </div>

                    <div>
                        <h1 className="headers">
                            Still need help?
                            </h1>
                        <h1 className="feature-text-bottom">
                            <ol>
                                <li>Check out NPR's step by step guide</li>
                                <li>Contact your local water utility directly</li>
                                <li>Check out our FAQ page > for commonly asked questions and answers.</li>
                                </ol>
                            </h1>
                        </div>

                






                </div>

            </div> 

              
    )
}

export default GetChecked;