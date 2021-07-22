import React, { useState } from 'react';
import addClient from '../../images/plusBlue.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  Modal,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col
} from 'react-bootstrap';
import './Currency.styles.scss';
import { motion } from 'framer-motion';
import australia from '../../images/currency/australia.png';
import india from '../../images/currency/india.png';
import fiji from '../../images/currency/fiji.png';
import uae from '../../images/currency/uae.png';
import us from '../../images/currency/us.png';
import trash from '../../images/trash.png';

const data = [
  { country: 'Australia Dollar', code: 'AUD', flag: `${australia}` },
  { country: 'India Rupee', code: 'INR', flag: `${india}` },
  { country: 'Fiji Dollar', code: 'FJD', flag: `${fiji}` },
  { country: 'UAE Dirham', code: 'AED', flag: `${uae}` },
  { country: 'US Dollar', code: 'USD', flag: `${us}` }
];
const Currency = () => {
  const delCurrency = (e) => {
    setDel(true);
    setSelectedCurrency(e);
  };
  const [del, setDel] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [currencies, setCurrencies] = useState(['AUD', 'FJD', 'AED']);
  const [showSearch, setShowSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const searchName = (e) => {
    console.log('e ', e);
    if (e === '') {
      setSearchResult([]);
    } else {
      let res = data.filter((obj) => {
        return obj.country.toLowerCase().includes(e.toLowerCase());
      });
      console.log('res ', res);
      setSearchResult(res);
    }
  };
  return (
    <div id="currency" className="pl-5">
      <div className="py-3 d-flex align-items-center">
        <h5 className="flex-grow-1">Currency Configuration</h5>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="d-flex align-items-center addCurrency"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          <img src={addClient} alt="import client" />
          <p className="m-0 pl-2">Add Currency</p>
        </motion.div>
      </div>
      {showSearch ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="container"
          style={{ position: 'relative' }}
        >
          <Form className="align-items-center py-4 w-50 mx-auto">
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text className="searchIcon">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                className="searchInput"
                id="inlineFormInputGroup"
                placeholder="Search Currency..."
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
                          <img src={search.flag} alt="" />
                        </Col>
                        <Col>
                          <p className="m-0">{search.country}</p>
                        </Col>

                        <Col>
                          <div
                            className="btnAdd"
                            onClick={() => {
                              setSearchValue('');
                              setSearchResult([]);
                              if (currencies.includes(search.code)) {
                                swal({
                                  icon: 'error',
                                  title: 'You have already added this currency'
                                });
                              } else {
                                setCurrencies([...currencies, search.code]);
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
        </motion.div>
      ) : null}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div className="currencyConfig">
          {data.map((currency, index) => {
            if (currencies.includes(currency.code))
              return (
                <>
                  <div className="currencyType" key={index}>
                    <img src={currency.flag} alt="australia" />
                    <div className="pl-3 flex-grow-1">
                      <h6 className="m-0">{currency.country}</h6>
                      <p className="m-0">
                        <small>{currency.code}</small>
                      </p>
                    </div>
                    <img
                      src={trash}
                      alt="trash"
                      onClick={() => delCurrency(currency.code)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <Modal show={del} onHide={() => setDel(false)} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Delete Currency?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div
                        id="btnDelete"
                        className="btnSubmit w-100 mb-3"
                        onClick={() => {
                          var arr = currencies.filter(function (item) {
                            return item !== selectedCurrency;
                          });
                          setCurrencies(arr);
                          setDel(false);
                        }}
                      >
                        <p className="m-0 text-center w-100">Yes, Delete</p>
                      </div>
                      <div
                        id="btnCancel"
                        className="btnSubmit w-100"
                        onClick={() => {
                          setDel(false);
                        }}
                      >
                        <p className="m-0 text-center w-100">No, Keep It</p>
                      </div>
                    </Modal.Body>
                  </Modal>
                </>
              );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Currency;
