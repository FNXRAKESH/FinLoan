import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './SaP-Terms.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

const SaP_Terms = () => {

  let history = useHistory();
  const [def_nom, setDef_nom] = useState('');

  function goto_cd() {
    history.push('/sap-currency-details');
  }

  function goto_settings() {
    if (def_nom == ''){
      localStorage.setItem('SaP-terms-error', 'true');
      history.push('/sap-settings');
    }
    else{
      localStorage.removeItem('SaP-terms-error');
      history.push('/sap-settings');
    }
  }


  function def_nominal(e) {
    setDef_nom(e.target.value);
  }

  
  return (
      <div 
        id="SaP_Terms"
        className="pl-5"
      >

        <div 
          className="SaP_create_terms"
        >
          <h5 
            className="py-3"
          >
            Create Saving Product
          </h5>
        
          <motion.div
            className="bg-white mx-auto pb-4 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{borderRadius: '15px'}}
          >
            <div className="SaP-Terms-checkbox-container">
              <Checkboxes />
            </div>

            <hr/>

            <form>
              <div className="container">
                <div className="my-4">
                  <h5>Term Details</h5>
                </div>

                <div className="row"
                >
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Nominal annual interest
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <select 
                        onChange={def_nominal}
                        className="custom-select px-3"
                      >
                        <option selected value="1">Daily</option>
                        <option value="2">Monthly</option>
                        <option value="3">Annually</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Interest compounding period
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <select 
                        className="custom-select px-3"
                      >
                        <option selected value="1">Daily</option>
                        <option value="2">Monthly</option>
                        <option value="3">Annually</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Interest posting period
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <select 
                        className="custom-select px-3"
                      >
                        <option value="1">Daily</option>
                        <option selected value="2">Monthly</option>
                        <option value="3">Annually</option>
                      </select>
                    </div>
                  </div>
                  
                </div>

                <div className="row"
                >
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Interest calculated using
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <select 
                        className="custom-select px-3"
                      >
                        <option selected value="1">Daily Balance</option>
                        <option value="2">Monthly Balance</option>
                        <option value="3">Annual Balance</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Days in year
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <select 
                        className="custom-select px-3"
                      >
                        <option selected value="1">365</option>
                        <option value="2">366</option>
                        <option value="3">Can't say</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <hr/>

              <div className="container">
                <div>
                  <div 
                    className="SaP-Terms-btn-section my-5 w-100"
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

export default SaP_Terms;
