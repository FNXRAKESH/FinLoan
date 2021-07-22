import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './SP-Terms.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

const SP_Terms = () => {

  let history = useHistory();
  const [def_amt, setDef_amt] = useState('');

  function goto_cd() {
    history.push('/sp-currency-details');
  }

  function goto_settings() {
    if (def_amt == ''){
      localStorage.setItem('SP-terms-error', 'true');
      history.push('/sp-settings');
    }
    else{
      localStorage.removeItem('SP-terms-error');
      history.push('/sp-settings');
    }
  }

  

  function def_amtHandler(e) {
    setDef_amt(e.target.value);
  }

  
  return (
      <div 
        id="SP_Terms"
        className="pl-5"
      >

        <div 
          className="SP_create_terms"
        >
          <h5 
            className="py-3"
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
            <div className="SP-Terms-checkbox-container">
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
                        Total Number of Shares
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <input
                        id="short-name"
                        className="form-control px-3" 
                        type="number"
                        onChange={def_amtHandler}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Shares to be issued
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <input
                        id="short-name"
                        className="form-control px-3" type="number"
                      />
                    </div>
                  </div>

                  <div
                    className="col-md-4">
                    <div className="form-group">
                      <label>
                        Nominal Price
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <input
                        id="description"
                        className="form-control px-3" type="number"
                      />
                    </div>
                  </div>
                </div>

                <div className="row"
                >

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Capital Value
                        <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                      </label>
                      <input
                        id="description"
                        className="dark-grey form-control px-3" type="number"
                      />
                    </div>
                  </div>
                </div>

              </div>

              <hr/>

              <div className="container">
                <div>
                  <div 
                    className="SP-Terms-btn-section my-5 w-100"
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

export default SP_Terms;
