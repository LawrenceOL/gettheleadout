import React from "react";
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router'

const GetInvolved = () => {

    let navigate = useNavigate()

    return(
        <div className='topmargin overlay'>
            <div className='page-template'>
                <div topmargin='20px'>
                    <h1 className='title'><b> How can you get involved? </b></h1> 
                </div>
                <div>
                    <h2 className='smaller-title'> Find out ways to get involved</h2>
                </div>
                <div>
                    <h2 className='baby-title'><b> How can you get involved? </b></h2>
                    <p> Get involved to help your community progress towards a lead-free future.</p>
                </div>

                <br/>

                <div>
                    <h2 className='baby-title'> Stay up-to-date on the impactlead pipes have in your community.</h2>
                    <p>Read through this site and explore our interactive map to understand the effects of lead pipe continue to have.</p>
                    <img alt='working man cartoon' src={require('./Images/workingman_cartoon.png').default} height={50} width={100}/>
                </div>
                <div>
                    <Button variant="primary" onClick={()=>navigate('/howtocheckpipes') } >How to check my pipes</Button>
                </div>

                <br/>

                <div>
                    <h2 className='baby-title'> Upload pictures of your water pipes to our platform. </h2>
                    <p>This allows us to update the map on the latest data, which in turn enables your local government to more easily receive funding. </p>
                    <img alt='man with camera cartoon' src={require('./Images/manWithCamera_cartoon.png').default} height={50} width={100}/>
                </div>
                <div>
                    <Button variant="primary" onClick={()=>navigate('/contribute') } >Upload picture</Button>
                </div>

                <br/>

                <div>
                    <h2 className='baby-title'> Share our interactive map to people in your community!</h2>
                    <p>We can only have a farther reach and impact with your help.</p>
                    <img alt='girl with megaphone' src={require('./Images/girlWithMegaphone_cartoon.png').default} height={50} width={100}/>
                </div>
            
    
            </div>
        </div>
    )
}

export default GetInvolved