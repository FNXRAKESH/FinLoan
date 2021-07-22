import React from 'react';
import './ManageEmployees.styles.scss';
import { motion } from 'framer-motion';
import { InputGroup, Form, FormControl, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faChevronDown,
  faFilter,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import importEmployees from '../../../images/importClient.png';
import addEmployees from '../../../images/plusBlue.png';

const data = [
  {
    FirstName: 'Tushar',
    LastName: 'Palei',
    isLoanOfficer: 'True',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Email: 'user@email.com',
    Phone: '9876543210',
    JoinedOn: '31 January 2020'
  },
  {
    FirstName: 'Jane',
    LastName: 'Cooper',
    isLoanOfficer: 'False',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Email: 'user@email.com',
    Phone: '9876543210',
    JoinedOn: '07 January 2020'
  },
  {
    FirstName: 'Wade',
    LastName: 'Warner',
    isLoanOfficer: 'True',
    Status: 'Inactive',
    Office: 'Finexus US Office',
    Email: 'user@email.com',
    Phone: '9876543210',
    JoinedOn: '15 January 2020'
  },
  {
    FirstName: 'Esther',
    LastName: 'Howard',
    isLoanOfficer: 'True',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Email: 'user@email.com',
    Phone: '9876543210',
    JoinedOn: '20 January 2020'
  },
  {
    FirstName: 'Cameron',
    LastName: 'Williamson',
    isLoanOfficer: 'True',
    Status: 'Active',
    Office: 'Finexus Bangalore Office',
    Email: 'user@email.com',
    Phone: '9876543210',
    JoinedOn: '25 January 2020'
  },
  {
    FirstName: 'Broollyn',
    LastName: 'Simmons',
    isLoanOfficer: 'False',
    Status: 'Inactive',
    Office: 'Finexus Head Office',
    Email: 'user@email.com',
    Phone: '9876543210',
    JoinedOn: '20 January 2020'
  },
  {
    FirstName: 'Leslie',
    LastName: 'Alexander',
    isLoanOfficer: 'True',
    Status: 'Active',
    Office: 'Finexus Head Office',
    Email: 'user@email.com',
    Phone: '9876543210',
    JoinedOn: '13 January 2020'
  }
];

const ManageEmployees = (props) => {
  return (
    <div id="manageEmployees" className="pl-5">
      <div className="py-3 d-flex">
        <h5 className="flex-grow-1">Manage Employees</h5>
        <motion.div className="d-flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="d-flex align-items-center addEmployees"
            onClick={() => {
              props.history.push('/importEmployees');
            }}
          >
            <img src={importEmployees} alt="import Employees" />
            <p className="m-0 pl-2">Import Employees</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="d-flex align-items-center addEmployees"
            onClick={() => {
              props.history.push('/createEmployee');
            }}
          >
            <img src={addEmployees} alt="import Employees" />
            <p className="m-0 pl-2">Create Employees</p>
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
                  placeholder="Search by name ..."
                />
              </InputGroup>
            </Form>
          </div>
        </div>
        <div className="employeesList w-100 mb-5">
          <Table hover size="sm" borderless>
            <thead>
              <tr style={{ borderBottom: '1px solid #c2c2c2' }}>
                <th>Employee Name</th>
                <th>Is Loan Officer</th>
                <th>Office</th>
                <th style={{ textAlign: 'center' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((employee, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={() =>
                        props.history.push({
                          pathname: '/employeeDetails',
                          state: { user: employee }
                        })
                      }
                    >
                      <td>
                        {employee.FirstName} {employee.LastName}
                      </td>
                      <td>{employee.isLoanOfficer}</td>
                      <td>{employee.Office}</td>
                      <td>
                        <p
                          style={
                            employee.Status === 'Active'
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
                          {employee.Status}
                        </p>
                      </td>
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

export default ManageEmployees;
