import React from "react";
import { Link } from "react-router-dom";
import {Form, Button} from 'react-bootstrap'

const Contribute = () => {
  return (
    <div className='topmargin overlay'>
      <div className='page-template'>
        <div topmargin='20px'>
          <h1 className='title' > <b>Add your pipes to our map </b></h1>
        </div>
        <div>
          <h4>Add pictures of your water pipes to keep our system up to date.</h4>
        </div>
        <br/>
        <div>
          <h3 textDecoration='bold'> <b>Need help finding them?</b></h3>
          <Link to='/howtocheckpipes'>How to check my pipes</Link>
        </div>
        <br/>
        <div>
          <h2 className='baby-title'>Uploading pictures of your water pipes, will:</h2>
        </div>
        <div>
          <h4>Increase community awareness.</h4>
          <p>Locations of lead lines have never been weel-documented. Your involvement can maintain clean water for your entire community.</p>
          <br/>
          <h4>Give your local government the data to apply for funding.</h4>
          <p>Your local government needs your help to know the amount of lead pipes in your area to apply for federal funds available for replacement programs.</p>
        </div>
        <div>
          <h2 className='baby-title'>Uploading pictures of your water pipes, will:</h2>
          <p>This will spread awareness in your community and allow your local government to better apply for federal funding.</p>
        </div>
        <div>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="name" placeholder="Full name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Street Address</Form.Label>
              <Form.Control type="address" placeholder="Street Address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control type="city" placeholder="City" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>State</Form.Label>
              <Form.Control type="state" placeholder="Choose from dropdown" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control type="zipcode" placeholder="Zipcode" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="zipcode" placeholder="*need icon here* Email Adress" />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Click to upload</Form.Label>
              <Form.Control type="file" />
          </Form.Group>

          {['Confirm information is accurate', 'Allow local engineer to evaluate picture'].map((type) => (
          <div key={`${type}`} className="mb-3">
            <Form.Check 
              type={type}
              id={`${type}`}
              label={`${type}`}
            />
          </div>
          ))}

          <Button className='enter pull-right' variant="primary" type="submit" align='right'> 
            Submit
          </Button>



          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
