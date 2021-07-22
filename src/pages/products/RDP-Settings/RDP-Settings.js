import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './RDP-Settings.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

const RDP_Settings = () => {

  let history = useHistory();
  const[lck_in, setLck_in] = useState('');
  const [apply_pi, set_apply_pi] = useState('none');
  const [val, set_val] = useState(true);

  const [apply_wt, set_apply_wt] = useState('none');
  const [val1, set_val1] = useState(true);

  function goto_terms() {
    history.push('/rdp-terms');
  } 

  function goto_IRC() {
    if (lck_in == ''){
      localStorage.setItem('RDP-settings-error', 'true');
      history.push('/rdp-interest-rate-chart');
    }
    else{
      localStorage.removeItem('RDP-settings-error', 'true');
      history.push('/rdp-interest-rate-chart');
    }  
  }
  
  function lck_inHandler(e) {
    setLck_in(e.target.value);
  }

  function API_div() {
    
    if (val) {
      set_apply_pi('flex');
      set_val(!val);
    }
    else{
      set_apply_pi('none');
      set_val(!val);
    }
  }

  function WT_div() {
    
    if (val1) {
      set_apply_wt('flex');
      set_val1(!val1);
    }
    else{
      set_apply_wt('none');
      set_val1(!val1);
    }
  }

  
  return (
      <div 
        id="RDP_Settings"
        className="pl-5"
      >

        
        <div 
          className="create_settings"
        >
          <h5 
            className="py-4"
          >
            Create Recurring Deposit Products
          </h5>
        
          <motion.div
            className="bg-white mx-auto pb-4 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{borderRadius: '15px'}}
          >
            <div className="RDP-Settings-checkbox-container">
            <Checkboxes />
            </div>

            <hr/>

            <form>
              <div className="container">

                <div className="my-3">
                  <h5>Settings</h5>
                </div>

                <div className="my-4" style={{fontSize: '20px'}}>

                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                    <label class="custom-control-label RDP-Settings-text-small" for="customSwitch1">
                      Is Mandatory Deposit
                    </label>
                    <FontAwesomeIcon className="icon ml-2" icon={faInfoCircle} />
                  </div>
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                    <label class="custom-control-label RDP-Settings-text-small" for="customSwitch2">
                      Adjust advanced payments toward future installments
                    </label>
                    <FontAwesomeIcon className="icon ml-2" icon={faInfoCircle} />
                  </div>
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch3" />
                    <label class="custom-control-label RDP-Settings-text-small" for="customSwitch3">
                      Allow Withdrawls
                    </label>
                    <FontAwesomeIcon className="icon ml-2" icon={faInfoCircle} />
                  </div>

                </div>

                <hr/>
                
                <div>
                  <h5>Lock-in Period</h5>
                </div>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        id="product-name"
                        className="form-control px-3" type="search"
                        onChange={lck_inHandler}
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

                <div>
                  <h5>Minimum Deposit Term</h5>
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

                <div>
                  <h5>And thereafter, In Multiples of</h5>
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

                <div>
                  <h5>Maximum Deposit Term</h5>
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

                <div className="mb-4">
                  <h5>For Pre-mature Closure</h5>
                </div>

                <div style={{fontSize: '20px'}}>

                  <div class="custom-control custom-switch mb-4">
                    <input onClick={API_div} type="checkbox" class="custom-control-input" id="customSwitch4" />
                    <label class="custom-control-label RDP-Settings-text-small" for="customSwitch4">Apply penal interest (less)</label>
                  </div>

                  <div className="apply_pi">
                    <div 
                      className="click-appear-div py-4"  
                      style={{ display: `${apply_pi}` }}
                    >
                      <div className="container">
                        <div className="row py-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                id="product-name"
                                className="form-control px-3" type="search"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
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
                      </div>   
                    </div>
                  </div>

                </div>

                <hr/>

                <div>
                  <h5>Balance Required For Interest Calculation</h5>
                </div>

                <div className="row  py-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        id="product-name"
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>
                </div>

                <hr/>

                <div>

                  <div class="custom-control custom-switch mb-4">
                    <input onClick={WT_div} type="checkbox" class="custom-control-input" id="customSwitch5" />
                    <label class="custom-control-label RDP-Settings-text-small" for="customSwitch5">Is Withold tax applicable</label>
                  </div>

                  <div className="apply_wt">
                    <div className="click-appear-div w-100 py-4" 
                      style={{ display: `${apply_wt}`}}
                    >
                      <div className="container">
                        <div className="row py-4">
                          
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Tax Group
                                <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                              </label>
                              <select 
                                className="custom-select px-3"
                              >
                                <option selected>Select an option</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>  
                    </div>
                  </div>
                </div>
              </div>

              <hr/>
              
              <div className="container">
                <div 
                  className="RDP-Settings-btn-section my-5 w-100"
                >
                  <Button 
                    onClick={goto_terms}
                    className="py-2 btn-prev border-0 rounded font-weight-medium" 
                  >
                    <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                    Previous
                  </Button>
                  <Button 
                    onClick={goto_IRC}
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

export default RDP_Settings;
