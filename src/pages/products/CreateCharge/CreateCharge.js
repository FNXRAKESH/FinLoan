import * as React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './CreateCharge.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSave, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const CreateCharge = () => {
  let history = useHistory();

  function goto_cancel() {
    history.push("/charges");
  }

  return (
    <div
      id="CreateTaxComponents"
      className="pl-5">

      <h5
        className="py-3">
        Create Charge
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
            <h5 className="py-4">
              Charge details
            </h5>
            <div className="row">
              <div className="col-md">
                <div className="form-group">
                  <label>
                    Charge Applies To
                  </label>
                  <select 
                    className="custom-select"
                  >
                    <option selected>Loan</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="col-md">
                <div className="form-group">
                  <label>
                    Name
                  </label>
                  <select 
                    className="custom-select"
                  >
                    <option selected>Select Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="col-md">
                <div className="form-group">
                  <label>
                    Currency
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
            </div>

            <div className="row">
              <div className="col-md">
                <div className="form-group">
                  <label>
                    Charge time type
                  </label>
                  <select 
                    className="custom-select"
                  >
                    <option selected>Select One</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="col-md">
                <div className="form-group">
                  <label>
                    Charge calculation
                  </label>
                  <select 
                    className="custom-select"
                  >
                    <option selected>Select One</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="col-md">
                <div className="form-group">
                  <label>
                    Charge payment by
                  </label>
                  <select 
                    className="custom-select"
                  >
                    <option selected>Select One</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <label>
                  Amount
                </label>
                <input
                    className="form-control px-3" 
                    type="date"
                />
              </div>
            </div>

            <hr/>

            <div className="row">
              <div className="col-md">
                <div className="form-group">
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                    <label class="custom-control-label RDP-Settings-text-small" for="customSwitch1">
                      Active
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md">
                <div className="form-group">
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                    <label class="custom-control-label RDP-Settings-text-small" for="customSwitch2">
                      Is penalty?
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md">
                <div className="form-group">
                    <label>
                      Tax Group
                      <FontAwesomeIcon className="icon ml-3" icon={faInfoCircle} />
                    </label>
                    <select 
                      className="custom-select px-3"
                    >
                      <option selected>Select Option</option>
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
              className="CC-btn-section my-4"
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

export default CreateCharge;