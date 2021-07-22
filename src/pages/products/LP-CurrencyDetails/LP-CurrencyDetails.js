import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './LP-CurrencyDetails.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faCross, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

const LP_CurrencyDetails = () => {

  let history = useHistory();
  const [dplaces, setDplaces] = useState('');

  function goto_pd() {
    history.push('/lp-personal-details');
  }

  function goto_terms() {
    if(dplaces == '') {
      localStorage.setItem('LP-currency-error', 'true');
      history.push('/lp-terms');
    }
    else {
      localStorage.removeItem('LP-currency-error');
      history.push('/lp-terms');
    }
    
  }

  function d_placeshandler(e) {
    setDplaces(e.target.value);
  }
  
  return (
      <div 
        id="LP_CurrencyDetails"
        className="pl-5"
      >
        
        <div 
          className="create_CD"
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
            <div className="LP-CD-checkbox-container">
              <Checkboxes />
            </div>

            <hr/>

            <form>
              <div className="container" >
                <div className="my-4">
                  <h5>Currency Details</h5>
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
                        onChange={d_placeshandler}
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

                <div className="row my-2">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Installment in multiples of
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <input
                        className="form-control px-3" type="number"
                      />
                    </div>
                  </div>

                </div>
              </div>

              <hr/>

              <div className="container">
                <div>
                  <div className="LP-CD-btn-section my-5">
                    <Button
                      onClick={goto_pd}
                      className="py-2 btn-prev border-0 rounded font-weight-medium" 
                    >
                      <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                      Previous
                    </Button>
                    <Button
                      onClick={goto_terms}
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

export default LP_CurrencyDetails;
