import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './FDP-PersonalDetails.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

const FDP_PersonalDetails = () => {
  let history = useHistory();
  const [name, setName] = useState('');

  function goto_currency_details() {
    if (name == ''){
      localStorage.setItem('FDP-personal-details-error', 'true');
      history.push('/fdp-currency-details');
    }
    else{
      localStorage.removeItem('FDP-personal-details-error');
      history.push('/fdp-currency-details');
    }
  }

  function goto_rdr() {
    history.push('/fixed-deposit-products');
  }

  function name_changeHandler(e) {
    setName(e.target.value);
  }

  return (
      <div 
        id="FDP_PersonalDetails"
        className="pl-5"
      >

        <h5 
          className="py-3"
        >
          Create Fixed Deposit Products
        </h5>

        
        <motion.div
          className="bg-white mx-auto pb-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{borderRadius: '15px'}}
        >

          
          <div className="FDP-PD-checkbox-container">
            <Checkboxes />
          </div>

          <hr/>
  
          <form>
            <div className="container">  
              <div className="my-4">
                <h5>Product Details</h5>
              </div>
              <div className="row my-2">

                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Product Name
                      <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                    </label>
                    <input
                      id="product-name"
                      className="form-control px-3"
                      type="search"
                      onChange={name_changeHandler}
                      required
                    />
                  </div>

                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Short Name
                      <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                    </label>
                    <input
                      id="short-name"
                      className="form-control px-3" 
                      type="search"
                    />
                  </div>
                </div>
              </div>
            
              
              <div className="row my-2">
                <div className="col">
                  <div className="form-group">
                  <label>
                    Description
                    <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
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
            </div>

            <hr/>
            <div className="container">
              <div>
                <div 
                  className="FDP-PD-btn-section my-5 w-100"
                >
                  <Button 
                    onClick={goto_rdr}
                    className="py-2 btn-prev font-weight-medium" 
                  >
                    <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                    Previous
                  </Button>

                  <Button 
                    type="button"
                    onClick={goto_currency_details}
                    className="py-2 btn-next font-weight-semibold"
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
    
  );
}

export default FDP_PersonalDetails;
