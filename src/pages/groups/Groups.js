import React from 'react';
import './Groups.styles.scss';
import { motion } from 'framer-motion';
import { InputGroup, Form, FormControl, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faChevronDown,
  faFilter,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import addGroup from '../../images/plusBlue.png';
import img1 from '../../images/groups/img1.png';
import img2 from '../../images/groups/img2.png';
import img3 from '../../images/groups/img3.png';
import img4 from '../../images/groups/img4.png';
import img5 from '../../images/groups/img5.png';
import img6 from '../../images/groups/img6.png';
import img7 from '../../images/groups/img7.png';
const data = [
  {
    img: `${img1}`,
    GroupName: 'Group 1',
    Account: '#002145887',
    ExtId: '#002145887',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    img: `${img2}`,
    GroupName: 'Group - M 24+',
    Account: '#002145888',
    ExtId: '#002145888',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    img: `${img3}`,
    GroupName: 'Group Women',
    Account: '#002145885',
    ExtId: '#002145885',
    Status: 'Inactive',
    Office: 'Finexus Head Office'
  },
  {
    img: `${img4}`,
    GroupName: 'Group - Business Women',
    Account: '#002145884',
    ExtId: '#002145884',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    img: `${img5}`,
    GroupName: 'Group - Elders',
    Account: '#002145883',
    ExtId: '#002145883',
    Status: 'Active',
    Office: 'Finexus Head Office'
  },
  {
    img: `${img6}`,
    GroupName: 'Group - 45',
    Account: '#002145882',
    ExtId: '#002145882',
    Status: 'Inactive',
    Office: 'Finexus Head Office'
  },
  {
    img: `${img7}`,
    GroupName: 'Group - M 60+',
    Account: '#002145881',
    ExtId: '#002145881',
    Status: 'Active',
    Office: 'Finexus Head Office'
  }
];

const Groups = (props) => {
  return (
    <div id="groups" className="pl-5">
      <div className="py-3 d-flex">
        <h5 className="flex-grow-1">Groups</h5>
        <motion.div className="d-flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="d-flex align-items-center addGroup"
            onClick={() => {
              props.history.push('/createGroup');
            }}
          >
            <img src={addGroup} alt="import client" />
            <p className="m-0 pl-2">Create Group</p>
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
        <div className="groupList w-100 mb-5">
          <Table hover size="sm" borderless>
            <thead>
              <tr style={{ borderBottom: '1px solid #c2c2c2' }}>
                <th>Group Name</th>
                <th>Account Id</th>
                <th>Ext Id</th>
                <th style={{ textAlign: 'center' }}>Status</th>
                <th>Office</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((client, index) => {
                  return (
                    <tr>
                      <td><img src={client.img} alt='' className='pr-2'/>{client.GroupName}</td>
                      <td>{client.Account}</td>
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

export default Groups;
