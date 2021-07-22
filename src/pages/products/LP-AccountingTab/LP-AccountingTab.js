import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './LP-AccountingTab.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCircle, faDotCircle, faInfoCircle, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import Checkboxes from './Checkbox';


const Principal = (props) => {
  return (
    <>
    <div className="container">
      <div 
        id={props.id}
        className="row">
        <div className="col-md-5">
          <div class="form-group">
            {props.array.length == 0 ? 
              <label>
               Payment Type
               <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label> : ''
            } 
          <select 
            className="custom-select px-3"
            //value={lck_in}
            style={{
              //padding: '3% 0 3% 0',
              //height: '65%',
              backgroundColor: '#FCFCFC',
              border: '0.5px solid rgba(10, 33, 62, 0.15)',
              borderRadius: '5px',
            }}>
            <option selected>On Whole Team</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        </div>

        <div className="col-md-5">
          <div class="form-group">
            {props.array.length == 0 ? 
              <label>
               Fund Sources
               <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label> : ''
            } 
            <select 
              className="custom-select px-3"
              //value={lck_in}
              style={{
                //padding: '3% 0 3% 0',
                //height: '65%',
                backgroundColor: '#FCFCFC',
                border: '0.5px solid rgba(10, 33, 62, 0.15)',
                borderRadius: '5px',
              }}>
              <option selected>On Whole Team</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="col-md-1 w-auto mt-4 mx-auto" style={{color:'#FD5E1A'}}>
        <div class="form-group">
          {props.array.length >= 1 ?
          <div className="mt-4">
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

const LP_AccountingTab = () => {

  let history = useHistory();
  const [apply_fs, set_apply_fs] = useState('none');
  const [val, set_val] = useState(true);

  const [principals, setPrincipals] = useState([]);

  function goto_charges() {
    history.push('/lp-charges');
  } 

  function goto_RDP_preview() {
    history.push('/lp-preview');
  }
  
  function FS_div() {
    
    if (val) {
      set_apply_fs('block');
      set_val(!val);
    }
    else{
      set_apply_fs('none');
      set_val(!val);
    }
  }

  function add_principal() {
    setPrincipals([...principals, <Principal id={uuidv4().toString()} array={principals}/>]);
  }

  const [icon1, setIcon1] = useState(<FontAwesomeIcon className="mr-2 my-auto" icon={faCircle} style={{color:'white', border: '1.5px solid rgba(10, 33, 62, 0.15)', borderRadius: '15px', fontSize: '22px'}} />);
  const [icon2, setIcon2] = useState(<FontAwesomeIcon className="mr-2 my-auto" icon={faCircle} style={{color:'white', border: '1.5px solid rgba(10, 33, 62, 0.15)', borderRadius: '15px', fontSize: '22px'}} />);
  const [icon3, setIcon3] = useState(<FontAwesomeIcon className="mr-2 my-auto" icon={faCircle} style={{color:'white', border: '1.5px solid rgba(10, 33, 62, 0.15)', borderRadius: '15px', fontSize: '22px'}} />);
  const [icon4, setIcon4] = useState(<FontAwesomeIcon className="mr-2 my-auto" icon={faCircle} style={{color:'white', border: '1.5px solid rgba(10, 33, 62, 0.15)', borderRadius: '15px', fontSize: '22px'}} />);

  const [iconUC, setIconUC] = useState(<FontAwesomeIcon className="mr-2 my-auto" icon={faCircle} style={{color:'white', border: '1.5px solid rgba(10, 33, 62, 0.15)', borderRadius: '15px', fontSize: '22px'}} />);
  const [iconC, setIconC] = useState(<FontAwesomeIcon className="mr-2 my-auto" icon={faDotCircle} style={{color:'#518EF8', borderRadius: '15px', fontSize: '22px'}} />);

  function select_accounting1() {
   setIcon1(iconC);
   setIcon2(iconUC);
   setIcon3(iconUC);
   setIcon4(iconUC);
  }

  function select_accounting2() {
    setIcon1(iconUC);
    setIcon2(iconC);
    setIcon3(iconUC);
    setIcon4(iconUC);
  }

  function select_accounting3() {
    setIcon1(iconUC);
    setIcon2(iconUC);
    setIcon3(iconC);
    setIcon4(iconUC);
  }

  function select_accounting4() {
    setIcon1(iconUC);
    setIcon2(iconUC);
    setIcon3(iconUC);
    setIcon4(iconC);
  }

  useEffect(() => {
    setPrincipals([...principals, <Principal id={uuidv4().toString()}  array={principals}/>]);
  }, [])

  
  return (
      <div 
        id="LP_Accounting"
        className="pl-5"
      >

        
        <div 
          className="create_accounting"
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
            <div className="LP-Accounting-checkbox-container">
              <Checkboxes />
            </div>
          
            <hr/>

            <form>
              <div className="container">
                <div>
                  <h5>Accounting</h5>
                </div>

                <div className="d-flex py-4">
                  <Button className="px-3 py-2 mr-3"
                    onClick={select_accounting1}
                    style={{
                      background: 'rgba(81, 142, 248, 0.1)',
                      border: '1px solid #518EF8',
                      borderRadius: '100px',
                      color: '#518EF8'
                    }}
                  >
                    {icon1}
                    None
                  </Button>

                  <Button className="px-3 py-2 mr-3"
                    onClick={select_accounting2}
                    style={{
                      background: 'rgba(81, 142, 248, 0.1)',
                      border: '1px solid #518EF8',
                      borderRadius: '100px',
                      color: '#518EF8'
                    }}
                  >
                    {icon2}
                    Cash
                  </Button>

                  <Button className="px-3 py-2 mr-3"
                    onClick={select_accounting3}
                    style={{
                      background: 'rgba(81, 142, 248, 0.1)',
                      border: '1px solid #518EF8',
                      borderRadius: '100px',
                      color: '#518EF8'
                    }}
                  >
                    {icon3}
                    Accrual (periodic)
                  </Button>

                  <Button className="px-3 py-2"
                    onClick={select_accounting4}
                    style={{
                      background: 'rgba(81, 142, 248, 0.1)',
                      border: '1px solid #518EF8',
                      borderRadius: '100px',
                      color: '#518EF8'
                    }}
                  >
                    {icon4}
                    Accrual (upfront)
                  </Button>
                </div>

                <hr/>
                    
                <div>
                  <h5>Assets</h5>
                </div>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Fund Sources
                        <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                      </label>
                      <select 
                        className="custom-select custom-select h-75 px-3"
                      >
                        <option selected>Select an option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Loan Portfolio
                        <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                      </label>
                      <select 
                        className="custom-select custom-select h-75 px-3"
                      >
                        <option selected>Select an option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Transfer in suspense
                        <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                      </label>
                      <select 
                        className="custom-select custom-select h-75 px-3"
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

                <div>
                  <h5>Income</h5>
                </div>

                <div className="row py-4">

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Income from Interest
                        <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                      </label>
                      <select 
                        className="custom-select custom-select h-75 px-3"
                      >
                        <option selected>Select an option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Income from fees
                        <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                      </label>
                      <select 
                        className="custom-select custom-select h-75 px-3"
                      >
                        <option selected>Select an option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Income from penalties
                        <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                      </label>
                      <select 
                        className="custom-select custom-select h-75 px-3"
                      >
                        <option selected>Select an option</option>
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
                        Income from Recovery Repayments
                        <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                      </label>
                      <select 
                        className="custom-select custom-select h-75 px-3"
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

                <div className="row">
                  <div className="col">

                    <div className="row">
                      <div className="col-md-4">
                        <div>
                          <h5>Expenses</h5>
                        </div>
                        <div className="form-group py-4">
                          <label>
                            Loses written off
                            <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                          </label>
                          <select 
                            className="custom-select custom-select h-75 px-3"
                          >
                            <option selected>Select an option</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div>
                          <h5>Liabilities</h5>
                        </div>
                        <div className="form-group py-4">
                          <label>
                            Over payment liability
                            <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                          </label>
                          <select 
                            className="custom-select custom-select h-75 px-3"
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

                <hr/>

                <div style={{fontSize: '20px'}}>

                  <div className="my-2" style={{fontSize: '20px'}}>

                    <div class="custom-control custom-switch">
                      <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                      <label class="custom-control-label LP-Accounting-text-small" for="customSwitch1">
                        Advanced Accounting Rule
                      </label>
                    </div>

                  </div>

                  <div class="custom-control custom-switch mb-5">
                    <input onClick={FS_div} type="checkbox" class="custom-control-input" id="customSwitch2" />
                    <label class="custom-control-label LP-Accounting-text-small" for="customSwitch2">
                      Configure Fund Source for Payment Channels
                    </label>
                  </div>

                  <div className="apply_fs">

                    <div 
                      className="click-appear-div w-100 py-4"  
                      style={{display: `${apply_fs}`}}
                    >
                    
                      {principals}

                      <div className="row mt-4 mb-3">
                        <div className="col-md-4">
                          <div className="form-group">
                            <div 
                              className="py-3 mx-3 px-4" 
                              onClick={add_principal}
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

                </div>

                <hr/>

                <div>
                  <div class="custom-control custom-switch my-2">
                    <input type="checkbox" class="custom-control-input" id="customSwitch3" />
                    <label class="custom-control-label LP-Accounting-text-small" for="customSwitch3">
                      Map Fees to Income Accounts
                    </label>
                  </div>
                  <div class="custom-control custom-switch my-2">
                    <input type="checkbox" class="custom-control-input" id="customSwitch4" />
                    <label class="custom-control-label LP-Accounting-text-small" for="customSwitch4">
                      Map Penalties to Specific Income Accounts
                    </label>
                  </div> 
                </div>
              </div>

              <hr/>

              <div className="container">
                <div 
                  className="LP-Accounting-btn-section my-5 w-100"
                >
                  <Button 
                    onClick={goto_charges}
                    className="py-2 btn-prev border-0 rounded font-weight-medium" 
                  >
                    <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                    Previous
                  </Button>
                  <Button 
                    onClick={goto_RDP_preview}
                    className="py-2 btn-next border-0 rounded font-weight-semibold"
                  >
                    Preview
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

export default LP_AccountingTab;
