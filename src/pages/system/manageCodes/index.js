import React, { useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import Plus from './icons/plus-circle.svg';
import Search from './icons/search.svg';
import Edit from './icons/edit.svg';
import './index.scss';

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
                <div
                    className="blue-btn"
                    data-toggle="modal"
                    data-target="#addcode"
                    // onClick={() => triggerModal('addcode')}
                >
                    <img src={Plus} className="mr-2" alt="" />
                    Add Codes
                </div>
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
            {/*<!-- Modals -->*/}
            <div
                className={`modal fade`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="addCode"
                aria-hidden="true"
                id="addcode"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h5 className="modal-title" id="addCodeModal">
                                Add code
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label className="form-label" htmlFor="addCode">
                                Code Name
                            </label>
                            <input
                                type="text"
                                value={addCodeInput}
                                onChange={e => handleAddCode(e)}
                                className="form-control"
                            />
                        </div>
                        <div className="modal-footer border-top-0">
                            <button
                                type="button"
                                className="green-btn w-100"
                                data-dismiss="modal"
                                onClick={addCode}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
