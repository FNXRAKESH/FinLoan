import React, { useState } from 'react';
import './ManageOffice.styles.scss';
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
  faSearch,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import checkCircle from '../../../images/checkCircle.png';
import addCircle from '../../../images/plusBlue.png';
import blueCheck from '../../../images/blueCheck.png';
import deleteOffice from '../../../images/delete.png';
import settings from '../../../images/settings.png';
import edit from '../../../images/edit.png';
import save from '../../../images/save.png';
import swal from 'sweetalert';
import close from '../../../images/closeWhite.png';
var content;
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};
const data = [
  {
    officeName: 'Finexus Bangalore Office',
    ExtId: '4',
    parentOffice: 'Finexus Head Office',
    openedOn: '26 Feb 2021'
  },
  {
    officeName: 'Finexus Head Office',
    ExtId: '1',
    parentOffice: 'Finexus Head Office',
    openedOn: '26 Feb 2020'
  },
  {
    officeName: 'Finexus Chennai Office',
    ExtId: '3',
    parentOffice: 'Finexus Head Office',
    openedOn: '26 Jan 2021'
  },
  {
    officeName: 'Finexus US Office',
    ExtId: '2',
    parentOffice: 'Finexus Head Office',
    openedOn: '26 Mar 2021'
  }
];
const OfficeDetails = (props) => {
  const [del, setDel] = useState(false);
  const [editDetails, setEditDetails] = useState(false);
  const [roles, setRoles] = useState([]);
  const [context, setContext] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [addedClient, setAddedClient] = useState([]);
  const searchName = (e) => {
    console.log('e ', e);
    if (e === '') {
      setSearchResult([]);
    } else {
      let res = data.filter((obj) => {
        return obj.officeName.toLowerCase().includes(e.toLowerCase());
      });
      console.log('res ', res);
      setSearchResult(res);
    }
  };
  const removeName = (client) => {
    const filteredItems = addedClient.filter((item) => item !== client);
    setAddedClient(filteredItems);
  };
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

  const office = props.location.state.office;

  if (context === 'edit')
    content = (
      <Form>
        <h6>Edit Office</h6>
        <Row>
          <Col md>
            <Form.Group controlId="posting.currency">
              <Form.Label>Office</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Opened On</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Form.Group controlId="posting.currency">
              <Form.Label>External ID</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col md></Col>
        </Row>
        <hr />
        <h5 className="py-3 pr-5">Branch Offices</h5>
        <div className="roleContainer d-flex align-items-center p-5 mb-5 flex-wrap">
          <div
            className="roles"
            style={
              roles.includes('Finexus Bangalore Office')
                ? { backgroundColor: '#518EF8', color: '#fff' }
                : { backgroundColor: '#deeafd', color: '#518ef8' }
            }
          >
            <p className="m-0 mr-2">Finexus Bangalore Office</p>
            <img
              src={
                roles.includes('Finexus Bangalore Office')
                  ? checkCircle
                  : addCircle
              }
              alt="add"
              name="Finexus Bangalore Office"
              onClick={(e) => assignRoles(e.target.name)}
            />
          </div>
          <div
            className="roles"
            style={
              roles.includes('Finexus Chennai Office')
                ? { backgroundColor: '#518EF8', color: '#fff' }
                : { backgroundColor: '#deeafd', color: '#518ef8' }
            }
          >
            <p className="m-0 mr-2">Finexus Chennai Office</p>
            <img
              src={
                roles.includes('Finexus Chennai Office')
                  ? checkCircle
                  : addCircle
              }
              alt="add"
              name="Finexus Chennai Office"
              onClick={(e) => assignRoles(e.target.name)}
            />
          </div>
          <div
            className="roles"
            style={
              roles.includes('Finexus US Office')
                ? { backgroundColor: '#518EF8', color: '#fff' }
                : { backgroundColor: '#deeafd', color: '#518ef8' }
            }
          >
            <p className="m-0 mr-2">Finexus US Office</p>
            <img
              src={
                roles.includes('Finexus US Office') ? checkCircle : addCircle
              }
              alt="add"
              name="Finexus US Office"
              onClick={(e) => assignRoles(e.target.name)}
            />
          </div>
        </div>

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
    );
  else {
    content = (
      <>
        <h6>Manage Branch Offices</h6>
        <div id="manageOffice" className="py-2">
          <Form className="search align-items-center py-4 mx-auto">
            <InputGroup className="mb-2 ">
              <InputGroup.Prepend>
                <InputGroup.Text className="searchIcon">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                className="searchInput"
                id="inlineFormInputGroup"
                placeholder="Search Office..."
                onChange={(e) => {
                  searchName(e.target.value);
                  setSearchValue(e.target.value);
                }}
                value={searchValue}
                autoComplete="off"
              />
            </InputGroup>
            <div className="searchResult">
              {searchResult &&
                searchResult.map((search, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Row className=" p-3">
                        <Col>
                          <p className="m-0">{search.officeName}</p>
                        </Col>

                        <Col xs={2}>
                          <div
                            className="btnAdd"
                            onClick={() => {
                              setSearchValue('');
                              setSearchResult([]);
                              if (addedClient.includes(search)) {
                                swal({
                                  icon: 'error',
                                  title: 'You have already added this branch'
                                });
                              } else {
                                setAddedClient([...addedClient, search]);
                              }
                            }}
                          >
                            + Add
                          </div>
                        </Col>
                      </Row>
                    </motion.div>
                  );
                })}
            </div>
          </Form>
          {addedClient.length > 0 ? <h6>Active Branches</h6> : null}
          <div
            className="addedoffice"
            style={
              addedClient.length === 0
                ? null
                : {
                    backgroundColor: '#eef4fe',
                    borderRadius: 10,
                    border: '1px solid #518ef8',
                    padding: 20
                  }
            }
          >
            {addedClient.map((client, index) => {
              return (
                <div className="d-flex align-items-center" key={index}>
                  <p className="m-0 px-2">{client.officeName}</p>
                  <img
                    src={close}
                    alt="close"
                    height={20}
                    onClick={(e) => {
                      removeName(client);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <div id="officeDetails" className="pl-5">
      <div className="py-3 d-flex">
        <h5 className="flex-grow-1">{office.officeName}</h5>
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
                {office.officeName.charAt(0)}
              </h1>
              <h6 className="pt-3 text-center">{office.officeName}</h6>
              <p className="text-center">
                <small>{office.parentOffice}</small>
              </p>

              <hr />
              <div>
                <div
                  className="d-flex align-items-center py-2"
                  onClick={() => {
                    setEditDetails(true);
                    setContext('edit');
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={edit} alt="edit" />
                  <p className="mb-0 flex-grow-1 text-left pl-2">Edit Office</p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div
                  className="d-flex align-items-center py-2"
                  onClick={() => {
                    setEditDetails(true);
                    setContext('manage');
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={settings} alt="edit" />
                  <p className="mb-0 flex-grow-1 text-left pl-2">
                    Manage Branch Offices
                  </p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div
                  className="d-flex align-items-center py-2"
                  onClick={() => setDel(true)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={deleteOffice} alt="edit" />
                  <p className="mb-0 flex-grow-1 text-left pl-2">
                    Delete Office
                  </p>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
          </Col>
          <Col md={8} className="align-self-stretch align-items-center">
            <div
              id="editOffice"
              className="bg-white p-3 h-100"
              style={{ borderRadius: 15 }}
            >
              {!editDetails ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="d-flex flex-column justify-content-center h-100"
                >
                  <h6>Office Details</h6>
                  <Row>
                    <Col md>
                      <div className="officeDetails">
                        <p className="m-0">
                          <small>Parent Office</small>
                        </p>
                        <h6>{office.parentOffice}</h6>
                      </div>
                    </Col>
                    <Col md>
                      <div className="officeDetails">
                        <p className="m-0">
                          <small>Opened On</small>
                        </p>
                        <h6>{office.openedOn}</h6>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md>
                      <div className="officeDetails">
                        <p className="m-0">
                          <small>Name Decorated</small>
                        </p>
                        <h6>{office.officeName}</h6>
                      </div>
                    </Col>
                    <Col md>
                      <div className="officeDetails">
                        <p className="m-0">
                          <small>External ID</small>
                        </p>
                        <h6>{office.ExtId}</h6>
                      </div>
                    </Col>
                  </Row>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="create w-100 mb-5"
                >
                  {content}
                </motion.div>
              )}
            </div>
          </Col>
        </Row>

        <Modal show={del} onHide={() => setDel(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Delete Office?</Modal.Title>
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

export default OfficeDetails;
