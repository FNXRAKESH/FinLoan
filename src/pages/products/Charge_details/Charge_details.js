import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Charge_details.scss';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faChevronRight, faTrash, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Delete_charge = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="changeCursor">
      <h6 onClick={handleShow}>
        Delete Charge
      </h6>

      <Modal show={show} onHide={handleClose} size="sm" centered>
        <Modal.Body>
          <h5 className="text-center mt-2 mb-5">Delete Charge?</h5>
          <div>
            <Button 
              className="border-0 btn-lg btn-block mb-3"
              style={{background: '#FD5E1A'}}>
              <h6>Yes, Delete</h6>
            </Button>
          </div>
          <div>
            <Button 
              onClick={handleClose}
              className="border-0 btn-lg btn-block mb-3"
              style={{background: '#F3F5F8', color: 'rgba(10, 33, 62, 0.6)'}}>
              <h6>No, Keep it</h6>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

ReactDOM.render(<Delete_charge />, document.getElementById('root'));


const Charge_details = () => {
  let history = useHistory();
  const[toggle_details, setToggle_details] = React.useState('block');
  const[toggle_edit, setToggle_edit] = React.useState('none');

  function gotoEditCharge() {
    setToggle_edit('block');
    setToggle_details('none');
  }

  function gotoDetails() {
    setToggle_edit('none');
    setToggle_details('block');
  }
  return (
    
    <div
      id="Charge_details"
      className="pl-5"
    >

      <h5 className="py-4">
        Charge Details
      </h5>

      <motion.div
        className="mx-auto pb-4 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{borderRadius: '15px'}}
      >
        <div className="container">
        
          <div className="row">
            <div className="col-md-4 mb-3">
              
              <div className="col py-4 bg-white"
                style={{borderRadius: '15px'}}>
                <div className="row d-flex">
                  <div className="col-8 d-flex">
                    <div className="col">
                      <h5><b>Origination Fee</b></h5>
                      <h6 className="greyFont">Status:Active</h6>
                    </div>
                    
                  </div>
                  <div className="col-4 d-flex justify-content-end">
                    <div class="custom-control custom-switch my-2">
                      <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                      <label class="custom-control-label" for="customSwitch1">
                        
                      </label>
                    </div>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col greyFont">
                    <div className="col d-flex">
                      <FontAwesomeIcon className="mr-2" icon={faEdit}/>
                      <div className="changeCursor">
                        <h6
                          onClick={gotoEditCharge}
                        >
                          Edit Charge
                        </h6>
                      </div>
                      <FontAwesomeIcon className="ml-auto" icon={faChevronRight}/>
                    </div>
                    <div className="col d-flex">
                      <FontAwesomeIcon className="mr-2" icon={faTrashAlt}/>
                      <Delete_charge />
                      <FontAwesomeIcon className="ml-auto" icon={faChevronRight} />
                    </div>

                  </div>
                </div>
                
              </div>
            </div>

            <div className="col-md-8" style={{display: `${toggle_details}`}} >
              <div className="col py-4 bg-white" style={{borderRadius: '15px'}}>
                <div className="row px-2">
                  <div className="col">
                    <h5>Charge Details</h5>
                  </div>
                </div>
                <div className="row px-2">
                  <div className="col-md-6 py-2" >
                    <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                      <h6 className="greyFont">
                        Charge Type
                      </h6>
                      <h6>
                        <b>Charge</b>
                      </h6>
                    </div>
                    
                  </div>
                  <div className="col-md-6 py-2" >
                    <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                      <h6 className="greyFont">
                        Currency
                      </h6>
                      <h6>
                        <b>Indian Rupee</b>
                      </h6>
                    </div>
                    
                  </div>
                </div>

                <div className="row px-2">
                  <div className="col-md-6 py-2" >
                    <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                      <h6 className="greyFont">
                        Amount
                      </h6>
                      <h6>
                        <b>0.75</b>
                      </h6>
                    </div>
                    
                  </div>
                  <div className="col-md-6 py-2" >
                    <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                      <h6 className="greyFont">
                        Charge Time Type
                      </h6>
                      <h6>
                        <b>Disbursement</b>
                      </h6>
                    </div>
                    
                  </div>
                </div>

                <div className="row px-2">
                  <div className="col-md-6 py-2" >
                    <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                      <h6 className="greyFont">
                        Charge Applies to
                      </h6>
                      <h6>
                        <b>Loan</b>
                      </h6>
                    </div>
                    
                  </div>
                  <div className="col-md-6 py-2" >
                    <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                      <h6 className="greyFont">
                        Charge Calculation Type
                      </h6>
                      <h6>
                        <b>% Amount</b>
                      </h6>
                    </div>
                    
                  </div>
                </div>

                <div className="row px-2">
                  <div className="col-md-6 py-2" >
                    <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                      <h6 className="greyFont">
                        Active
                      </h6>
                      <h6>
                        <b>Yes</b>
                      </h6>
                    </div>
                    
                  </div>
                  <div className="col-md-6 py-2" >
                    <div className="col py-4" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                      <h6 className="greyFont">
                        Charge Payment Mode
                      </h6>
                      <h6>
                        <b>Regular</b>
                      </h6>
                    </div>
                    
                  </div>
                </div>
              </div>
                
            </div>

            <div className="col-md-8" style={{display: `${toggle_edit}`}}>
              <div className="col py-4 bg-white" style={{borderRadius: '15px', background: '#F3F5F8'}}>
                <div className="row px-2">
                  <div className="col pb-4">
                    <h5>Edit Charge</h5>
                  </div>
                </div>
                <form className="px-2">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label>
                          Charge applies to
                        </label>
                        <select
                          className="custom-select px-3"
                        >
                          <option selected>Select Currency</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <hr/>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Name
                        </label>
                        <input
                          className="form-control px-3"
                          type="text">
                        </input>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Currency
                        </label>
                        <select
                          className="custom-select px-3"
                        >
                          <option selected>Indian Rupee</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Charge time type
                        </label>
                        <select
                          className="custom-select px-3"
                        >
                          <option selected>Disbursement</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Charge calculation
                        </label>
                        <select
                          className="custom-select px-3"
                        >
                          <option selected>%Amount</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Charge payment by
                        </label>
                        <select
                          className="custom-select px-3"
                        >
                          <option selected>Regular</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <hr/>
                  <div className="row mt-4">
                    <div className="col">
                      <div className="form-group">
                        <div class="custom-control custom-switch my-2">
                          <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                          <label class="custom-control-label accounting-text-small" for="customSwitch1">
                            Add Fee Frequency
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Charge Frequency
                        </label>
                        <select
                          className="custom-select px-3"
                        >
                          <option selected>Disbursement</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Frequency Interval
                        </label>
                        <input
                          className="form-control px-3"
                          type="text">
                        </input>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Amount
                        </label>
                        <input
                          className="form-control px-3"
                          type="text">
                        </input>
                      </div>
                    </div>
                  </div>

                  <hr/>

                  <div className="row mt-4">
                    <div className="col">
                      <div className="form-group">
                        <div class="custom-control custom-switch my-2">
                          <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                          <label class="custom-control-label accounting-text-small" for="customSwitch2">
                            Active
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <div class="custom-control custom-switch my-2">
                          <input type="checkbox" class="custom-control-input" id="customSwitch3" />
                          <label class="custom-control-label accounting-text-small" for="customSwitch3">
                            Is Penalty ?
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr/>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          Tax Group
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

                  <hr/>

                  <div 
                    className="Edit_charge-btns my-4 w-100"
                  >
                    <Button 
                      onClick={gotoDetails}
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

                </form>
              </div>
                
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Charge_details;