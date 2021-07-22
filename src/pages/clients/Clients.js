import React, { useEffect } from 'react';
import './Clients.styles.scss';
import { motion } from 'framer-motion';
import { InputGroup, Form, FormControl, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faChevronDown,
  faFilter,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import importClient from '../../images/importClient.png';
import addClient from '../../images/plusBlue.png';
 
const data = [
  {
    Id: '#2345',
    Name: 'Tushar Palei',
    ExtId: '#002145887',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    Id: '#2344',
    Name: 'Jane Cooper',
    ExtId: '#002145888',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    Id: '#2343',
    Name: 'Wade Warner',
    ExtId: '#002145885',
    Status: 'Inactive',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    Id: '#2342',
    Name: 'Esther Howard',
    ExtId: '#002145884',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    Id: '#2341',
    Name: 'Cameron Williamson',
    ExtId: '#002145883',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    Id: '#2340',
    Name: 'Broollyn Simmons',
    ExtId: '#002145882',
    Status: 'Inactive',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  },
  {
    Id: '#2339',
    Name: 'Leslie Alexander',
    ExtId: '#002145881',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Staff: 'Kumar, Krishna'
  }
];

const Clients = (props) => {
  const getClients = async() => {
      try {
        const response = await fetch(
          'https://18.136.75.141/api/v1/clients'
        )
          .then((response) => {
            console.log('response ', response);
            response.json();
          })
          .then((data) => console.log('data ', data));
      } catch (error) {
        console.log(error);
      }
  }
  useEffect(() => {
    getClients()
  },[])
  return (
    <div id="clients" className="pl-5">
      <div className="py-3 d-flex">
        <h5 className="flex-grow-1">Clients</h5>
        <motion.div className="d-flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="d-flex align-items-center addClient"
            onClick={() => {
              props.history.push('/importClient');
            }}
          >
            <img src={importClient} alt="import client" />
            <p className="m-0 pl-2">Import Clients</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="d-flex align-items-center addClient"
            onClick={() => {
              props.history.push('/createClient');
            }}
          >
            <img src={addClient} alt="import client" />
            <p className="m-0 pl-2">Create Clients</p>
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
                  placeholder="Search by name, client, staff ..."
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
        <div className="clientsList w-100 mb-5">
          <Table hover size="sm" borderless>
            <thead>
              <tr style={{ borderBottom: '1px solid #c2c2c2' }}>
                <th>ID</th>
                <th>Name</th>
                <th>Ext Id</th>
                <th style={{ textAlign: 'center' }}>Status</th>
                <th>Office</th>
                <th>Staff</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((client, index) => {
                  return (
                    <tr key={index}>
                      <td>{client.Id}</td>
                      <td>{client.Name}</td>
                      <td>{client.ExtId}</td>
                      <td>
                        <p
                          style={
                            client.Status === 'Active'
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
                          {client.Status}
                        </p>
                      </td>
                      <td>{client.Office}</td>
                      <td>{client.Staff}</td>
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

export default Clients;
