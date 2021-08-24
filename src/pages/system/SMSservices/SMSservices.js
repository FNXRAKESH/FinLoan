import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './SMSservices.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const SMSservices = () => {
  let history = useHistory();

  return (
      <div 
        id="SMSservices"
        className="pl-5"
      >

        <div className="d-flex mb-2">
          <h5 
            className="py-3"
          >
            SMS Services
          </h5>
          <div 
            className="d-flex ml-auto my-2"
            style={{width: '100px', color: 'white', background: '#0A9D7A', borderRadius: '100px'}}
          >
            <div className="d-flex" style={{cursor: 'pointer'}}>
              <FontAwesomeIcon className="ml-4 mr-2 my-auto" icon={faSave}/>
              <h6 className="my-auto">Save</h6>
            </div>
          </div>
        </div>

        
        <motion.div
          className="bg-white mx-auto py-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{borderRadius: '15px'}}
        >
  
          <form>
            <div className="container">  
              <div className="my-4">
                <h5>Edit Services</h5>
              </div>
              <div className="row my-2">

                <div className="col-md-4">
                  <div className="form-group">
                    <label>
                      host_name
                    </label>
                    <input
                      id="product-name"
                      className="form-control px-3"
                      type="text"
                      required
                    />
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
                      port_number
                    </label>
                    <input
                      id="short-name"
                      className="form-control px-3" 
                      type="text"
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>
                      end_point
                    </label>
                    <input
                      id="short-name"
                      className="form-control px-3" 
                      type="text"
                    />
                  </div>
                </div>
              </div>
              
              <div className="row my-2">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
                      tenant_app_key
                    </label>
                    <input
                      id="short-name"
                      className="form-control px-3" 
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div> 
          </form>
        </motion.div>
      </div>
    
  );
}

export default SMSservices;
