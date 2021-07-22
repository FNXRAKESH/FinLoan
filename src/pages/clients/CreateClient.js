import React, { useState, useEffect } from 'react';
import './Clients.styles.scss';
import { motion } from 'framer-motion';
import { Col, Form, Row, Button } from 'react-bootstrap';
import hide from '../../images/hide.png';
import show from '../../images/accounting/journal.svg';
import plusBlue from '../../images/plusBlue.png';
import close from '../../images/close.png';
import plusGreen from '../../images/plusGreen.png';
import { v4 as uuidv4 } from 'uuid';
import imageUpload from '../../images/imageUpload.png';
import dragndrop from '../../images/dragndrop.png';
import save from '../../images/save.png';
const CreateClient = () => {
  const [toggleFamily, setToggleFamily] = useState([]);

  useEffect(() => {
    setToggleFamily([...toggleFamily, <AddFamily />]);
  }, []);
  const AddFamily = () => {
    let id = uuidv4().toString();
    return (
      <div className="addFamilyMember" id={id}>
        <div className="d-flex align-itesm-center">
          <h5 className="pr-3">Family Member{'  '}</h5>
          {toggleFamily.length >= 1 ? (
            <img
              height={25}
              src={close}
              alt=""
              onClick={() => {
                if (toggleFamily.length >= 1)
                  document.getElementById(id).remove();
                else return;
              }}
            />
          ) : null}
        </div>
        <Row>
          <Col md>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Relationship</Form.Label>
              <Form.Control as="select" custom>
                <option>Spouse</option>
                <option>Son</option>
                <option>Daughter</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Is Independent?</Form.Label>
              <Form.Control as="select" custom>
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Marital Status</Form.Label>
              <Form.Control as="select" custom>
                <option>Single</option>
                <option>Married</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="posting.currency">
              <Form.Label>Middle Name</Form.Label>
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
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="posting.currency">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="posting.currency">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" custom>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control as="select" custom>
                <option>Under Graduate</option>
                <option>Post Graduate</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="posting.currency">
              <Form.Label>Profession</Form.Label>
              <Form.Control as="select" custom>
                <option>Salaried</option>
                <option>Business</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md></Col>
        </Row>
      </div>
    );
  };

  return (
    <div id="createClient" className="pl-5 mb-5">
      <h5 className="py-3">Create Client</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div className="create w-100 mb-5">
          <Form>
            <Row className="align-items-center">
              <Col md>
                <div className="d-flex align-items-center">
                  <div className="imageUpload">
                    <img src={imageUpload} alt="" height={30} />
                  </div>
                  <div className="pl-3">
                    <h6>Add Avatar</h6>
                    <p>
                      <small>
                        This picture will be used throughout all the systems
                      </small>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md>
                <div className="dragndrop d-flex flex-column align-items-center">
                  <div className="d-flex align-items-center mb-3">
                    <img src={dragndrop} alt="drag and drop" />
                    <p className="m-0 pl-3">Drag and drop image here</p>
                  </div>
                  <div>
                    <div
                      className="selectFile"
                      onClick={() => {
                        document.getElementById('uploadFile').click();
                      }}
                    >
                      Choose from computer
                    </div>
                    <Form.Group controlId="uploadFile" hidden>
                      <Form.Control
                        type="file"
                        accept="image/x-png,image/gif,image/jpeg"
                      ></Form.Control>
                    </Form.Group>
                  </div>
                </div>
              </Col>
            </Row>
            <hr />
            <h6>Office Details</h6>
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
                <Form.Group controlId="posting.currency">
                  <Form.Label>Staff</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Staff 1</option>
                    <option>Staff 2</option>
                    <option>Staff 3</option>
                    <option>Staff 4</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Legal Form</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Form 1</option>
                    <option>Form 2</option>
                    <option>Form 3</option>
                    <option>Form 4</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h6>Client Details</h6>
            <Row>
              <Col md>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Middle Name</Form.Label>
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
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Client Type</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Type 1</option>
                    <option>Type 2</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Client Classification</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Type 1</option>
                    <option>Type 2</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>External ID</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Client Status</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Active</option>
                    <option>Inactive</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Submitted On</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md></Col>
            </Row>
            <hr />
            <div className="d-flex align-items-center">
              <h5 className="py-3 pr-5">Family Members</h5>
              <div
                className="d-flex mr-4 addFamily align-items-center"
                onClick={() => {
                  setToggleFamily([...toggleFamily, <AddFamily />]);
                }}
              >
                <img src={plusBlue} alt="add" height={30} />
                <p className="m-0 pl-3">Add Family Member</p>
              </div>
            </div>

            {toggleFamily}

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

export default CreateClient;
