import React, { useState } from 'react';
import './ManageOffice.styles.scss';
import { motion } from 'framer-motion';
import { InputGroup, Form, FormControl, Button, Table, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faChevronDown,
  faChevronUp,
  faFilter,
  faSearch,
  faTable
} from '@fortawesome/free-solid-svg-icons';
import addGroup from '../../../images/plusBlue.png';
import tree from '../../../images/tree.png';
import importCenter from '../../../images/importClient.png';
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

const ManageOffice = (props) => {
    const [treeView, setTreeView] = useState(false)
    const [open, setOpen] = useState(false);
  return (
    <div id="manageOffice" className="pl-5">
      <div className="py-3 d-flex">
        <h5 className="flex-grow-1">Manage Offices</h5>
        <motion.div className="d-flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="d-flex align-items-center addOffice"
            onClick={() => {
              setTreeView(!treeView);
            }}
            style={treeView ? { backgroundColor: '#518EF8' } : null}
          >
            {treeView ? (
              <FontAwesomeIcon icon={faTable} color={'#fff'} />
            ) : (
              <img src={tree} alt="tree view" />
            )}
            {treeView ? (
              <p className="m-0 pl-2 text-white">Table View</p>
            ) : (
              <p className="m-0 pl-2">Tree View</p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="d-flex align-items-center addOffice"
            onClick={() => {
              props.history.push('/importOffice');
            }}
          >
            <img src={importCenter} alt="import center" />
            <p className="m-0 pl-2">Import Office</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="d-flex align-items-center addOffice"
            onClick={() => {
              props.history.push('/createOffice');
            }}
          >
            <img src={addGroup} alt="import office" />
            <p className="m-0 pl-2">Create Office</p>
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
                  placeholder="Search by name..."
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
        <div className="officeList w-100 mb-5">
          {!treeView ? (
            <Table hover size="sm" borderless>
              <thead>
                <tr style={{ borderBottom: '1px solid #c2c2c2' }}>
                  <th>Office Name</th>
                  <th>External Id</th>
                  <th>Parent Office</th>
                  <th>Opened On</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((office, index) => {
                    return (
                      <tr
                        key={index}
                        onClick={() =>
                          props.history.push({
                            pathname: '/officeDetails',
                            state: { office: office }
                          })
                        }
                      >
                        <td>{office.officeName}</td>
                        <td>{office.ExtId}</td>
                        <td>{office.parentOffice}</td>

                        <td>{office.openedOn}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          ) : (
            <div className="treeView">
              <div className="parent" onClick={() => setOpen(!open)}>
                                  <p className="m-0 pr-3">Finexus Head Office</p>
                                  {open ? <FontAwesomeIcon icon={faChevronUp} /> :
                                      <FontAwesomeIcon icon={faChevronDown} />}
              </div>
              <Collapse in={open}>
                <div id="child">
                  <div>
                    <p className="m-0">Finexus US Office</p>
                  </div>
                  <div>
                    <p className="m-0">Finexus Chennai Office</p>
                  </div>
                  <div>
                    <p className="m-0">Finexus Bangalore Office</p>
                  </div>
                </div>
              </Collapse>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ManageOffice;
