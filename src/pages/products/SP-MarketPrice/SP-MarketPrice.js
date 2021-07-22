import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.css';
import './SP-MarketPrice.scss';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faTimesCircle,
  faInfoCircle,
  faPlusCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import Checkboxes from './Checkbox';

const Principal = (props) => {
  return (
    <>
      <div className="container">
        <div id={props.id} className="row">
          <div className="col-md-5">
            <div class="form-group">
              <label>
                {props.array.length == 0 ? (
                  <div className="d-flex">
                    <h6>From Date</h6>
                    <FontAwesomeIcon
                      className="icon ml-3"
                      icon={faInfoCircle}
                    />
                  </div>
                ) : (
                  ''
                )}
              </label>
              <input
                className="form-control px-3"
                type="date"
                onChange={props.validation}
              />
            </div>
          </div>

          <div className="col-md-5">
            <div class="form-group">
              <label>
                {props.array.length == 0 ? (
                  <div className="d-flex">
                    <h6>Nominal / Unit Price</h6>
                    <FontAwesomeIcon
                      className="icon ml-3"
                      icon={faInfoCircle}
                    />
                  </div>
                ) : (
                  ''
                )}
              </label>
              <input className="form-control px-3" type="text" />
            </div>
          </div>

          <div className="col-md-1 mt-4 mx-auto" style={{ color: '#FD5E1A' }}>
            <div class="form-group d-flex">
              {props.array.length >= 1 ? (
                <div className="mt-2 mx-auto">
                  <FontAwesomeIcon
                    onClick={() => {
                      document.getElementById(props.id).remove();
                    }}
                    icon={faTimesCircle}
                    style={{
                      color: '#FD5E1A',
                      fontSize: '22px',
                      cursor: 'pointer'
                    }}
                  />
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SP_MarketPrice = () => {
  let history = useHistory();

  const [val, set_val] = useState(true);
  const [from_date, setFrom_date] = useState('');

  const [principals, setPrincipals] = useState([]);

  function valid_From_date(e) {
    setFrom_date(e.target.value);
  }

  function goto_settings() {
    history.push('/sp-settings');
  }

  function goto_charges() {
    if (from_date == '') {
      localStorage.setItem('SP-MP-error', 'true');
      history.push('/sp-charges');
    } else {
      localStorage.removeItem('SP-MP-error');
      history.push('/sp-charges');
    }
  }

  function add_principal() {
    setPrincipals([
      ...principals,
      <Principal
        id={uuidv4().toString()}
        validation={valid_From_date}
        array={principals}
      />
    ]);
  }

  useEffect(() => {
    setPrincipals([
      ...principals,
      <Principal
        id={uuidv4().toString()}
        validation={valid_From_date}
        array={principals}
      />
    ]);
  }, []);

  return (
    <div id="SP_MarketPrice" className="pl-5">
      <div className="create_MP">
        <h5 className="py-3">Create Share Product</h5>

        <motion.div
          className="bg-white mx-auto pb-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ borderRadius: '15px' }}
        >
          <div className="SP-MP-checkbox-container">
            <Checkboxes />
          </div>

          <hr />

          <form>
            <div className="container">
              <div className="my-4">
                <h5>Market Price</h5>
              </div>

              <div className="apply_pi">
                <div className="row my-4">
                  <div className="col d-flex">
                    <h6>Market price periods</h6>
                    <FontAwesomeIcon
                      className="icon ml-3"
                      icon={faInfoCircle}
                    />
                  </div>
                </div>

                <div className="MP-blue-div w-100 py-4 mb-4">
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
                          }}
                        >
                          <FontAwesomeIcon
                            className="icon mr-3"
                            icon={faPlusCircle}
                            style={{
                              color: '#518EF8',
                              fontSize: '22px'
                            }}
                          />
                          Add Another Principal
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="container">
              <div className="SP-MP-btn-section my-5 w-100">
                <Button
                  onClick={goto_settings}
                  className="py-2 btn-prev font-weight-medium"
                >
                  <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                  Previous
                </Button>
                <Button
                  onClick={goto_charges}
                  className="py-2 btn-next font-weight-semibold"
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
};

export default SP_MarketPrice;
