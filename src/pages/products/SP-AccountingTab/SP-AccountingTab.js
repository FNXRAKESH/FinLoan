import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './SP-AccountingTab.scss';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCircle, faDotCircle, faInfoCircle, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';

const SP_AccountingTab = () => {

  let history = useHistory();

  function goto_charges() {
    history.push('/sp-charges');
  } 

  function goto_CRDP_preview() {
    history.push('/sp-preview');
  }
  

  const [icon1, setIcon1] = useState(<FontAwesomeIcon className="mr-2 my-auto" icon={faCircle} style={{color:'white', border: '1.5px solid rgba(10, 33, 62, 0.15)', borderRadius: '15px', fontSize: '22px'}} />);
  const [icon2, setIcon2] = useState(<FontAwesomeIcon className="mr-2 my-auto" icon={faDotCircle} style={{color:'#518EF8', borderRadius: '15px', fontSize: '22px'}} />) ;

  function select_accounting() {
    var t;
    t = icon1;
    setIcon1(icon2);
    setIcon2(t);
  }

  
  return (
      <div 
        id="SP_Accounting"
        className="pl-5"
      >

        
        <div 
          className="create_accounting"
        >
          <h5 
            className="py-4"
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
            <div className="SP-Accounting-checkbox-container">
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
                    onClick={select_accounting}
                    style={{
                      background: 'rgba(81, 142, 248, 0.1)',
                      border: '1px solid #518EF8',
                      borderRadius: '100px',
                      color: '#518EF8'
                    }}>
                      {icon1}
                      None
                  </Button>
                  <Button class="px-3 py-2"
                    onClick={select_accounting}
                    style={{
                    background: 'rgba(81, 142, 248, 0.1)',
                    border: '1px solid #518EF8',
                    borderRadius: '100px',
                    color: '#518EF8'
                  }}>
                    {icon2}
                    Cash
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
                        Share reference
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
                  <h5>Liabilities</h5>
                </div>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Share Suspense control
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
                  <h5>Share Equity</h5>
                </div>

                <div className="row py-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>
                        Equity
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
                </div>
              </div>

              <hr/>

              <div className="container">
                <div 
                  className="SP-Accounting-btn-section my-5 w-100"
                >
                  <Button 
                    onClick={goto_charges}
                    className="py-2 btn-prev border-0 rounded font-weight-medium" 
                  >
                    <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                    Previous
                  </Button>
                  <Button 
                    onClick={goto_CRDP_preview}
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

export default SP_AccountingTab;
