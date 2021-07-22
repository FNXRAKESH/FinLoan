import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './LP-Charges.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTimesCircle, faInfoCircle, faPen } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';
import swal from 'sweetalert';

const LP_Charges = () => {

  let history = useHistory();
  const [charges, setCharges] = useState('');

  function goto_IRC() {
    history.push('/lp-settings');
  }

  function goto_accounting() {
    if (charges == '') {
      localStorage.setItem('LP-charges-error', 'true');
      history.push('/lp-accountingTab');
    }
    else{
      localStorage.removeItem('LP-charges-error');
      history.push('/lp-accountingTab');
    }
  }

  function chargesHandler(e) {
    setCharges(e.target.value);
    add_tags(e.target.value);
    console.log(typeof(e.target.value));
  }

  const charge_types = ['First', 'Second', 'Third', 'Other'];

  const [tags_set, setTags_set] = useState(new Set([
    'A Charge Title',
    'B Charge Title',
    'C Charge Title',
    'D Charge Title',
    'E Charge Title',
    'F Charge Title',
    'G Charge Title',
    'H Charge Title'
  ]));

  function add_tags(val) {
    tags_set.forEach((el) => {
      if (el == val) {
        swal({icon: 'error', title: 'You have already added this Charge tag'});
      }
    });
    setTags_set(new Set(tags_set).add(val));
  }

  

  function delete_tags(val) {
    const filter = [];
    tags_set.forEach((el) => {
      if (el != val){
        filter.push(el);
      }
    })
    setTags_set(new Set(filter));
  }
  
return (
      <div 
        id="LP_Charges"
        className="pl-5"
      >

        <div 
          className="create_charges"
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
            <div className="LP-Charges-checkbox-container">
              <Checkboxes />
            </div>

            <hr/>

            <form>
              <div className="container">
                <div className="my-4">
                  <h5>Charges</h5>
                </div>

                <div className="LP-Charges-input-section my-4 py-4 ">
                  <div className="col-md-6">
                    <div className="form-group">
                      <select 
                        onChange={chargesHandler}
                        className="custom-select px-3"
                      >
                        <option selected disabled>Select Charges</option>
                        {charge_types.map((each) => (
                          <option 
                            value={each}>{each}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div 
                    className="mt-5 mb-4 px-3">
                    <h6>Added Charges</h6>
                  </div>

                  <div className="LP-Charges-tags-div d-flex mx-3 pb-2 overflow-auto">
                    {[...tags_set].map((entry) => (
                      <div
                        className="LP-Charges-tag pt-2 px-2 d-flex mr-3 align-items-center"
                      >
                        <p className="mt-2 px-2"
                          style={{
                            whiteSpace: 'nowrap',
                          }}>
                          {entry}
                        </p>
                        <div
                          className="ml-auto border-0"
                        >
                        <FontAwesomeIcon 
                          onClick={() => {delete_tags(entry)}}
                          className="mr-2"
                          icon={faTimesCircle}
                          style={{color: '#FD5E1A', fontSize: '22px', cursor: 'pointer'}} 
                          />
                        </div>
                      </div>
                    ))}

                  </div>

                </div>

                <hr/>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Overdue Charges
                        <FontAwesomeIcon className="ml-2" icon={faInfoCircle} style={{color: "rgba(10, 33, 62, 0.25)"}}/>
                      </label>
                      <select 
                        className="custom-select custom-select h-75 px-3"
                      >
                        <option selected>Select Overdue Charges</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                  </div>
                </div>

              </div>

              <hr/>

              <div className="container">
                <div 
                  className="LP-Charges-btn-section my-5 w-100"
                >
                  <Button 
                    onClick={goto_IRC}
                    className="py-2 btn-prev border-0 rounded font-weight-medium"
                  >
                    <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                    Previous
                  </Button>
                  <Button 
                    onClick={goto_accounting}
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

export default LP_Charges;