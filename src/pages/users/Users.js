import React from 'react';
import './Users.styles.scss';
import { motion } from 'framer-motion';
import { InputGroup, Form, FormControl, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faChevronDown,
  faFilter,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import addUser from '../../images/plusBlue.png';
import { Link } from 'react-router-dom';

const data = [
  {
    FirstName: 'Tushar',
    LastName: 'Palei',
    Email: 'deborshi@finexusinc.com',
    Office: 'Finexus Head Office'
  },
  {
    FirstName: 'Jane',
    LastName: 'Cooper',
    Email: 'deborshi@finexusinc.com',
    Office: 'Finexus Head Office'
  },
  {
    FirstName: 'Wade',
    LastName: 'Warner',
    Email: 'deborshi@finexusinc.com',
    Office: 'Finexus Head Office'
  },
  {
    FirstName: 'Esther',
    LastName: 'Howard',
    Email: 'deborshi@finexusinc.com',
    Office: 'Finexus Head Office'
  },
  {
    FirstName: 'Cameron',
    LastName: 'Williamson',
    Email: 'deborshi@finexusinc.com',
    Office: 'Finexus Head Office'
  },
  {
    FirstName: 'Broollyn',
    LastName: 'Simmons',
    Email: 'deborshi@finexusinc.com',
    Office: 'Finexus Head Office'
  },
  {
    FirstName: 'Leslie',
    LastName: 'Alexander',
    Email: 'deborshi@finexusinc.com',
    Office: 'Finexus Head Office'
  }
];
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};
const Users = (props) => {
  return (
    <div id="users" className="pl-5">
      <div className="py-3 d-flex">
        <h5 className="flex-grow-1">Users</h5>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="d-flex align-items-center addUser"
          onClick={() => {
            props.history.push('/createUser');
          }}
        >
          <img src={addUser} alt="create user" />
          <p className="m-0 pl-2">Create User</p>
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
                  placeholder="Search by name ..."
                />
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
        <div className="userList w-100 mb-5">
          <Table hover size="sm" borderless>
            <thead>
              <tr style={{ borderBottom: '1px solid #c2c2c2' }}>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Office</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((user, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={() =>
                        props.history.push({
                          pathname: '/userDetails',
                          state: { user: user }
                        })
                      }
                    >
                      <td style={{ display: 'flex', alignItems: 'center' }}>
                        <p
                          
                          className="m-0 mr-2 initial"
                          style={{
                            backgroundColor: getRandomColor()
                          }}
                        >
                          {user.FirstName.charAt(0)}
                        </p>
                        {user.FirstName}
                      </td>
                      <td>{user.LastName}</td>
                      <td>{user.Email}</td>
                      <td>{user.Office}</td>
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

export default Users;
