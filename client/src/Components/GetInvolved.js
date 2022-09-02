import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import WorkingMan from './Images/workingman_cartoon.png'
import CameraMan from './Images/manWithCamera_cartoon.png'
import TwoPeople from './Images/twopeople_cartoon.png'
import One from './Images/one.png'
import Two from './Images/two.png'
import Three from './Images/three.png'

const GetInvolved = () => {
  let navigate = useNavigate();

  return (
    <div className="topmargin">
      <div className="page-template">

          <div topmargin="20px">
              <h1 className="title">
                How can you get involved? {" "}
                </h1>
              </div>


          <div style={{paddingTop: 20}}>
            <h1 className="supporting-text" >
              {" "}
              Get involved to help your community progress towards a lead-free
              future.
            </h1>
            </div>

           <br />

            <div className="numbered-sections" style={{paddingTop: 20}}>

                <div className="item-1">
                  <img
                    alt="Number one"
                    src={One}
                    height={50}
                    width={50}
                  />
                  </div>

                <div className="item-2">
                    <h1 className="feature-text-top">
                      {" "}
                      Stay up-to-date on the impactlead pipes have in your community.
                      </h1>
                    <h1 className="feature-text-bottom" style={{paddingTop: 20}}>
                      Contact your local water utilities or local officials and find out about on-going or up-coming initiatives.
                      </h1>
                    </div>

              </div>
           
            <div className="center">
              <img  alt="Working man" src={WorkingMan} height={239} width={300}/>
            </div>

            <div className="center">
              <Button variant="primary" size="lg" onClick={() => navigate("/howtocheckpipes")}>
                How to check my pipes
              </Button>
            </div>
         

        <br />

        
          <div className="numbered-sections" style={{paddingTop: 20}}> 

              <div className="item-1">
                <img
                  alt="Number two"
                  src={Two}
                  height={50}
                  width={50}
                  />
                </div>

              <div className="item-2">
                <h1 className="feature-text-top">
                  {" "}
                  Upload pictures of your water pipes to our platform.
                </h1>
                <h1 className="feature-text-bottom">
                  This allows us to update the map on the latest data, which in turn
                  enables your local government to more easily receive funding.{" "}
                </h1>
                </div>

          </div>
       
            <div className="center">
              <img
                alt="man with camera cartoon"
                src={CameraMan}
                height={250}
                width={300}
              />
              </div>

            <div className="center">
              <Button variant="primary" size="lg" onClick={() => navigate("/getpipeschecked")} block>
                Put your pipes on the map
              </Button>
            </div>
       

        <br />

        <div>
          <div className="numbered-sections-small" style={{paddingTop: 20}} >

              <div className="item-1">
                <img
                    alt="Number three"
                    src={Three}
                    height={50}
                    width={50}
                    />
                </div>

              <div className="item-2">
                <h1 className="feature-text-top">
                {" "}
                  Share our interactive map to people in your community!
                 </h1>
                  <h1 className="feature-text-bottom">
                  We can only have a farther reach and impact with your help.
                  </h1>
                </div>
              </div>

            <div className="center">
                <img
                  alt="two people"
                  src={TwoPeople}
                  height={220}
                  width={240}
                />
            </div>
    
        </div>

        <br />
      </div>
    </div>
  );
};

export default GetInvolved;
