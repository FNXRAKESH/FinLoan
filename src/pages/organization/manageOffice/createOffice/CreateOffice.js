import React, { useState, useEffect } from 'react';
import './CreateOffice.styles.scss';
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
import close from '../../../../images/close.png';
import save from '../../../../images/save.png';
 
import swal from 'sweetalert';

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
const CreateOffice = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [addedClient, setAddedClient] = useState([]);
  const searchName = (e) => {
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
  }
  return (
    <div id="createOffice" className="pl-5 mb-5">
      <h5 className="py-3">Create Office</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div className="create w-100 mb-5">
          <Form>
            <h6>Office Details</h6>
            <Row>
              <Col md>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Office Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Parent Office</Form.Label>
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
              <Col md></Col>
            </Row>

            <hr />
            <div>
              <h6 className="py-3">Manage Branch Offices</h6>
              <div className="py-2 office">
                <Form className="align-items-center py-4 w-50 mx-auto">
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
                        console.log(e.target.value);
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
                                <p className="m-0 pl-2">{search.officeName}</p>
                              </Col>
                              <Col>
                                <p className="m-0">{search.ExtId}</p>
                              </Col>

                              <Col>
                                <div
                                  className="btnAdd"
                                  onClick={() => {
                                    setSearchValue('');
                                    setSearchResult([]);
                                    if (
                                      addedClient.includes(search.officeName)
                                    ) {
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
                {addedClient.length > 0 ? (
                  <h6>Added Office</h6>
                ) : (
                  <h6 className='text-center'>No Active Branch offices</h6>
                )}
                <div className="addedOffice">
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
            </div>

            <div className="d-flex justify-content-end my-5">
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

export default CreateOffice;
