import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './editSurvey.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const editSurvey = () => {
  let history = useHistory();

  const [active, setActive] = React.useState(false);

  const handleActive = () => {
    setActive(!active);
  }

  return (
      <div 
        id="editSurvey"
        className="pl-5"
      >

        <div className="d-flex py-2">
          <h5 
            className="mr-3 py-1"
          >
            Edit Survey
          </h5>
          <h6
            className="py-2 px-2"
            style={{width: '80px', color: '#FD5E1A', background: 'rgba(253, 94, 26, 0.1)', borderRadius: '100px', display: `${active ? 'none' : ''}`}}
          >
            Inactive
          </h6>
        </div>
       

        <div 
          className={`row mb-4 mx-auto ${active ? 'surveyActiveBg': 'bg-white'} py-3 px-3`}
          style={{borderRadius: '15px'}}
        >
          <div className="col">
            <div>
              <h5
                style={{
                  color: `${active ? 'white' : ''}`
                }}
              >
                Survey Name
              </h5>
              <h6
                style={{
                  color: `${active ? 'white' : ''}`
                }}
              >
                Created on : 25 Sep, 2020
              </h6>
            </div>
            <div>

            </div>
          </div>

          <div className="col d-flex justify-content-end my-auto">
            <div 
              className={`${active ? 'surveyRoleActive' : 'surveyRoleInactive'} d-flex mr-4`}
            >
              <div className="d-flex" style={{cursor: 'pointer'}}>
                <FontAwesomeIcon className="ml-3 mr-2 my-auto" icon={faTrash}/>
                <h6 className="my-2">Delete</h6>
              </div>
            </div>
            <div class="custom-control custom-switch py-2">
              <input type="checkbox" class="custom-control-input" id="customSwitch1" onChange={handleActive}/>
              <label class="custom-control-label editSurvey-text-small" for="customSwitch1"></label>
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
                <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                <label class="custom-control-label editSurvey-text-small" for="customSwitch2">Activate the Survey</label>
              </div>

            </div>

            <div className="container">
              <div>
                <div 
                  className="editSurvey-btn-section my-5 w-100"
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

export default editSurvey;
