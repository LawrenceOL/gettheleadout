import React from "react";
import { Link } from "react-router-dom";
import One from './Images/one.png'
import Two from './Images/two.png'
import YoungPeople from './Images/youngpeople.png'
import DataPic from './Images/datapic.png'

const GetChecked = () => {
    return(
        <div className="topmargin">
            <div className="page-template">

                <div topmargin="20px">
                    <h1 className="title">
                        Let's get your pipes checked {" "}
                        </h1>
                    </div>

                <div>
                    <h1 className="supporting-text">
                        {" "}
                        Add pictures of your water pipes so that we can tell you the likelihood of lead.
                        </h1>
                    </div>

                <div>
                    <h1 className="supporting-text">
                        Need help finding them?
                        </h1>
                    </div>


                <Link to="/howtocheckpipes">
                    How to Check My Pipes >
                    </Link>

                <br/>
                <div className="frame251">
                    <div className="frame257">
                        <div className="cta-section">
                            <div className="contact-text2">
                                <div className="frame255">
                                    <div className="frame250">
                                        <div className="featured-icon">
                                            <div className="number">
                                                <div className="number-detail">
                                                    <img
                                                        alt="One"
                                                        src={One}
                                                        // height={220}
                                                        // width={250}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="youngpeople">
                                            <img 
                                                alt="Young people"
                                                src={YoungPeople}
                                            />
                                            </div>
                                </div>
                                <div className="content1">
                                    <div className="alltext">
                                        <div className="text">
                                            Increase community awareness
                                            </div>
                                        <div className="supportingtext">
                                            Location of lead pipes have never been well-documented. Your involvement can work towards clean water for your entire community.
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        <div className="contact-text1">
                            <div className="frame256">
                                <div className="frame250-seconditem"> 
                                    <div className="frame214">
                                        <div className="feature-icon">
                                            <div className="number">
                                                <div className="number-detail">
                                                    <img
                                                    alt="Two"
                                                    scr={Two}
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="datapic">
                                        <img
                                        alt="data pic"
                                        src={DataPic}
                                        />
                                        </div>
                                </div>
                            <div className="content2">
                                <div className="alltext">
                                    <div className="text">
                                        Allow your local government to apply for funding
                                        </div>
                                    <div className="supportingtext">
                                        Your local water system needs your help in knowing for certain how many lead pipes there are. This is a required step to apply for funding to replace each one.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* <div>
                    <h1 className="headers">
                        Giving us more information about your water pipes will:
                        </h1>
                    </div> */}

                {/* <div>
                    <div className="numbered-sections">

                        <div className="item-1">
                            <img
                                alt="Number one"
                                src={One}
                                height={50}
                                width={50}
                                />
                             </div>

                    





                        </div>
                    </div> */}







                </div>
            </div>
    )
}

export default GetChecked;