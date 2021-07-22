import React from 'react';
import './Centers.styles.scss';
import { motion } from 'framer-motion';
import { InputGroup, Form, FormControl, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faChevronDown,
  faFilter,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import importCenter from '../../images/importClient.png';
import addCenter from '../../images/plusBlue.png';

const data = [
  {
    Id: 'Center 1',
    Name: '#002145887',
    ExtId: '#002145887',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 2',
    Name: '#002145888',
    ExtId: '#002145888',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 3',
    Name: '#002145885',
    ExtId: '#002145885',
    Status: 'Inactive',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 4',
    Name: '#002145884',
    ExtId: '#002145884',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 5',
    Name: '#002145883',
    ExtId: '#002145883',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 6',
    Name: '#002145882',
    ExtId: '#002145882',
    Status: 'Inactive',
    Office: 'Finexus Head Office'
  },
  {
    Id: 'Center 7',
    Name: '#002145881',
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
const Centers = (props) => {
  return (
    <div id="centers" className="pl-5">
      <div className="py-3 d-flex">
        <h5 className="flex-grow-1">Centers</h5>
        <motion.div className="d-flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="d-flex align-items-center addCenter"
            onClick={() => {
              props.history.push('/importCenter');
            }}
          >
            <img src={importCenter} alt="import center" />
            <p className="m-0 pl-2">Import Center</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="d-flex align-items-center addCenter"
            onClick={() => {
              props.history.push('/createCenter');
            }}
          >
            <img src={addCenter} alt="import center" />
            <p className="m-0 pl-2">Create Center</p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div className="container">
          <div className="search d-flex align-items-center justify-content-between">
            <Form className="align-items-center py-4 flex-grow-1">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className="searchIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="searchInput"
                  id="inlineFormInputGroup"
                  placeholder="Search by name, status, office ..."
                />
                <InputGroup.Append
                  id="filter"
                  className="align-items-center pl-3 bg-white"
                >
                  <FontAwesomeIcon icon={faFilter} color={'#518EF8'} />
                  <Button variant="white">
                    Filter <FontAwesomeIcon icon={faChevronDown} />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
            <div
              id="searchBtn"
              className="d-flex flex-grow-0 align-items-center mx-2 justify-content-center"
            >
              <p className="m-0 pr-2">Search</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className="centersList w-100 mb-5">
          <Table hover size="sm" borderless>
            <thead>
              <tr style={{ borderBottom: '1px solid #c2c2c2' }}>
                <th>Center Name</th>
                <th>Account</th>
                <th>Ext Id</th>
                <th style={{ textAlign: 'center' }}>Status</th>
                <th>Office</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((center, index) => {
                  return (
                    <tr>
                      <td className="d-flex align-items-center">
                        <p id='centerCode'
                          className="m-0 mr-2"
                          style={{
                            backgroundColor: getRandomColor(),
                           
                          }}
                        >
                          c
                        </p>
                        {center.Id}
                      </td>
                      <td>{center.Name}</td>
                      <td>{center.ExtId}</td>
                      <td>
                        <p 
                          style={
                            center.Status === 'Active'
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
                          {center.Status}
                        </p>
                      </td>
                      <td>{center.Office}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </motion.div>
    </div>
  );
};

export default Centers;
