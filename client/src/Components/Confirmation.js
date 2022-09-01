import React from "react";
import LaptopGirl from './Images/laptopgirl.png'


const Confirmation = () => {
    return(

        <div className="topmargin">
            <div className="page-template">
                
            <div topmargin="20px">
                <h1 className="title">
                    Your form was successfully submitted!{" "}
                </h1>
                </div>

            <br/>

            <div style={{marginTop: 25}}>
                <img
                    alt="Girl with laptop"
                    src={LaptopGirl}
                    width={335}
                    height={300}
                    />
                </div>

            <div style={{paddingTop: 20}}>
                <h1 className="supporting-text" >
                    {" "}
                    Thank you for your contribution. You're one step closer to a lead-free future!
                    </h1>
                </div>

            <div style={{marginTop: 25}}>
                <h1 className="headers">
                    What we are doing:
                    </h1>
                </div>

            <br/>

            <div style={{border: '1px solid grey', borderRadius: '15px', paddingBottom:'20px', paddingLeft:'20px', paddingTop:'20px', paddingRight:'20px'}}>
                <h1 className="feature-text-top">
                    We will reach out to you soon.
                    </h1>
                <h1 className="feature-text-bottom">
                    By checkthing the permission box on the form, we can now review your information and verify the likelihood of lead.
                    </h1>
                </div>

            <br/>

            <div>
                <h1>
                    What you can do: 
                    </h1>
                </div>

            <br/>

            <div style={{border: '1px solid grey', borderRadius: '15px', paddingBottom:'20px', paddingLeft:'20px', paddingTop:'20px', paddingRight:'20px'}}>
                <h1 className="feature-text-top">
                    Contact your local water system.
                    </h1>
                <h1 className="feature-text-bottom">
                    They can give you more information on how to receive water sampling kit to test your water.
                    </h1>
                </div>

            <br/>

            <div style={{border: '1px solid grey', borderRadius: '15px', paddingBottom:'20px', paddingLeft:'20px', paddingTop:'20px', paddingRight:'20px'}}>
                <h1 className="feature-text-top">
                    Filter water used for cooking and cleaning.
                    </h1>
                <h1 className="feature-text-bottom">
                    You can install point-of-use filter that has been certified to eliminate lead.
                    </h1>
                </div>

            <br/>

            <div style={{border: '1px solid grey', borderRadius: '15px', paddingBottom:'20px', paddingLeft:'20px', paddingTop:'20px', paddingRight:'20px'}}>
                <h1 className="feature-text-top">
                    Flush your water system before using.
                    </h1>
                <h1 className="feature-text-bottom">
                    Run the faucet with cold water for 5 minutes prior to use. 
                    </h1>
                </div>

            <br/>

            <div style={{border: '1px solid grey', borderRadius: '15px', paddingBottom:'20px', paddingLeft:'20px', paddingTop:'20px', paddingRight:'20px'}}>
                <h1 className="feature-text-top">
                    Share this map with others!
                    </h1>
                <h1 className="feature-text-bottom">
                    This will help us spread the word within the community.
                    </h1>
                </div>

            <br/>
            
        

                </div>

            </div>
    )
}

export default Confirmation;