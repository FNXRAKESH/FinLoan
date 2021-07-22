import React, { useState } from 'react';
import Edit from './icons/edit.svg';
import Delete from './icons/delete.svg';
import ArrowRight from './icons/arrow-right.svg';
import Save from './icons/save.svg';
import Search from './icons/search.svg';
import ArrowDown from './icons/chevron-down.svg';
import Remove from './icons/close-circle.svg';
import Plus from './icons/plus.svg';
import './index.scss';

const data = [
    {
        name: 'cycleYSelect',
        selected: true
    },
    {
        name: 'Start Date',
        selected: true
    },
    {
        name: 'End Date',
        selected: false
    },
    {
        name: 'Select Closed or Disbursed Date',
        selected: false
    },
    {
        name: 'Select Office',
        selected: false
    }
];

const reportData = {
    name: 'Active Clients',
    type: '',
    category: 'Clients',
    UI: 'yes',
    desc: 'All clients with the status Active',
    sql: `SELECT c.id AS "id", 
c.firstname AS "firstName",
c.middlename AS "middleName",
c.lastname AS "lastName",`
};

export default function EditReport() {
    const [params, setParams] = useState(data);
    const [details, setDetails] = useState(reportData);
    const [query, setQuery] = useState('');
    const [search, updateSearch] = useState([]);

    const reportDataChange = (e, key) => {
        console.log(e.target.value);
        setDetails(details => ({ ...details, [key]: e.target.value }));
    };

    const removeParam = name => {
        // setParams(params => params.filter(key => key.name !== name));

        const arr = params.map(key => {
            if (key.name === name) {
                key.selected = false;
            }
            return key;
        });

        setParams(arr);
    };

    const addParam = name => {
        // setParams(params => [...params, {name: param.name, value: param.value, selected: true}]);
        const arr = params.map(key => {
            if (key.name === name) {
                key.selected = true;
            }

            return key;
        });

        setParams(arr);

        setQuery('');
    };

    const handleSearch = e => {
        const q = e.target.value.trim();
        let matchArr = [];

        setQuery(q);

        if (q.length > 0) {
            const regexp = new RegExp(`^${q}`, 'i');

            params.forEach((param, ind) => {
                let match = param.name.match(regexp);

                if (match && !param.selected) {
                    matchArr = [...matchArr, params[ind]];
                }
            });

            updateSearch([...matchArr]);
        } else {
            updateSearch([]);
        }
    };

    return (
        <div id="editreport" className="pl-5 mb-5">
            <h5 className="py-3">Report Details</h5>

            <div className="row w-100">
                <div className="col-md-6">
                    <div className="white-card height-unset">
                        <div className="border-bottom pb-4 mb-4 text-center">
                            <h6 className="font-weight-bolder">
                                Active Clients
                            </h6>
                            <span className="text-muted">Report Type: SMS</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src={Edit} className="mr-3" alt="edit" />
                                <span className="text-muted align-middle">
                                    Edit Report
                                </span>
                            </div>
                            <div>
                                <img src={ArrowRight} alt="" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div>
                                <img src={Delete} className="mr-3" alt="edit" />
                                <span className="text-muted align-middle">
                                    Delete Report
                                </span>
                            </div>
                            <div>
                                <img src={ArrowRight} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="white-card height-unset">
                        <h6 className="mb-4">Edit Report</h6>
                        <form className="w-100">
                            <div className="form-region">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label
                                                className="form-label font-weight-500"
                                                htmlFor="name"
                                            >
                                                Report Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="form-control h-50px"
                                                value={details.name}
                                                onChange={e =>
                                                    reportDataChange(e, 'name')
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label
                                                className="form-label font-weight-500"
                                                htmlFor="type"
                                            >
                                                Report Type
                                            </label>
                                            <select
                                                id="type"
                                                className="custom-select h-50px"
                                                value={details.type}
                                                onChange={e =>
                                                    reportDataChange(e, 'type')
                                                }
                                            >
                                                <option>Select type</option>
                                                <option value="type1">
                                                    type1
                                                </option>
                                                <option value="type2">
                                                    type2
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label
                                                className="form-label font-weight-500"
                                                htmlFor="category"
                                            >
                                                Report Category
                                            </label>
                                            <input
                                                type="text"
                                                id="category"
                                                className="form-control h-50px"
                                                value={details.category}
                                                onChange={e =>
                                                    reportDataChange(
                                                        e,
                                                        'category'
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label
                                                className="form-label font-weight-500"
                                                htmlFor="ui"
                                            >
                                                User Report UI?
                                            </label>
                                            <select
                                                id="ui"
                                                className="custom-select h-50px"
                                                value={details.UI}
                                                onChange={e =>
                                                    reportDataChange(e, 'UI')
                                                }
                                            >
                                                <option value="no">No</option>
                                                <option value="yes">Yes</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label
                                                className="form-label font-weight-500"
                                                htmlFor="description"
                                            >
                                                Description
                                            </label>
                                            <input
                                                type="text"
                                                id="description"
                                                className="form-control h-50px"
                                                value={details.desc}
                                                onChange={e =>
                                                    reportDataChange(e, 'desc')
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-region">
                                <h5>SQL</h5>
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="blue-box">
                                            <textarea
                                                name="sqlCode"
                                                id="sql"
                                                rows="10"
                                                className="w-100"
                                                value={details.sql}
                                                onChange={e =>
                                                    reportDataChange(e, 'sql')
                                                }
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h5>Report Parameters</h5>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="blue-box w-100">
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-center search-box">
                                                <div className="align-items-center py-sm-4 flex-grow-1 w-100">
                                                    <div className="input-group bg-transparent">
                                                        <div className="input-group-prepend bg-transparent">
                                                            <span className="searchIcon input-group-text bg-white pl-3">
                                                                <img
                                                                    src={Search}
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </div>

                                                        <input
                                                            placeholder="Select parameters to add"
                                                            id="inlineFormInputGroup"
                                                            className="search-input form-control border-0"
                                                            value={query}
                                                            onChange={e =>
                                                                handleSearch(e)
                                                            }
                                                        />
                                                        <div className="align-items-center pl-3 bg-white input-group-append drop-arrow">
                                                            <button
                                                                type="button"
                                                                className="btn btn-white"
                                                            >
                                                                <span>
                                                                    <img
                                                                        src={
                                                                            ArrowDown
                                                                        }
                                                                        className="px-2"
                                                                        alt=""
                                                                    />
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-5 pb-4">
                                            <div className="col-4 text-center text-muted font-weight-500">
                                                Parameter
                                            </div>
                                            <div className="col-4 text-center text-muted font-weight-500">
                                                Parameter Name passed to Pentaho
                                            </div>
                                            <div className="col-4 text-center text-muted font-weight-500">
                                                Action
                                            </div>
                                        </div>

                                        {query
                                            ? search.length > 0
                                                ? search.map(param => (
                                                      <div
                                                          className="row border-top py-4 align-items-center"
                                                          key={param.name}
                                                      >
                                                          <div className="col-4 text-center font-weight-500">
                                                              {param.name}
                                                          </div>
                                                          <div className="col-4 text-center font-weight-500"></div>
                                                          <div className="col-4 text-center font-weight-500">
                                                              <div
                                                                  className="blue-btn border-0 px-3 py-2 d-inline-block"
                                                                  onClick={() =>
                                                                      addParam(
                                                                          param.name
                                                                      )
                                                                  }
                                                              >
                                                                  <img
                                                                      src={Plus}
                                                                      className="mr-2"
                                                                      alt=""
                                                                  />
                                                                  Add
                                                              </div>
                                                          </div>
                                                      </div>
                                                  ))
                                                : null
                                            : params.map(param => {
                                                  if (param.selected) {
                                                      return (
                                                          <div
                                                              className="row border-top py-4 align-items-center"
                                                              key={param.name}
                                                          >
                                                              <div className="col-4 text-center font-weight-500">
                                                                  {param.name}
                                                              </div>
                                                              <div className="col-4 text-center font-weight-500">
                                                                  <input
                                                                      type="text"
                                                                      className="border-0 w-100 py-1"
                                                                  />
                                                              </div>
                                                              <div className="col-4 text-center font-weight-500">
                                                                  <div
                                                                      className="red-btn border-0 px-3 py-2 d-inline-block"
                                                                      onClick={() =>
                                                                          removeParam(
                                                                              param.name
                                                                          )
                                                                      }
                                                                  >
                                                                      <img
                                                                          src={
                                                                              Remove
                                                                          }
                                                                          className="mr-2"
                                                                          alt=""
                                                                      />
                                                                      Remove
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      );
                                                  } else {
                                                      return null;
                                                  }
                                              })}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 d-flex justify-content-end mb-5">
                                    <button
                                        type="button"
                                        className="mr-3 btn btn-light"
                                    >
                                        Cancel
                                    </button>
                                    <div className="green-btn">
                                        <img
                                            src={Save}
                                            className="mr-2 align-bottom"
                                            alt=""
                                        />
                                        Submit
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*Modals*/}
            <div
                role="dialog"
                aria-modal="true"
                className="fade modal"
                tabIndex="-1"
                id="deletereport"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title h4">Delete Report?</div>
                            <button type="button" className="close">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="delete-btn w-100 py-2 mb-3">
                                <p className="m-0 text-center w-100">
                                    Yes, Delete
                                </p>
                            </div>
                            <div className="cancel-btn py-2 w-100">
                                <p className="m-0 text-center w-100">
                                    No, Keep It
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
