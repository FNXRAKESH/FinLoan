import React, { useState, useEffect } from 'react';
import './ManageEmployees.styles.scss';
import { motion } from 'framer-motion';
import { Col, Form, Row, Button } from 'react-bootstrap';
import save from '../../../images/save.png';
const CreateEmployees = () => {
  return (
    <div id="createEmployees" className="pl-5 mb-5">
      <h5 className="py-3">Create Employee</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div className="create w-100 mb-5">
          <Form>
            <h6>Employee Details</h6>
            <Row>
              <Col md>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Office</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Finexus Head Office</option>
                    <option>Finexus Branch 1</option>
                    <option>Finexus Branch 2</option>
                    <option>Finexus Branch 3</option>
                    <option>Finexus Branch 4</option>
                  </Form.Control>
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
                <Form.Group controlId="posting.currency">
                  <Form.Label>Is Loan Officer?</Form.Label>
                  <Form.Control as="select" custom>
                    <option>True</option>
                    <option>False</option>
                   
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Mobile Number for SMS</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Joined on</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
                

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

export default CreateEmployees;
