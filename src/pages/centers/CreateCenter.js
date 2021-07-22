import React, { useState, useEffect } from 'react';
import './Centers.styles.scss';
import { motion } from 'framer-motion';
import { Col, Form, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import close from '../../images/close.png';
import { v4 as uuidv4 } from 'uuid';
import save from '../../images/save.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    Id: 'Center 1',
    Account: '#002145887',
    ExtId: '#002145887',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 2',
    Account: '#002145888',
    ExtId: '#002145888',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 3',
    Account: '#002145885',
    ExtId: '#002145885',
    Status: 'Inactive',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 4',
    Account: '#002145884',
    ExtId: '#002145884',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 5',
    Account: '#002145883',
    ExtId: '#002145883',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 6',
    Account: '#002145882',
    ExtId: '#002145882',
    Status: 'Inactive',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 7',
    Account: '#002145881',
    ExtId: '#002145881',
    Status: 'Active',
    Office: 'Finexus Head Office'
  }
];
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};
const CreateCenter = () => {
  const [toggleFamily, setToggleFamily] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [addedCenter, setAddedCenter] = useState([]);
  useEffect(() => {
    setToggleFamily([...toggleFamily, <AddFamily />]);
  }, []);
  const searchName = (e) => {
    console.log('e ', e);
    if (e === '') {
      setSearchResult([]);
    } else {
      let res = data.filter((obj) => {
        return obj.Id.toLowerCase().includes(e.toLowerCase());
      });
      console.log('res ', res);
      setSearchResult(res);
    }
  };
  const removeName = (center) => {
    const filteredItems = addedCenter.filter((item) => item !== center);
    setAddedCenter(filteredItems);
  };
  
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
    <div id="createCenter" className="pl-5">
      <h5 className="py-3">Create Center</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div className="create w-100 mb-5">
          <Form>
            <h6>Center Details</h6>
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
                  <Form.Label>Center Name</Form.Label>
                  <Form.Control type="text" />
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
                  <Form.Label>Submitted On</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Center Status</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Active</option>
                    <option>Inactive</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <hr />
            <div className="py-3">
              <h6>
                Centers <small>(7 Centers)</small>
              </h6>
              <div className="py-2 centers">
                <Form className="align-items-center py-4 w-50 mx-auto">
                  <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                    Search center Name
                  </Form.Label>
                  <InputGroup className="mb-2 ">
                    <InputGroup.Prepend>
                      <InputGroup.Text className="searchIcon">
                        <FontAwesomeIcon icon={faSearch} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="searchInput"
                      id="inlineFormInputGroup"
                      placeholder="Search center name..."
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
                              <Col className="d-flex">
                                <p className="m-0 pl-2">{search.Id}</p>
                              </Col>
                              <Col>
                                <p className="m-0">{search.Account}</p>
                              </Col>{' '}
                              <Col>
                                <p className="m-0">{search.ExtId}</p>
                              </Col>
                              <Col>
                                <p
                                  className="m-0 p-1"
                                  style={
                                    search.Status === 'Active'
                                      ? {
                                          backgroundColor: '#e7f5f2',
                                          color: '#0A9D7A',
                                          borderRadius: 25 + 'px',
                                          textAlign: 'center'
                                        }
                                      : {
                                          backgroundColor: '#ffefe8',
                                          color: '#FD5E1A',
                                          borderRadius: 25 + 'px',
                                          textAlign: 'center'
                                        }
                                  }
                                >
                                  {search.Status}
                                </p>
                              </Col>
                              <Col>
                                <div
                                  className="btnAdd"
                                  onClick={() => {
                                    setSearchValue('');
                                    setSearchResult([]);
                                    if (addedCenter.includes(search.Account)) {
                                      swal({
                                        icon: 'error',
                                        title:
                                          'You have already added this center'
                                      });
                                    } else {
                                      setAddedCenter([...addedCenter, search]);
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
                {addedCenter.length > 0 ? <h6>Added Centers</h6> : null}
                <div className="addedCenters">
                  {addedCenter.map((center, index) => {
                    return (
                      <div className="d-flex align-items-center" key={index}>
                        <p
                          id="centerCode"
                          className="m-0 mr-2"
                          style={{
                            backgroundColor: getRandomColor()
                          }}
                        >
                          c
                        </p>
                        <p className="m-0 px-2">{center.Id}</p>
                        <img
                          src={close}
                          alt="close"
                          height={20}
                          onClick={(e) => {
                            removeName(center);
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
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

export default CreateCenter;
