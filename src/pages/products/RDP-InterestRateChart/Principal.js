import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './Principal.scss';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faInfoCircle, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Principal = (props) => {

  function delete_principal() {
    document.getElementById(props.id).remove();
  }


  return (
      <div 
        id={props.id}
        className="mb-4">
          <div 
            className="click-appear-div w-100 py-2 d-block"  
          >
            <div 
              className="d-flex ml-auto mr-5"
            >
              {props.array.length >= 1 ?
                  <Button
                    className="ml-auto border-0"
                    style={{
                      background: 'none'
                    }}
                    onClick={delete_principal}
                  >
                    <FontAwesomeIcon 
                      className="icon" 
                      icon={faTimesCircle}
                      style={{color: '#FD5E1A', fontSize: '22px', cursor: 'pointer'}} />
                  </Button> : ''
                }
          </div>

          <div className="container">
  
            <div className="row py-2">
              <div className="col-md-6 my-1">
                <label
                onClick={() => {console.log(props.id)}}
                >
                  Amount Range
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <input
                  className="form-control px-3" type="text"
                />

              </div>

              <div className="col-md-6 my-1">
                <div className="form-group">
                  <label style={{visibility: 'hidden'}}>
                    xxxx
                  </label>
                  
                  <input
                    className="form-control px-3" type="search"
                  />
                </div>
              </div>
            </div>

            <div className="row py-2">
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Period Type
                    <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                  </label>
                  <select 
                    className="custom-select px-3"
                  >
                    <option selected>On Whole Team</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row py-2">
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Period From / To
                    <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                  </label>
                  <input
                    className="form-control px-3" type="search"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label style={{visibility: 'hidden'}}>
                      xxxx
                  </label>
                  <input
                    className="form-control px-3" type="search"
                  />
                </div>
              </div>
            </div>
          
            <div className="row pt-2 pb-4">

              <div className="col-md-6">
                <div className="form-group">
                <label>
                  Interest
                  <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                </label>
                <input
                  className="form-control px-3" type="search"
                />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Description
                    <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                  </label>
                  <input
                    className="form-control px-3" type="search"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>

      </div>
  );
}

export default Principal;