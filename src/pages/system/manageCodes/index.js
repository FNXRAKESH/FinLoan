import React, { useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import Plus from './icons/plus-circle.svg';
import Search from './icons/search.svg';
import Edit from './icons/edit.svg';
import './index.scss';
import ReactDOM from 'react-dom';
import {Button, Modal} from 'react-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const data = [
    {
        code: 'ADDRESS_TYPE'
    },
    {
        code: 'Asset account tags'
    },
    {
        code: 'CenterClosureReason'
    },
    {
        code: 'ClientClassification'
    },
    {
        code: 'Client closure reason'
    },
    {
        code: 'ClientRejectReason'
    },
    {
        code: 'ClientSubStatus'
    },
    {
        code: 'ClientType'
    },
    {
        code: 'Customer identifier'
    },
    {
        code: 'Entity to Entity Access Types'
    },
    {
        code: 'Equity account tags'
    },
    {
        code: 'Expense account tags'
    }
];

const Add_Code = () => {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <div
            className="blue-btn"
            data-toggle="modal"
            data-target="#addcode"
            onClick={handleShow}
        >
            <img src={Plus} className="mr-2" alt="" />
            Add Codes
        </div>

        
        <Modal show={show} onHide={handleClose} size="sm" centered>
            <div className="mx-2">
                <Modal.Body>
                    <div className="d-flex">
                    <h5 className="">Add Code</h5>
                    <FontAwesomeIcon 
                        className="ml-auto cursor-pointer" 
                        icon={faTimes}
                        onClick={handleClose}
                    />
                    </div>
                <div className="mt-4">
                    <label>
                        Code Name
                    </label>
                    <input 
                        className="form-control"
                        type="text"
                    />
                </div>
                <div className="mt-3">
                    <Button 
                    onClick={handleClose}
                    className="border-0 btn-lg btn-block mb-3"
                    style={{background: '#1AC29A', color: 'white'}}>
                    <h6 className="my-1">Save</h6>
                    </Button>
                </div>
                </Modal.Body>
            </div>
        </Modal>

      </div>
    );
  }
  
  ReactDOM.render(<Add_Code />, document.getElementById('root'));
  

export default function ManageCodes() {
    const history = useHistory();

    const [codes, updateCodes] = useState(data);
    const [search, updateSearch] = useState([]);
    const [query, setQuery] = useState('');
    const [addCodeInput, setAddCodeInput] = useState('');

    const handleAddCode = e => {
        console.log(e.target.value);
        setAddCodeInput(e.target.value.trim());
    };

    const addCode = () => {
        let unique = 1;
        const regexp = new RegExp(`^${addCodeInput}$`, 'i');

        codes.forEach(code => {
            if (code.code.match(regexp)) {
                unique = 0;
                swal({
                    icon: 'error',
                    title: 'This code already exists'
                });
                return;
            }
        });

        if (unique) {
            updateCodes(codes => [...codes, { code: addCodeInput }]);
        }
    };

    const handleSearch = e => {
        const q = e.target.value.trim();
        let matchArr = [];

        setQuery(Boolean(q));

        if (q.length > 0) {
            const regexp = new RegExp(`^${q}`, 'i');

            codes.forEach((code, ind) => {
                let match = code.code.match(regexp);

                if (match) {
                    matchArr = [...matchArr, codes[ind]];
                }
            });

            updateSearch([...matchArr]);
        } else {
            updateSearch([]);
        }
    };

    return (
        <div id="managecodes" className="pl-5 mb-5">
            <div className="py-3 d-flex align-items-center">
                <h5 className="flex-grow-1">Manage Codes</h5>
                <Add_Code />
            </div>

            <div className="row my-5 w-100">
                <div className="col-12 d-flex justify-content-center search-box">
                    <form className="align-items-center py-sm-4 flex-grow-1 w-100">
                        <div className="input-group bg-transparent">
                            <div className="input-group-prepend bg-transparent">
                                <span className="searchIcon input-group-text bg-white pl-3">
                                    <img src={Search} alt="" />
                                </span>
                            </div>

                            <input
                                placeholder="Search by name"
                                id="inlineFormInputGroup"
                                className="search-input form-control border-0"
                                onChange={e => handleSearch(e)}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="row w-100">
                {query
                    ? search.length > 0
                        ? search.map(code => (
                              <div
                                  className="col-sm-6 col-lg-4 my-3"
                                  key={code.code}
                              >
                                  <div className="white-card d-flex align-items-center justify-content-between">
                                      <div>
                                          <h6 className="code-name">
                                              Code name
                                          </h6>
                                          <h6>{code.code}</h6>
                                          <span className="system-text pr-2">
                                              System Defined
                                          </span>
                                          <span className="text-blue pl-2">
                                              True
                                          </span>
                                      </div>
                                      <div className="align-self-start">
                                          <img
                                              src={Edit}
                                              className="cursor-pointer"
                                              alt=""
                                              onClick={() =>
                                                  history.push('/editcode')
                                              }
                                          />
                                      </div>
                                  </div>
                              </div>
                          ))
                        : null
                    : codes.map(code => (
                          <div
                              className="col-sm-6 col-lg-4 my-3"
                              key={code.code}
                          >
                              <div className="white-card d-flex align-items-center justify-content-between">
                                  <div>
                                      <h6 className="code-name">Code name</h6>
                                      <h6>{code.code}</h6>
                                      <span className="system-text pr-2">
                                          System Defined
                                      </span>
                                      <span className="text-blue pl-2">
                                          True
                                      </span>
                                  </div>
                                  <div className="align-self-start">
                                      <img
                                          src={Edit}
                                          className="cursor-pointer"
                                          alt=""
                                          onClick={() =>
                                              history.push('/editcode')
                                          }
                                      />
                                  </div>
                              </div>
                          </div>
                      ))}
            </div>
        </div>
    );
}
