import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './SP-Settings.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

const SP_Settings = () => {

  let history = useHistory();
  const[lck_in, setLck_in] = useState('');

  function goto_terms() {
    history.push('/sp-terms');
  } 

  function goto_MP() {
    if (lck_in == ''){
      localStorage.setItem('SP-settings-error', 'true');
      history.push('/sp-market-price');
    }
    else{
      localStorage.removeItem('SP-settings-error', 'true');
      history.push('/sp-market-price');
    } 
  }
  
  function lck_inHandler(e) {
    setLck_in(e.target.value);
  }
  
  return (
      <div 
        id="SP_Settings"
        className="pl-5"
      >

        
        <div 
          className="create_settings"
        >
          <h5 
            className="py-4"
          >
            Create Share Product
          </h5>
        
          <motion.div
            className="bg-white mx-auto pb-4 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{borderRadius: '15px'}}
          >
            <div className="SP-Settings-checkbox-container">
            <Checkboxes />
            </div>

            <hr/>

            <form>
              <div className="container">

                <div className="my-4">
                  <h5>Settings</h5>
                </div>
                
                <div className="d-flex">
                  <h5>Shares per Client</h5>
                  <FontAwesomeIcon className="icon ml-3 mt-1" icon={faInfoCircle} />
                </div>

                <div className="row py-4">
                  <div className="col-md-4">
                    <label>
                      Minimum
                    </label>
                    <div className="form-group">
                      <input                        
                        className="form-control px-3" 
                        type="text"
                        onChange={lck_inHandler}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Default
                      </label>
                      <input                        
                        className="form-control px-3" 
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Maximum
                      </label>
                      <input
                        className="form-control px-3" 
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <hr/>

                <div className="d-flex">
                  <h5>Minimum Active Period</h5>
                  <FontAwesomeIcon className="icon ml-3 mt-1" icon={faInfoCircle} />
                </div>


                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        id="product-name"
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <select 
                      className="custom-select px-3"
                    >
                      <option selected>Days</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    </div>
                  </div>
                </div>

                <hr/>

                <div className="d-flex">
                  <h5>Lock-in Period</h5>
                  <FontAwesomeIcon className="icon ml-3 mt-1" icon={faInfoCircle} />
                </div>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        id="product-name"
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <select 
                        className="custom-select px-3"
                      >
                        <option selected>Days</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <hr/>

                <div class="custom-control custom-switch mb-4">
                  <input type="checkbox" class="custom-control-input" id="customSwitch4" />
                  <label class="custom-control-label SP-Settings-text-small" for="customSwitch4">
                    Allow dividends for inactive clients
                  </label>
                  <FontAwesomeIcon className="icon ml-3 mt-1" icon={faInfoCircle} />
                </div>

              </div>

              <hr/>
              
              <div className="container">
                <div 
                  className="SP-Settings-btn-section my-5 w-100"
                >
                  <Button 
                    onClick={goto_terms}
                    className="py-2 btn-prev border-0 rounded font-weight-medium" 
                  >
                    <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                    Previous
                  </Button>
                  <Button 
                    onClick={goto_MP}
                    className="py-2 btn-next border-0 rounded font-weight-semibold"
                  >
                    Next
                    <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                  </Button>
                </div>

              </div>
            </form>
          </motion.div>
        </div>
      </div>
    
  );
}

export default SP_Settings;
