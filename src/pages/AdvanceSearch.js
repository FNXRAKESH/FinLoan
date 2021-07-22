import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

const AdvanceSearch = () => {
  const [lop, setLop] = useState(false);
  const [lopCondition, setLopCondition] = useState('Between');
  return (
    <div id="advanceSearch" className="pl-5">
      <h5 className="py-3">Advance Search</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{ borderRadius: 15 + 'px' }}
        className="bg-white p-5"
      >
        <Form>
          <h6 className="py-2">Loan Status</h6>
          <div className="d-flex flex-wrap">
            <div className="m-2">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="All" />
              </Form.Group>
            </div>
            <div className="m-2">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Active" />
              </Form.Group>
            </div>
            <div className="m-2">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Overpaid" />
              </Form.Group>
            </div>
            <div className="m-2">
              <Form.Group controlId="formBasicCheckbox" className="d-flex">
                <Form.Check type="checkbox" />
                <Form.Label>
                  Closed{' '}
                  <small style={{ color: 'grey' }}>(Obligations met)</small>
                </Form.Label>
              </Form.Group>
            </div>
            <div className="m-2">
              <Form.Group controlId="formBasicCheckbox" className="d-flex">
                <Form.Check type="checkbox" />
                <Form.Label>
                  Closed <small style={{ color: 'grey' }}>(Written-Off)</small>
                </Form.Label>
              </Form.Group>
            </div>
          </div>
          <hr />
          <Row>
            <Col md className="p-0">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Product</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Product One</option>
                  <option>Product Two</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Office</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Office One</option>
                  <option>Office Two</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md></Col>
          </Row>
          <Row>
            <Col md className="p-0">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Select Date Type</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Approval Date</option>
                  <option>Rejected Date</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Select Date Range</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <div>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Loan Outstanding Percentage"
                onChange={(e) => {
                  e.target.checked ? setLop(true) : setLop(false);
                }}
              />
            </Form.Group>
          </div>
          {lop ? (
            <Row>
              <Col md>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Select Type</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    onChange={(e) => {
                      setLopCondition(e.target.value);
                    }}
                  >
                    <option>Between</option>
                    <option>{`<=`}</option>
                    <option>{`>=`}</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formBasicPassword">
                  {lopCondition === 'Between' ? (
                    <Form.Label>First Number</Form.Label>
                  ) : (
                    <Form.Label>Number</Form.Label>
                  )}
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
              {lopCondition === 'Between' ? (
                <Col md>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Last Number</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
              ) : null}
            </Row>
                  ) : null}
                  <hr />
          <div className="d-flex justify-content-end my-5">
            <div className="btnSubmit">
              <FontAwesomeIcon icon={faSearch}  />
              <p className="m-0 pl-2"> Search</p>
            </div>
          </div>
        </Form>
      </motion.div>
    </div>
  );
};

export default AdvanceSearch;
