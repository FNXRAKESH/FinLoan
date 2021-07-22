import React, { useState, useEffect } from 'react';
import './Groups.styles.scss';
import { motion } from 'framer-motion';
import {
  Col,
  Form,
  Row,
  Button,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import close from '../../images/close.png';
import { v4 as uuidv4 } from 'uuid';
import save from '../../images/save.png';
import client1 from '../../images/groups/client1.png';
import client2 from '../../images/groups/client2.png';
import client3 from '../../images/groups/client3.png';
import client4 from '../../images/groups/client4.png';
import client5 from '../../images/groups/client5.png';
import client6 from '../../images/groups/client6.png';
import client7 from '../../images/groups/client7.png';
import swal from 'sweetalert';

const data = [
  {
    img: `${client1}`,
    Id: '#2345',
    Name: 'Tushar Palei',
    ExtId: '#002145887',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    img: `${client2}`,
    Id: '#2344',
    Name: 'Jane Cooper',
    ExtId: '#002145888',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    img: `${client3}`,
    Id: '#2343',
    Name: 'Wade Warner',
    ExtId: '#002145885',
    Status: 'Inactive',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    img: `${client4}`,
    Id: '#2342',
    Name: 'Esther Howard',
    ExtId: '#002145884',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    img: `${client5}`,
    Id: '#2341',
    Name: 'Cameron Williamson',
    ExtId: '#002145883',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    img: `${client6}`,
    Id: '#2340',
    Name: 'Broollyn Simmons',
    ExtId: '#002145882',
    Status: 'Inactive',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    img: `${client7}`,
    Id: '#2339',
    Name: 'Leslie Alexander',
    ExtId: '#002145881',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  }
];
const CreateGroup = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [addedClient, setAddedClient] = useState([]);
  const searchName = (e) => {
    console.log('e ', e);
    if (e === '') {
      setSearchResult([]);
    } else {
      let res = data.filter((obj) => {
        return obj.Name.toLowerCase().includes(e.toLowerCase());
      });
      console.log('res ', res);
      setSearchResult(res);
    }
  };
  const removeName = (client) => {
     
     const filteredItems = addedClient.filter((item) => item !== client);
     setAddedClient(filteredItems);
  }
  return (
    <div id="createGroup" className="pl-5 mb-5">
      <h5 className="py-3">Create Group</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div className="create w-100 mb-5">
          <Form>
            <h6>Group Details</h6>
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
                  <Form.Label>Group Name</Form.Label>
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
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Staff</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Staff 1</option>
                    <option>Staff 2</option>
                    <option>Staff 3</option>
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
                <Form.Group controlId="posting.currency">
                  <Form.Label>Group Status</Form.Label>
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
                Clients <small>(7 Clients)</small>
              </h6>
              <div className="py-2 groups">
                <Form className="align-items-center py-4 w-50 mx-auto">
                  <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                    Search Client Name
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
                      placeholder="Search client name..."
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
                              <Col xs={5} className="d-flex">
                                <img src={search.img} alt="" />
                                <p className="m-0 pl-2">{search.Name}</p>
                              </Col>
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
                                    if (addedClient.includes(search.Name)) {
                                      swal({
                                        icon: 'error',
                                        title:
                                          'You have already added this client'
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
                {addedClient.length > 0 ? <h6>Added Clients</h6> : null}
                <div className="addedGroups">
                  {addedClient.map((client, index) => {
                    return (
                      <div className="d-flex align-items-center" key={index}>
                        <img
                          src={client.img}
                          alt="client"
                          className="img-fluid"
                        />
                        <p className="m-0 px-2">{client.Name}</p>
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

export default CreateGroup;
