import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.css';
import './FDP-InterestRateChart.scss';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faInfoCircle,
  faPlusCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Principal from './Principal';
import { v4 as uuidv4 } from 'uuid';
import Checkboxes from './Checkbox';

const FDP_InterestRateChart = () => {
  let history = useHistory();

  const [add_prin, setAdd_prin] = useState('none');
  const [valid_from, setValid_from] = useState('');

  const [elements, setElements] = useState([]);
  const [show_elements, setShow_elements] = useState(['none']);

  function valid_fromHandler(e) {
    setValid_from(e.target.value);
  }

  function goto_settings() {
    history.push('/fdp-settings');
  }

  function goto_charges() {
    if (valid_from == '') {
      localStorage.setItem('FDP-IRC-error', 'true');
      history.push('/fdp-charges');
    } else {
      localStorage.removeItem('FDP-IRC-error');
      history.push('/fdp-charges');
    }
  }

  const [x, setX] = React.useState(0);

  function Principal_div() {
    if (x == 0) {
      setX(x + 1);
      setShow_elements('block');
      setAdd_prin('flex');
    } else {
      setX(x - 1);
      setAdd_prin('none');
      setShow_elements('none');
    }
  }

  function add_principal() {
    setElements([
      ...elements,
      <Principal id={uuidv4().toString()} array={elements} />
    ]);
  }

  useEffect(() => {
    setElements([
      ...elements,
      <Principal id={uuidv4().toString()} array={elements} />
    ]);
  }, []);

  return (
    <div id="FDP_InterestRateChart" className="pl-5">
      <div className="create_IRC">
        <h5 className="py-3">Create Fixed Deposit Products</h5>

        <motion.div
          className="bg-white mx-auto pb-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ borderRadius: '15px' }}
        >
          <div className="FDP-IRC-checkbox-container">
            <Checkboxes />
          </div>

          <hr />

          <form>
            <div className="container">
              <div className="my-4">
                <h5>Interest Rate Chart</h5>
              </div>

              <div className="row py-4">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Valid From Date
                      <FontAwesomeIcon
                        className="icon ml-3"
                        icon={faInfoCircle}
                      />
                    </label>
                    <input
                      id="short-name"
                      className="form-control px-3"
                      type="date"
                      onChange={valid_fromHandler}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Valid Till Date
                      <FontAwesomeIcon
                        className="icon ml-3"
                        icon={faInfoCircle}
                      />
                    </label>
                    <input
                      id="short-name"
                      className="form-control px-3"
                      type="date"
                    />
                  </div>
                </div>
              </div>

              <hr />

              <div style={{ fontSize: '20px' }}>
                <div class="custom-control custom-switch mb-4">
                  <input
                    onClick={Principal_div}
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch4"
                  />
                  <label
                    class="custom-control-label FDP-Settings-text-small"
                    for="customSwitch4"
                  >
                    Is primary grouping by Amount
                  </label>
                </div>

                <div
                  className="apply_pi"
                  style={{ display: `${show_elements}` }}
                >
                  <form>{elements}</form>
                </div>

                <div className="mt-5" style={{ display: `${add_prin}` }}>
                  <div
                    className="py-3 px-4"
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

            <hr />

            <div className="container">
              <div className="FDP-IRC-btn-section my-5 w-100">
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

export default FDP_InterestRateChart;
