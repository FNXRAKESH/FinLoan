import React, { useState, useEffect } from 'react';
import './Reports.styles.scss';
import { motion } from 'framer-motion';
import { InputGroup, Form, FormControl, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faChevronDown,
  faFilter,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    Name: 'Active Clients',
    Type: 'SMS',
    Category: 'Clients'
  },
  {
    Name: 'Client Listing',
    Type: 'Table',
    Category: 'Clients'
  },
  {
    Name: 'Client Listing (Pentaho)',
    Type: 'Pentaho',
    Category: 'Clients'
  },
  {
    Name: 'Client Loan Listing',
    Type: 'Table',
    Category: 'Clients'
  },
  {
    Name: 'Client Loan Listing (Pentaho)',
    Type: 'Pentaho',
    Category: 'Clients'
  },
  {
    Name: 'Active Group Leaders',
    Type: 'SMS',
    Category: 'Clients'
  },
  {
    Name: 'Active Loan Clients',
    Type: 'SMS',
    Category: 'Clients'
  },
  {
    Name: 'Active Loan Summary / Branch',
    Type: 'Pentaho',
    Category: 'Loan'
  },
  {
    Name: 'Active Loan - Details',
    Type: 'Table',
    Category: 'Loan'
  },
  {
    Name: 'Active Loan - Details (Pentaho)',
    Type: 'Pentaho',
    Category: 'Loan'
  },
  {
    Name: 'Active Loan - Summary',
    Type: 'Table',
    Category: 'Loan'
  },
  {
    Name: 'Active Summary - Details (Pentaho)',
    Type: 'Pentaho',
    Category: 'Laon'
  },
  {
    Name: 'Active Loans by Disbursal Period',
    Type: 'Table',
    Category: 'Loan'
  },
  {
    Name: 'Active Loans by Disbursal Period (Pentaho)',
    Type: 'Pentaho',
    Category: 'Loan'
  },
  {
    Name: 'Active Loans in last Installment',
    Type: 'Table',
    Category: 'Loan'
  },
  {
    Name: 'Active Loans in last Summary',
    Type: 'Table',
    Category: 'Loan'
  },
  {
    Name: 'Active Loans in last Installment Summary (Pentaho)',
    Type: 'Pentaho',
    Category: 'Loan'
  },
  {
    Name: 'Active Loans in last Installment (Pentaho)',
    Type: 'Pentaho',
    Category: 'Loan'
  },
  {
    Name: 'Active Loans passed Final Maturity',
    Type: 'Table',
    Category: 'Loan'
  },
  {
    Name: 'Active Loans passed final Maturity Summary',
    Type: 'Table',
    Category: 'Loan'
  },
  {
    Name: 'Active Loans passed Final Maturity Summary (Pentaho)',
    Type: 'Pentaho',
    Category: 'Loan'
  },
  {
    Name: 'Active Loans passed Final Maturity (Pentaho)',
    Type: 'Pentaho',
    Category: 'Loan'
  },
  {
    Name: 'Client Savings Summary',
    Type: 'Pentaho',
    Category: 'Savings'
  },
  {
    Name: 'Savings Account Dormancy Report',
    Type: 'Pentaho',
    Category: 'Savings'
  },
  {
    Name: 'Savings Transaction',
    Type: 'Pentaho',
    Category: 'Savings'
  },
  {
    Name: 'Funds Disbursed between dates Summary',
    Type: 'Table',
    Category: 'Fund'
  },
  {
    Name: 'Funds Disbursed between dates Summary by Office',
    Type: 'Table',
    Category: 'Fund'
  },
  {
    Name: 'Funds Disbursed between dates Summary by Office (Pentaho)',
    Type: 'Pentaho',
    Category: 'Fund'
  },
  {
    Name: 'Funds Disbursed between dates Summary (Pentaho)',
    Type: 'Pentaho',
    Category: 'Fund'
  },
  {
    Name: 'Balance Sheet',
    Type: 'Pentaho',
    Category: 'Accounting'
  },
  {
    Name: 'General Ledger Report',
    Type: 'Pentaho',
    Category: 'Accounting'
  },
  {
    Name: 'Income Statement',
    Type: 'Table',
    Category: 'Accounting'
  },
  {
    Name: 'Trial Balance',
    Type: 'Pentaho',
    Category: 'Accounting'
  }
];

const AllReports = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [item, setItem] = useState('');
  const [filter, setFilter] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);

  const searchName = (e) => {
    if (filterOptions.length >= 1) {
      let res = searchResult.filter((obj) => {
        return obj.Name.toLowerCase().includes(e.toLowerCase());
      });
      console.log('res ', res);
      setSearchResult(res);
    } else {
      let res = data.filter((obj) => {
        return obj.Name.toLowerCase().includes(e.toLowerCase());
      });
      console.log('res ', res);
      setSearchResult(res);
    }
  };
  useEffect(() => {
    setSearchResult(data);
  }, []);

  useEffect(() => {
    var arr = [];
    if (filterOptions.length >= 1) {
      filterOptions.map((i, j) => {
        let res = data.filter((obj) => {
          return obj.Category.toLowerCase().includes(i.toLowerCase());
        });
        arr.push(...res);
      });
      setSearchResult(arr);
    }
  }, [filterOptions]);
  const handlleOnChange = (e) => {
    const temp = [...filterOptions];
    if (temp.includes(e)) {
      var index = temp.indexOf(e);
      if (index >= 0) {
        temp.splice(index, 1);
      }
      setSearchResult(data);
      setFilterOptions(temp);
    } else {
      setFilterOptions([...filterOptions, e]);
    }
  };
  return (
    <div id="reports" className="pl-5">
      <div className="py-3 d-flex align-items-center">
        <h5 className="flex-grow-1">All Reports</h5>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="search d-flex align-items-center">
            <Form className="align-items-center flex-grow-1">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className="searchIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="searchInput"
                  id="inlineFormInputGroup"
                  placeholder="Filter by Report Name ..."
                  onChange={(e) => {
                    searchName(e.target.value);
                    setSearchValue(e.target.value);
                  }}
                  value={searchValue}
                  autoComplete="off"
                />
                <InputGroup.Append
                  id="filter"
                  className="align-items-center pl-3 bg-white"
                >
                  <FontAwesomeIcon icon={faFilter} color={'#518EF8'} />
                  <Button variant="white" onClick={() => setFilter(!filter)}>
                    Filter <FontAwesomeIcon icon={faChevronDown} />
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
            {filter ? (
              <div className="filter">
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Show All"
                    name="all"
                    onChange={(e) => {
                      handlleOnChange(e.target.name);
                    }}
                  />
                </Form.Group> */}
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Clients"
                    name="clients"
                    onChange={(e) => {
                      handlleOnChange(e.target.name);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Loans"
                    name="Loan"
                    onChange={(e) => {
                      handlleOnChange(e.target.name);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Savings"
                    name="savings"
                    onChange={(e) => {
                      handlleOnChange(e.target.name);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Funds"
                    name="fund"
                    onChange={(e) => {
                      handlleOnChange(e.target.name);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Accounting"
                    name="accounting"
                    onChange={(e) => {
                      handlleOnChange(e.target.name);
                    }}
                  />
                </Form.Group>
              </div>
            ) : null}
            {/* <div
                id="searchBtn"
                className="d-flex flex-grow-0 align-items-center mx-2 justify-content-center"
              >
                <p className="m-0 pr-2">Search</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </div> */}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div className="reportsList w-100 mb-5">
          {searchResult &&
            searchResult.map((search, index) => {
              return (
                <motion.div
                  key={index}
                  id="item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  onClick={() => {
                    setItem(search.Name);
                  }}
                  style={
                    item === search.Name
                      ? {
                          backgroundColor: '#0645B1',
                          color: '#fff'
                        }
                      : { backgroundColor: '#fff', color: '#000' }
                  }
                >
                  <h6>{search.Name}</h6>
                  <div className="d-flex align-items-center justify-content-between ">
                    <p className="m-0">Type : {search.Type}</p>
                    <div
                      style={{
                        width: 1,
                        height: 20,
                        backgroundColor: 'grey'
                      }}
                    ></div>
                    <p className="m-0">Category : {search.Category}</p>
                  </div>
                </motion.div>
              );
            })}
        </div>
      </motion.div>
    </div>
  );
};

export default AllReports;
