import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './createSurvey.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const createSurvey = () => {
  let history = useHistory();

  return (
      <div 
        id="createSurvey"
        className="pl-5"
      >

        <h5 
          className="py-3"
        >
          Create Survey
        </h5>

        
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
                <h5>Survey Details</h5>
              </div>
              <div className="row my-2">

                <div className="col-md-4">
                  <div className="form-group">
                    <label>
                      Name
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
                      Key
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
                      Country Code
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
                <div className="col">
                  <div className="form-group">
                  <label>
                    Description
                  </label>
                    <textarea
                      id="description"
                      rows="3"
                      className="form-control px-3" type="search"
                      style={{
                        padding: '2% 2% 2% 2%'
                      }}
                    />
                    </div>
                  </div>
              </div>

              <div class="custom-control custom-switch mb-4">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                <label class="custom-control-label createSurvey-text-small" for="customSwitch1">Activate the Survey</label>
              </div>

            </div>

            <div className="container">
              <div>
                <div 
                  className="createSurvey-btn-section my-5 w-100"
                >
                  <Button
                    className="py-2 btn-prev font-weight-medium" 
                  >
                    Cancel
                  </Button>

                  <Button 
                    type="button"
                    className="py-2 btn-next font-weight-semibold"
                  >
                    Save
                    <FontAwesomeIcon className="ml-3" icon={faSave} />
                  </Button>
                </div>

              </div>
            </div>
          </form>
        </motion.div>
      </div>
    
  );
}

export default createSurvey;
