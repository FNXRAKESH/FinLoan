import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './LP-Terms.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlusCircle, faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import Checkboxes from './Checkbox';

const Principal = (props) => {
  return (
    <>
    <div className="container">
      <div 
        id={props.id}
        className="row py-2">
        <div className="col-md">
          <div class="form-group">
          {props.array.length == 0 ?
              <label>
                Principal Type
              </label> : ''
            }
          <select 
            className="custom-select px-3"
            style={{
              backgroundColor: '#FCFCFC',
              border: '0.5px solid rgba(10, 33, 62, 0.15)',
              borderRadius: '5px',
            }}>
            <option selected>Equals</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        </div>

        <div className="col-md">
          <div className="form-group">
            {props.array.length == 0 ?
              <label>
                Loan Cycle
              </label> : ''
            }
            <input
              className="form-control px-3" type="text"
            />
          </div>
        </div>
        
        <div className="col-md">
          <div className="form-group">
            {props.array.length == 0 ?
              <label>
                Minimum
              </label> : ''
            }
            <input
              className="form-control px-3" type="text"
            />
          </div>
        </div>

        <div className="col-md">
          <div className="form-group">
            {props.array.length == 0 ?
              <label>
                Default
              </label> : ''
            }
            <input
              className="form-control px-3" type="text"
            />
          </div>
        </div>

        <div className="col-md">
          <div className="form-group">
            {props.array.length == 0 ?
              <label>
                Maximum
              </label> : ''
            }
            <input
              className="form-control px-3" type="text"
            />
          </div>
        </div>

        <div className="col-md-1 w-auto mx-auto" style={{color:'#FD5E1A'}}>
        <div class="form-group">
          {props.array.length >= 1 ?
          <div className="mt-2">
            <FontAwesomeIcon 
              onClick={() => {document.getElementById(props.id).remove();}}
              icon={faTimesCircle} 
              style={{color: '#FD5E1A', fontSize: '22px', cursor: 'pointer'}}/>
          </div> : ''
          }
        </div>
        </div>
        </div>
      </div>
      
    </>
  );
}

const LP_Terms = () => {

  let history = useHistory();
  const [def_min, setDef_min] = useState('');
  const [apply_plc, set_apply_plc] = useState('none');
  const [val1, set_val1] = useState(true);

  const [principals1, setPrincipals1] = useState([]);

  const [apply_rlc, set_apply_rlc] = useState('none');
  const [val2, set_val2] = useState(true);

  const [principals2, setPrincipals2] = useState([]);

  function goto_cd() {
    history.push('/lp-currency-details');
  }

  function goto_settings() {
    if (def_min == ''){
      localStorage.setItem('LP-terms-error', 'true');
      history.push('/lp-settings');
    }
    else{
      localStorage.removeItem('LP-terms-error');
      history.push('/lp-settings');
    }
  }


  function def_minHandler(e) {
    setDef_min(e.target.value);
  }

  function PLC_div() {
    
    if (val1) {
      set_apply_plc('block');
      set_val1(!val1);
    }
    else{
      set_apply_plc('none');
      set_val1(!val1);
    }
  }

  function RLC_div() {
    
    if (val2) {
      set_apply_rlc('block');
      set_val2(!val2);
    }
    else{
      set_apply_rlc('none');
      set_val2(!val2);
    }
  }

  function add_principal_plc() {
    setPrincipals1([...principals1, <Principal id={uuidv4().toString()} array={principals1}/>]);
  }

  function add_principal_rlc() {
    setPrincipals2([...principals2, <Principal id={uuidv4().toString()} array={principals2}/>]);
  }

  useEffect(() => {
    setPrincipals1([...principals1, <Principal id={uuidv4().toString()} array={principals1}/>]);
    setPrincipals2([...principals2, <Principal id={uuidv4().toString()} array={principals2}/>]);

  }, [])
  
  return (
      <div 
        id="LP_Terms"
        className="pl-5"
      >

        <div 
          className="LP_create_terms"
        >
          <h5 
            className="py-3"
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
            <div className="LP-Terms-checkbox-container">
              <Checkboxes />
            </div>

            <hr/>

            <form>
              <div className="container">
                <div className="my-4">
                  <h5>Term Details</h5>
                </div>

                <div class="custom-control custom-switch mb-5">
                  <input onClick={PLC_div} type="checkbox" class="custom-control-input" id="customSwitch1" />
                  <label class="custom-control-label LP-Terms-text-small" for="customSwitch1">
                    Terms vary based on loan cycle
                    <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                  </label>
                </div>

                <div className="row">
                  <div className="col">
                    <h5>
                      Principal
                      <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                    </h5>
                  </div>
                </div>

                <div className="row py-4"
                >
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Minimum
                      </label>
                      <input
                        className="form-control px-3"
                        type="search"
                        onChange={def_minHandler}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Default
                      </label>
                      <input
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Maximum
                      </label>
                      <input
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>
                  
                </div>

                <div className="row py-4">
                  <div className="col">
                    <h5>
                      Principal by loan cycle
                      <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                    </h5>
                  </div>
                </div>

                <div className="principal_loan_cycle">

                  <div 
                    className="click-appear-div w-100 py-4"  
                    style={{display: 'block'}}
                  >
                  
                    {principals1}

                    <div className="row mt-4 mb-3">
                      <div className="col-md-4">
                        <div className="form-group">
                          <div 
                            className="py-3 mx-3 px-4" 
                            onClick={add_principal_plc}
                            style={{
                            color: '#518EF8',
                            background: 'rgba(81, 142, 248, 0.1)',
                            borderRadius: '100px',
                            fontSize: '18px',
                            cursor: 'pointer'
                          }}>
                            <FontAwesomeIcon className="icon mr-3" icon={faPlusCircle}
                              style={{
                                color: '#518EF8',
                                fontSize: '22px'
                              }} />
                            Add Another Principal
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                <hr/>

                <div className="row">
                  <div className="col">
                    <h5>
                      Number of repayments
                      <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                    </h5>
                  </div>
                </div>

                <div className="row py-4"
                >
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Minimum
                      </label>
                      <input
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Default
                      </label>
                      <input
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Maximum
                      </label>
                      <input
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>
                  
                </div>

                <div className="row py-4">
                  <div className="col">
                    <h5>
                      Number of Repayments by loan cycle
                      <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                    </h5>
                  </div>
                </div>


                <div className="repayment_loan_cycle">

                  <div 
                    className="click-appear-div w-100 py-4"  
                    style={{display: 'block'}}
                  >
                  
                    {principals2}

                    <div className="row mt-4 mb-3">
                      <div className="col-md-4">
                        <div className="form-group">
                          <div 
                            className="py-3 mx-3 px-4" 
                            onClick={add_principal_rlc}
                            style={{
                            color: '#518EF8',
                            background: 'rgba(81, 142, 248, 0.1)',
                            borderRadius: '100px',
                            fontSize: '18px',
                            cursor: 'pointer'
                          }}>
                            <FontAwesomeIcon className="icon mr-3" icon={faPlusCircle}
                              style={{
                                color: '#518EF8',
                                fontSize: '22px'
                              }} />
                            Add Another Principal
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                <hr/>

                <div class="custom-control custom-switch mb-5">
                  <input onClick={PLC_div} type="checkbox" class="custom-control-input" id="customSwitch2" />
                  <label class="custom-control-label LP-Terms-text-small" for="customSwitch2">
                    Is Linked to Floating Interest Rates
                    <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                  </label>
                </div>

                <div className="row">
                  <div className="col">
                    <h5>
                      Floating interest rate
                      <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                    </h5>
                  </div>
                </div>

                <div className="row py-4"
                >
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Floating Rate
                      </label>
                      <select 
                        className="custom-select px-3"
                      >
                        <option selected>Select Floating Rate</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Differential Rate
                      </label>
                      <input
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Is FLoating Calculation Allowed?
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

                <div className="row">
                  <div className="col">
                    <h5>
                      Floating interest rate
                      <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                    </h5>
                  </div>
                </div>

                <div className="row py-4"
                >
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Minimum interest rate
                      </label>
                      <input
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Default interest rate
                      </label>
                      <input
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Maximum interest rate
                      </label>
                      <input
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>
                  
                </div>

                <div className="row">
                  <div className="col">
                    <h5>
                      Repaid Every
                      <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                    </h5>
                  </div>
                </div>

                <div className="row py-4"
                >
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <select 
                        className="custom-select px-3"
                      >
                        <option selected>Months</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  
                </div>

                <div className="row">
                  <div className="col">
                    <h5>
                      Minimum days between disbursal and first repayment date
                      <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                    </h5>
                  </div>
                </div>

                <div className="row py-4"
                >
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        className="form-control px-3" type="search"
                      />
                    </div>
                  </div>

                </div>

              </div>

              <hr/>

              <div className="container">
                <div>
                  <div 
                    className="LP-Terms-btn-section my-5 w-100"
                  >
                    <Button 
                      onClick={goto_cd}
                      className="py-2 btn-prev border-0 rounded font-weight-medium" 
                    >
                      <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                      Previous
                    </Button>
                    <Button 
                      onClick={goto_settings}
                      className="py-2 btn-next border-0 rounded font-weight-semibold"
                    >
                      Next
                      <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                    </Button>
                  
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    
  );
}

export default LP_Terms;
