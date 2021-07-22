import React, { useState } from 'react';
import './ManageEmployees.styles.scss';
import { motion } from 'framer-motion';
import {
  InputGroup,
  Form,
  FormControl,
  Button,
  Modal,
  Row,
  Col
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faChevronDown,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import checkCircle from '../../../images/checkCircle.png';
import addCircle from '../../../images/plusBlue.png';
import blueCheck from '../../../images/blueCheck.png';
import deleteUser from '../../../images/delete.png';
import lock from '../../../images/lock.png';
import edit from '../../../images/edit.png';
import save from '../../../images/save.png';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};
const EmployeeDetails = (props) => {
  const [show, setShow] = useState(false);
  const [del, setDel] = useState(false);
  const [editDetails, setEditDetails] = useState(false);
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
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = props.location.state.user;
  return (
    <div id="EmployeeDetails" className="pl-5">
      <div className="py-3 d-flex">
        <h5 className="flex-grow-1">
          {user.FirstName} {user.LastName}
        </h5>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <Row className="w-100">
          <Col md={4} className="align-self-stretch">
            <div
              className="  bg-white p-3 text-center"
              style={{ borderRadius: 15 }}
            >
              <h1
                className="initial text-center"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  backgroundColor: getRandomColor(),
                  margin: '0 auto'
                }}
              >
                {user.FirstName.charAt(0)}
              </h1>
              <h6 className="pt-3 text-center">
                {user.FirstName} {user.LastName}
              </h6>
              <p className="text-center">
                <small>{user.Email}</small>
              </p>
              <div className="d-flex mb-5 flex-wrap justify-content-center">
                <div
                  className="roles"
                  style={{
                    backgroundColor: '#deeafd',
                    color: '#518ef8',
                    border: 0
                  }}
                >
                  <p className="m-0 mr-2">Loan Officer</p>
                  <img src={blueCheck} alt="add" name="Loan Officer" />
                </div>
              </div>
              <hr />
              <div>
                <div
                  className="d-flex align-items-center py-2"
                  onClick={() => setEditDetails(true)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={edit} alt="edit" />
                  <p className="mb-0 flex-grow-1 text-left pl-2">Edit Employee</p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div
                  className="d-flex align-items-center py-2"
                  onClick={() => handleShow()}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={lock} alt="edit" />
                  <p className="mb-0 flex-grow-1 text-left pl-2">
                                      Change Status
                  </p>
                                  <p className={user.Status === 'Active' ? 'active' : 'inActive'}>{user.Status}</p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div
                  className="d-flex align-items-center py-2"
                  onClick={() => setDel(true)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={deleteUser} alt="edit" />
                  <p className="mb-0 flex-grow-1 text-left pl-2">Delete Employee</p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
          </Col>
          <Col md={8} className="align-self-stretch align-items-center">
            <div
              id="editEmployee"
              className="bg-white p-3 h-100"
              style={{ borderRadius: 15 }}
            >
              {!editDetails ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="d-flex flex-column justify-content-center h-100"
                >
                  <h6>Employee Details</h6>
                  <Row>
                    <Col md>
                      <div className="EmployeeDetails">
                        <p className="m-0">
                          <small>First Name</small>
                        </p>
                        <h6>{user.FirstName}</h6>
                      </div>
                    </Col>
                    <Col md>
                      <div className="EmployeeDetails">
                        <p className="m-0">
                          <small>last Name</small>
                        </p>
                        <h6>{user.LastName}</h6>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md>
                      <div className="EmployeeDetails">
                        <p className="m-0">
                          <small>Office</small>
                        </p>
                        <h6>{user.Office}</h6>
                      </div>
                    </Col>
                    <Col md>
                      <div className="EmployeeDetails">
                        <p className="m-0">
                          <small>is Loan Officer</small>
                        </p>
                        <h6>{user.isLoanOfficer}</h6>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md>
                      <div className="EmployeeDetails">
                        <p className="m-0">
                          <small>Mobile Number for SMS</small>
                        </p>
                        <h6>{user.Phone}</h6>
                      </div>
                    </Col>
                    <Col md>
                      <div className="EmployeeDetails">
                        <p className="m-0">
                          <small>Status</small>
                        </p>
                        <h6>{user.Status}</h6>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md>
                      <div className="EmployeeDetails">
                        <p className="m-0">
                          <small>Joined On</small>
                        </p>
                        <h6>{user.JoinedOn}</h6>
                      </div>
                    </Col>
                    <Col md></Col>
                  </Row>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="create w-100 mb-5"
                >
                  <Form>
                    <h6>Edit Employee</h6>
                    <Row>
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
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Group controlId="posting.currency">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col md>
                        <Form.Group controlId="posting.currency">
                          <Form.Label>Is Loan Officer?</Form.Label>
                          <Form.Control as="select" custom>
                            <option>Yes</option>
                            <option>No</option>
                          </Form.Control>
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
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Group controlId="posting.currency">
                          <Form.Label>Status</Form.Label>
                          <Form.Control as="select" custom>
                            <option>Active</option>
                            <option>Inactive</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col md>
                        <Form.Group controlId="posting.currency">
                          <Form.Label>Joined On</Form.Label>
                          <Form.Control type="date" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <div className="d-flex justify-content-end mb-5">
                      <Button
                        variant="light"
                        className="mr-3"
                        onClick={() => setEditDetails(false)}
                      >
                        Cancel
                      </Button>
                      <div className="btnSubmit">
                        <img src={save} alt="Save" />
                        <p className="m-0 pl-2"> Submit</p>
                      </div>
                    </div>
                  </Form>
                </motion.div>
              )}
            </div>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Change Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="posting.currency">
                <Form.Label>Select Status</Form.Label>
                <Form.Control as="select" custom>
                  <option>Active</option>
                  <option>Inactive</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <div
              className="btnSubmit w-100"
              onClick={() => {
                handleClose();
              }}
            >
              <p className="m-0 text-center w-100">Change Status</p>
            </div>
          </Modal.Footer>
        </Modal>
        <Modal show={del} onHide={() => setDel(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Delete Employee?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              id="btnDelete"
              className="btnSubmit w-100 mb-3"
              onClick={() => {
                setDel(false);
              }}
            >
              <p className="m-0 text-center w-100">Yes, Delete</p>
            </div>
            <div
              id="btnCancel"
              className="btnSubmit w-100"
              onClick={() => {
                setDel(false);
              }}
            >
              <p className="m-0 text-center w-100">No, Keep It</p>
            </div>
          </Modal.Body>
        </Modal>
      </motion.div>
    </div>
  );
};

export default EmployeeDetails;
