import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './FloatingRateDetails.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlusCircle, faTimesCircle, faSave, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const Principal = (props) => {

  return (
    <>
    <div className="container">
      <div 
        id={props.id}
        className="row py-2">
        <div className="col-md">
          <div className="form-group">
            {props.array.length == 0 ? 
              <label>
               From Date
               <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label> : ''
            }
            <input
                className="form-control px-3" 
                type="date"
            />
          </div>
        </div>

        <div className="col-md">
          <div className="form-group">
          {props.array.length == 0 ? 
              <label>
               Interest Rate
               <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label> : ''
            }
            <input
                className="form-control px-3"
            />
          </div>
        </div>

        <div className="col-md">
          <div className="form-group">
          {props.array.length == 0 ? 
              <label>
               Is Differential?
               <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
              </label> : ''
            }
            <select 
              className="custom-select"
            >
              <option selected>Select Currency</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        
        <div className="col-md-2 mx-auto d-flex justify-content-center" style={{color:'#FD5E1A'}}>
          <div class="form-group">
            {props.array.length >= 1 ?
            <div className="mt-1">
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

const FloatingRateDetails = () => {
  const [apply_pi, set_apply_pi] = useState('none');
  const [principals, setPrincipals] = useState([]);
  const [val, set_val] = useState(true);

  let history = useHistory();

  function goto_cancel() {
    history.push("/floating-rates");
  }

  function add_principal() {
    setPrincipals([...principals, <Principal id={uuidv4().toString()} array={principals}/>]);
  }

  function API_div() {
    
    if (val) {
      set_apply_pi('block');
      set_val(!val);
    }
    else{
      set_apply_pi('none');
      set_val(!val);
    }
  }

  useEffect(() => {
    setPrincipals([...principals, <Principal id={uuidv4().toString()}  array={principals}/>]);
  }, [])

  return (
    <div
      id="FloatingRateDetails"
      className="pl-5">

      <h5 className="py-3">
        Create Floating Rates
      </h5>

      <motion.div
        className="bg-white mx-auto pb-4 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{borderRadius: '15px'}}
      >
        <form>
          <div className="container">
            <div className="py-4">
              <h5> Floating Rate Details </h5>
            </div>
           
            <div className="row my-2">
              <div className="col-md">
                <div className="form-group">
                  <label>
                    Currency
                    <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                  </label>
                  <select 
                    className="custom-select"
                  >
                    <option selected>Select Currency</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="col-md">
                <div className="form-group">
                  <label>
                    Decimal places
                    <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                  </label>
                  <input
                    id="decimal-places"
                    className="form-control px-3" 
                    type="number"
                    //onChange={d_placeshandler}
                  />
                </div>
              </div>

              <div className="col-md">
                <div className="form-group">
                  <label>
                    Currrency in multiples of
                    <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                  </label>
                  <input
                    className="form-control px-3" type="number"
                  />
                </div>
              </div>
            </div>

            <hr/>

            <div class="custom-control custom-switch mb-5">
              <input onClick={API_div} type="checkbox" class="custom-control-input" id="customSwitch2" />
              <label class="custom-control-label FRD-text-small" for="customSwitch2">
                Add Floating Rate Periods
              </label>
            </div>

            <div className="apply_pi">

              <div 
                className="click-appear-div w-100 py-4"  
                style={{display: `${apply_pi}`}}
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

          <div className="container">
            <div 
              className="FRD-btns my-4 w-100"
            >
              <Button 
                onClick={goto_cancel}
                className="py-2 px-4 btn-cancel font-weight-medium text-break" 
              >
                Cancel
              </Button>
              <Button 
                className="py-2 btn-submit rounded border-0 font-weight-semibold text-break"
              >
                <FontAwesomeIcon className="mr-3" icon={faSave} />
                Submit
              </Button>
            
            </div>
          </div>
        </form>
        
      </motion.div>

    </div>
  );
}

export default FloatingRateDetails;