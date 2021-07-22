import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './LP-Settings.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

const LP_Settings = () => {

  let history = useHistory();
  const[amort, setAmort] = useState('');
  const [apply_vi, set_apply_vi] = useState('none');
  const [val, set_val] = useState(true);

  const [apply_ir, set_apply_ir] = useState('none');
  const [val1, set_val1] = useState(true);

  const [apply_mb, set_apply_mb] = useState('none');
  const [val0, set_val0] = useState(true);

  const [apply_gr, set_apply_gr] = useState('none');
  const [val2, set_val2] = useState(true);

  const [apply_ltd, set_apply_ltd] = useState('none');
  const [val3, set_val3] = useState(true);

  function goto_terms() {
    history.push('/lp-terms');
  } 

  function goto_IRC() {
    if (amort == ''){
      localStorage.setItem('LP-settings-error', 'true');
      history.push('/lp-charges');
    }
    else{
      localStorage.removeItem('LP-settings-error', 'true');
      history.push('/lp-charges');
    }  
  }
  
  function amortHandler(e) {
    setAmort(e.target.value);
  }

  function VI_div() {
    
    if (val) {
      set_apply_vi('flex');
      set_val(!val);
    }
    else{
      set_apply_vi('none');
      set_val(!val);
    }
  }

  function IR_div() {
    
    if (val1) {
      set_apply_ir('flex');
      set_val1(!val1);
    }
    else{
      set_apply_ir('none');
      set_val1(!val1);
    }
  }

  function GR_div() {
    
    if (val2) {
      set_apply_gr('flex');
      set_val2(!val2);
    }
    else{
      set_apply_gr('none');
      set_val2(!val2);
    }
  }

  function LTD_div() {
    
    if (val3) {
      set_apply_ltd('flex');
      set_val3(!val3);
    }
    else{
      set_apply_ltd('none');
      set_val3(!val3);
    }
  }

  function PT_div() {
    
    if (val0) {
      set_apply_mb('flex');
      set_val0(!val0);
    }
    else{
      set_apply_mb('none');
      set_val0(!val0);
    }
  }

  
  return (
      <div 
        id="lP_Settings"
        className="pl-5"
      >

        
        <div 
          className="create_settings"
        >
          <h5 
            className="py-4"
          >
            Create Loan Product
          </h5>
        
          <motion.div
            className="bg-white mx-auto pb-4 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{borderRadius: '15px'}}
          >
            <div className="LP-Settings-checkbox-container">
            <Checkboxes />
            </div>

            <hr/>

            <form>
              <div className="container">

                <div className="my-3">
                  <h5>Settings</h5>
                </div>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Amortization
                      </label>
                      <select 
                        className="custom-select px-3"
                        onChange={amortHandler}
                      >
                        <option selected>Select an Option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Interest method
                      </label>
                      <select 
                        className="custom-select px-3"
                      >
                        <option selected>Select an Option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Is Equal Amortization?
                      </label>
                      <select 
                        className="custom-select px-3"
                      >
                        <option selected>Yes</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Interest calculation period
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

                <hr/>

                <div class="custom-control custom-switch mb-4">
                  <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                  <label class="custom-control-label LP-Settings-text-small" for="customSwitch1">Apply Withdrawal fee for transfers</label>
                </div>

                <hr/>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Repayment strategy
                      </label>
                      <select 
                        className="custom-select px-3"
                      >
                        <option selected>Select an Option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <hr/>

                <div className="row">
                  <div className="col">
                    <h5>Moratorium</h5>
                  </div>
                </div>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        On Principal Payment
                      </label>
                      <input
                        className="form-control px-3" type="text"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        On Interest Payment
                      </label>
                      <input
                        className="form-control px-3" type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Interest free period
                      </label>
                      <input
                        className="form-control px-3" type="text"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Arrears tolerance
                      </label>
                      <input
                        className="form-control px-3" type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Days in year
                      </label>
                      <select 
                        className="custom-select px-3"
                      >
                        <option selected>Select an Option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Days in month
                      </label>
                      <select 
                        className="custom-select px-3"
                      >
                        <option selected>Select an Option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>

                <hr/>

                <div class="custom-control custom-switch mb-4">
                  <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                  <label class="custom-control-label LP-Settings-text-small" for="customSwitch2">Apply Withdrawal fee for transfers</label>
                </div>

                <hr/>

                <div className="row py-4">
                  <div className="col">
                    <div className="form-group">
                      <label>
                        Number of days a loan may be overdue before moving into arrears
                      </label>
                      <input
                        className="col-4 form-control px-3" type="text"
                      />
                    </div>
                  </div>
                </div>

                <hr/>

                <div className="row py-4">
                  <div className="col">
                    <div className="form-group">
                      <label>
                        Maximum number of days a loan may be overdue before becoming a NPA (non performing asset)
                      </label>
                      <input
                        className="col-4 form-control px-3" type="text"
                      />
                    </div>
                  </div>
                </div>

                <hr/>

                <div class="custom-control custom-switch mb-4">
                  <input onClick={PT_div} type="checkbox" class="custom-control-input" id="customSwitch3" />
                  <label class="custom-control-label LP-Settings-text-small" for="customSwitch3">Account moves out of NPA only afte all arrears have been cleared</label>
                </div>

                <div className="row py-4" style={{display: `${apply_mb}`}}>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>
                        Principal Threshold (%) for Last Installment
                      </label>
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
                    <input onClick={VI_div} type="checkbox" class="custom-control-input" id="customSwitch4" />
                    <label class="custom-control-label LP-Settings-text-small" for="customSwitch4">Is Variable Installment Allowed?</label>
                  </div>

                  <div className="apply_vi">
                    <div 
                      className="click-appear-div py-4"  
                      style={{ display: `${apply_vi}` }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">
                            <h5>Variable Installment</h5>
                          </div>
                        </div>
                        <div className="row py-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Minimum Gap between Installments
                              </label>
                              <input
                                className="form-control px-3" type="search"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                               Maximum Gap between Installments
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

                </div>

                <hr/>

                <div class="custom-control custom-switch mb-4">
                  <input type="checkbox" class="custom-control-input" id="customSwitch5" />
                  <label class="custom-control-label LP-Settings-text-small" for="customSwitch5">Is allowed to be used for providing Topup Loans?</label>
                </div>

                <hr/>

                <div>

                  <div className="row py-4">
                    <div className="col">
                      <h5> Interest Recalculation</h5>
                    </div>
                  </div>

                  <div class="custom-control custom-switch mb-4">
                    <input onClick={IR_div} type="checkbox" class="custom-control-input" id="customSwitch6" />
                    <label class="custom-control-label LP-Settings-text-small" for="customSwitch6">Recalculate Interest</label>
                  </div>

                  <div className="apply_ir">
                    <div className="click-appear-div w-100 py-4" 
                      style={{ display: `${apply_ir}`}}
                    >
                      <div className="container">
                        <div className="row py-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Pre-closure interest calculation rate
                              </label>
                              <select 
                                className="custom-select px-3"
                              >
                                <option selected>Select an Option</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Advanced payments adjustment type
                              </label>
                              <select 
                                className="custom-select px-3"
                              >
                                <option selected>Select an Option</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="row py-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Interest recalculation compounding on
                              </label>
                              <select 
                                className="custom-select px-3"
                              >
                                <option selected>Select an Option</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Frequency for recalculating Outstanding Principal
                              </label>
                              <select 
                                className="custom-select px-3"
                              >
                                <option selected>Select an Option</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="custom-control custom-switch mb-4">
                          <input type="checkbox" class="custom-control-input" id="customSwitch7" />
                          <label class="custom-control-label LP-Settings-text-small" for="customSwitch7">Arrears recognization based on original schedule</label>
                        </div>

                      </div>  
                    </div>
                  </div>
                </div>

                <hr/>

                <div>

                  <div className="row py-4">
                    <div className="col">
                      <h5> Guarantee Requirements</h5>
                    </div>
                  </div>

                  <div class="custom-control custom-switch mb-4">
                    <input onClick={GR_div} type="checkbox" class="custom-control-input" id="customSwitch8" />
                    <label class="custom-control-label LP-Settings-text-small" for="customSwitch8">Place Guarantee Funds On-Hold?</label>
                  </div>

                  <div className="apply_gr">
                    <div className="click-appear-div w-100 py-4" 
                      style={{ display: `${apply_gr}`}}
                    >
                      <div className="container">
                        <div className="row py-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Pre-closure interest calculation rate
                              </label>
                              <select 
                                className="custom-select px-3"
                              >
                                <option selected>Select an Option</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Advanced payments adjustment type
                              </label>
                              <select 
                                className="custom-select px-3"
                              >
                                <option selected>Select an Option</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="row py-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Minimum Guarantee from Guarantor Funds
                              </label>
                              <select
                                className="custom-select px-3"
                              >
                                <option selected>Select an Option</option>
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

                  <div className="row py-4">
                    <div className="col">
                      <h5> Loan Tranche Details</h5>
                    </div>
                  </div>

                  <div class="custom-control custom-switch mb-4">
                    <input onClick={LTD_div} type="checkbox" class="custom-control-input" id="customSwitch9" />
                    <label class="custom-control-label LP-Settings-text-small" for="customSwitch9">Enable Multiple Disbursals</label>
                  </div>

                  <div className="apply_ltd">
                    <div className="click-appear-div w-100 py-4" 
                      style={{ display: `${apply_ltd}`}}
                    >
                      <div className="container">
                        <div className="row py-4">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Pre-closure interest calculation rate
                              </label>
                              <select 
                                className="custom-select px-3"
                              >
                                <option selected>Select an Option</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Advanced payments adjustment type
                              </label>
                              <select 
                                className="custom-select px-3"
                              >
                                <option selected>Select an Option</option>
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
                  <div className="col">
                    <div className="row py-4">
                      <h5>Configurable Terms and Settings</h5>
                    </div>
                    <div className="row">
                      <div class="custom-control custom-switch mb-4">
                        <input type="checkbox" class="custom-control-input" id="customSwitch10" />
                        <label class="custom-control-label LP-Settings-text-small" for="customSwitch10">Allow overriding select terms and settings in loan accounts</label>
                      </div>
                    </div>
                    <div className="row">
                      <div class="custom-control custom-switch mb-4">
                        <input type="checkbox" class="custom-control-input" id="customSwitch11" />
                        <label class="custom-control-label LP-Settings-text-small" for="customSwitch11">Amortization</label>
                      </div>
                    </div>
                    <div className="row">
                      <div class="custom-control custom-switch mb-4">
                        <input type="checkbox" class="custom-control-input" id="customSwitch12" />
                        <label class="custom-control-label LP-Settings-text-small" for="customSwitch12">Interest method</label>
                      </div>
                    </div>
                    <div className="row">
                      <div class="custom-control custom-switch mb-4">
                        <input type="checkbox" class="custom-control-input" id="customSwitch13" />
                        <label class="custom-control-label LP-Settings-text-small" for="customSwitch13">Repayment strategy</label>
                      </div>
                    </div>
                    <div className="row">
                      <div class="custom-control custom-switch mb-4">
                        <input type="checkbox" class="custom-control-input" id="customSwitch14" />
                        <label class="custom-control-label LP-Settings-text-small" for="customSwitch14">Interest calculation period</label>
                      </div>
                    </div>
                    <div className="row">
                      <div class="custom-control custom-switch mb-4">
                        <input type="checkbox" class="custom-control-input" id="customSwitch15" />
                        <label class="custom-control-label LP-Settings-text-small" for="customSwitch15">Arrears tolerance</label>
                      </div>
                    </div>
                    <div className="row">
                      <div class="custom-control custom-switch mb-4">
                        <input type="checkbox" class="custom-control-input" id="customSwitch16" />
                        <label class="custom-control-label LP-Settings-text-small" for="customSwitch16">Repaid every</label>
                      </div>
                    </div>
                    <div className="row">
                      <div class="custom-control custom-switch mb-4">
                        <input type="checkbox" class="custom-control-input" id="customSwitch17" />
                        <label class="custom-control-label LP-Settings-text-small" for="customSwitch17">Moratorium</label>
                      </div>
                    </div>
                    <div className="row">
                      <div class="custom-control custom-switch mb-4">
                        <input type="checkbox" class="custom-control-input" id="customSwitch18" />
                        <label class="custom-control-label LP-Settings-text-small" for="customSwitch18">Number of days a loan may be overdue before moving into arrears</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr/>
              
              <div className="container">
                <div 
                  className="LP-Settings-btn-section my-5 w-100"
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

export default LP_Settings;
