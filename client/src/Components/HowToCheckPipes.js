import React from "react";
import { FcTodoList, FcUpload } from "react-icons/fc";
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router'

const Check = () => {

    let navigate = useNavigate()

    return(
        <div className='topmargin overlay'>
            <div className='page-template'>
                <div topmargin='20px'>
                    <h1 className='title' > How to check for lead pipes </h1>
                </div>
                <div align='center' className='pictures-row' topmargin='20px'>
                    <div> 
                    <FcTodoList size={70}/>
                    </div>
                    <div>
                    <FcUpload size={70}/>
                    </div>
                </div>
                <div>
                    <h2 className='baby-title'> 1.) Follow our guided visual test below</h2>
                    <h3>Sample text where description of guided visual test will be displayed.</h3>
                </div>
                <div>
                    <h2 className='baby-title'> 2.) Upload a photo of your pipe</h2>
                    <h3>Sample text where instructions on how to upload a picture of your pipe will be displayed.</h3>
                </div>
                <div>
                    <h2 className='smaller-title'>Image of Lead pipe</h2>
                    <img alt='lead pipe' src={require('./Images/leadpipe.png').default} height={50} width={100}/>
                    <h2 className='smaller-title'>Another Image of a Lead Pipe</h2>
                    <img alt='lead pipe' src={require('./Images/leadpipe.png').default} height={50} width={100}/>
                </div>
                <div>
                    <h2 className='baby-title'> Steps to complete a visual test</h2>
                        <ol>
                            <li>Grab a magnet or a coin or a key for your test.</li>
                            <br/>
                            <li>Locate your water meter. From the meter, look where the service line enters the building, either in the wall or through the floor.</li>
                            <br/>
                            <li>Find the shut-off valve. Test the area between the shut-off valve and the wall or floor.</li>
                            <br/>
                            <li>Begin with the magnet test. Magnets will not stick to the lead or copper. Magnets will stick to steel. However, galvanized steel may contain lead inside. Further investigation is needed.</li>
                            <br/>
                            <li>If the magnet does not stick, try using a key or coin to scratch the pipe. A copper-colored scratch, means the pipe is copper. Note copper pipes can have lead solder.</li>
                            <br/>
                            <li>A shiny, silver scratch, indicates the pipe could be lead or galvanized steel. Replacement or further investigation is needed. Request a water testing kit to check for lead in your water.</li>
                            <br/>
                            <li>Wash your hands thoroughly with soap and water.</li>
                        </ol>
                </div>
                <div>
                    <h2 className='smaller-title'>Add a photo, make a big impact in your community.</h2>
                    <h3>By adding data, you help your community locate and remove lead pipes.</h3>
                        <Button variant="primary" onClick={()=>navigate('/contribute') }>Upload picture</Button> 
                 </div>
            </div>
        </div>
    );
};

export default Check