import React, { useState, useEffect } from 'react';
import './Users.styles.scss';
import { motion } from 'framer-motion';
import { Col, Form, Row, Button } from 'react-bootstrap';

import { v4 as uuidv4 } from 'uuid';
import checkCircle from '../../images/checkCircle.png';
import addCircle from '../../images/plusBlue.png';
import save from '../../images/save.png';
const CreateUser = () => {
  const [roles, setRoles] = useState([]);
  const assignRoles = (e) => {
  const temp = [...roles];
  if (temp.includes(e)) {
    var index = temp.indexOf(e);
    if (index >= 0) {
      temp.splice(index, 1);
    }
   
    setRoles(temp);
  } else {
    setRoles([...roles, e]);
    }
    console.log(roles);
}
  return (
    <div id="createUser" className="pl-5 mb-5">
      <h5 className="py-3">Create User</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div className="create w-100 mb-5">
          <Form>
            <h6>User Details</h6>
            <Row>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>

              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Office</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Office 1</option>
                    <option>Office 2</option>
                    <option>Office 3</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Staff</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Staff 1</option>
                    <option>Staff 2</option>
                    <option>Staff 3</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <hr />
            <h6>Security Details</h6>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Auto Generate Password"
                name="autoGeneratePassword"
                // onChange={(e) => {
                //   handlleOnChange(e.target.name);
                // }}
              />
            </Form.Group>
            <Row>
              <Col md>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="pasword" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="pasword" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Override password expiry policy</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h5 className="py-3 pr-5">Edit Roles</h5>
            <div className="roleContainer d-flex align-items-center p-5 mb-5 flex-wrap">
              <div
                className="roles"
                style={
                  roles.includes('Loan Officer')
                    ? { backgroundColor: '#518EF8', color: '#fff' }
                    : { backgroundColor: '#deeafd', color: '#518ef8' }
                }
              >
                <p className="m-0 mr-2">Loan Officer</p>
                <img
                  src={roles.includes('Loan Officer') ? checkCircle : addCircle}
                  alt="add"
                  name="Loan Officer"
                  onClick={(e) => assignRoles(e.target.name)}
                />
              </div>
              <div
                className="roles"
                style={
                  roles.includes('Super User')
                    ? { backgroundColor: '#518EF8', color: '#fff' }
                    : { backgroundColor: '#deeafd', color: '#518ef8' }
                }
              >
                <p className="m-0 mr-2">Super user</p>
                <img
                  src={roles.includes('Super User') ? checkCircle : addCircle}
                  alt="add"
                  name="Super User"
                  onClick={(e) => assignRoles(e.target.name)}
                />
              </div>
              <div
                className="roles"
                style={
                  roles.includes('Admin')
                    ? { backgroundColor: '#518EF8', color: '#fff' }
                    : { backgroundColor: '#deeafd', color: '#518ef8' }
                }
              >
                <p className="m-0 mr-2">Admin</p>
                <img
                  src={roles.includes('Admin') ? checkCircle : addCircle}
                  alt="add"
                  name="Admin"
                  onClick={(e) => assignRoles(e.target.name)}
                />
              </div>
              <div
                className="roles"
                style={
                  roles.includes('Role 2')
                    ? { backgroundColor: '#518EF8', color: '#fff' }
                    : { backgroundColor: '#deeafd', color: '#518ef8' }
                }
              >
                <p className="m-0 mr-2">Role 2</p>
                <img
                  src={roles.includes('Role 2') ? checkCircle : addCircle}
                  alt="add"
                  name="Role 2"
                  onClick={(e) => assignRoles(e.target.name)}
                />
              </div>
              <div
                className="roles"
                style={
                  roles.includes('Role 3')
                    ? { backgroundColor: '#518EF8', color: '#fff' }
                    : { backgroundColor: '#deeafd', color: '#518ef8' }
                }
              >
                <p className="m-0 mr-2">Role 3</p>
                <img
                  src={roles.includes('Role 3') ? checkCircle : addCircle}
                  alt="add"
                  name="Role 3"
                  onClick={(e) => assignRoles(e.target.name)}
                />
              </div>
            </div>

            <div className="d-flex justify-content-end mb-5">
              <Button variant="light" className="mr-3">
                Cancel
              </Button>
              <div className="btnSubmit">
                <img src={save} alt="Save" />
                <p className="m-0 pl-2"> Submit</p>
              </div>
            </div>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateUser;
