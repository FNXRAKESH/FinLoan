import * as React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './CreateTaxComponents.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faSave, faPlusCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const CreateTaxComponents = () => {
  let history = useHistory();

  function goto_cancel() {
    history.push("/manage-tax-components");
  }

  return (
    <div
      id="CreateTaxComponents"
      className="pl-5">

      <h5
        className="py-3">
        Create Tax Component
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
            Component details
          </h5>
            <div className="row">
              <div className="col-md">
                <div className="form-group">
                  <label>
                    Name
                  </label>
                  <input
                    className="form-control px-3" 
                    type="text"
                  />
                </div>
              </div>

              <div className="col-md">
                <div className="form-group">
                  <label>
                    Percentage
                  </label>
                  <input
                    className="form-control px-3" 
                    type="number"
                  />
                </div>
              </div>

              <div className="col-md">
                <div className="form-group">
                  <label>
                    Credit Account Type
                  </label>
                  <select 
                    className="custom-select"
                  >
                    <option selected>Select Option</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Credit Account
                  </label>
                  <select 
                    className="custom-select"
                  >
                    <option selected>Select Option</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>
                    Start Date
                  </label>
                  <input
                    className="form-control px-3" 
                    type="date"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr/>

          <div className="container">
            <div 
              className="CTC-btn-section my-4"
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

export default CreateTaxComponents;