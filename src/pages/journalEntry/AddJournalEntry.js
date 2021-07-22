import React, { useState, useEffect } from 'react';
import './AddJournalEntry.styles.scss';
import { motion } from 'framer-motion';
import { Col, Form, Row, Button } from 'react-bootstrap';
import hide from '../../images/hide.png';
import show from '../../images/accounting/journal.svg';
import plusBlue from '../../images/plusBlue.png';
import close from '../../images/close.png';
import plusGreen from '../../images/plusGreen.png';
import { v4 as uuidv4 } from 'uuid';
import save from '../../images/save.png';
const AddJournalEntry = () => {
  const [toggleDebit, setToggleDebit] = useState([]);
  const [toggleCredit, setToggleCredit] = useState([]);
  const [togglePayment, setTogglePayment] = useState(false);

  useEffect(() => {
    setToggleDebit([...toggleDebit, <AddDebit />]);
    setToggleCredit([...toggleCredit, <AddCredit />]);
  }, []);
  const AddDebit = () => {
    let id = uuidv4().toString();
    return (
      <div className="debitEntry" id={id}>
        <Row>
          <Col md>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>
                Debit Entry{' '}
                {toggleDebit.length >= 1 ? (
                  <img
                    src={close}
                    alt=""
                    onClick={() => {
                      if (toggleDebit.length >= 1)
                        document.getElementById(id).remove();
                      else return;
                    }}
                  />
                ) : null}
              </Form.Label>
              <Form.Control as="select" custom>
                <option>Select Debit</option>
                <option>Debit 1</option>
                <option>Debit 2</option>
                <option>Debit 3</option>
                <option>Debit 4</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="posting.currency">
              <Form.Label>&nbsp;</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  };
  const AddCredit = () => {
   let id = uuidv4().toString();
    return (
      <div className="creditEntry" id={id}>
        <Row>
          <Col md>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>
                Credit Entry{' '}
                {toggleCredit.length >= 1 ? (
                  <img
                    src={close}
                    alt=""
                    onClick={() => {
                      if (toggleCredit.length >= 1)
                        document.getElementById(id).remove();
                      else return;
                    }}
                  />
                ) : null}
              </Form.Label>
              <Form.Control as="select" custom>
                <option>Select Credit</option>
                <option>Credit 1</option>
                <option>Credit 2</option>
                <option>Credit 3</option>
                <option>Credit 4</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group controlId="posting.currency">
              <Form.Label>&nbsp;</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  };
  return (
    <div id="addJournalEntry" className="pl-5">
      <h5 className="py-3">Add Journal Entries </h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div className="addJournalEntry w-100 mb-5">
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Office</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Finexus Head Office</option>
                    <option>Finexus Branch 1</option>
                    <option>Finexus Branch 2</option>
                    <option>Finexus Branch 3</option>
                    <option>Finexus Branch 4</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Currency</Form.Label>
                  <Form.Control as="select" custom>
                    <option>US Dollar ($)</option>
                    <option>INR Rupee (&#8377;)</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <h6 className="py-3">Affected GL Entries</h6>
            <div className="d-flex">
              <div
                className="d-flex mr-4 addDebit"
                onClick={() => {
                  setToggleDebit([...toggleDebit, <AddDebit />]);
                }}
              >
                <img src={plusBlue} alt="add" />
                <p className="m-0 pl-3">Add Debit</p>
              </div>
              <div
                className="d-flex addCredit"
                onClick={() => {
                  setToggleCredit([...toggleCredit, <AddCredit />]);
                }}
              >
                <img src={plusGreen} alt="add" />
                <p className="m-0 pl-3">Add Credit</p>
              </div>
            </div>
            {toggleDebit}
            {toggleCredit}
            <Row>
              <Col md>
                <Form.Group controlId="posting.transactionDate">
                  <Form.Label>Reference Number</Form.Label>
                  <Form.Control type="text"></Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.transactionDate">
                  <Form.Label>Transaction Date</Form.Label>
                  <Form.Control type="date"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <div
              className="d-flex align-items-center paymentToggle  my-4"
              onClick={() => setTogglePayment(!togglePayment)}
            >
              {!togglePayment ? (
                <img src={hide} alt="hide" height={30} />
              ) : (
                <img src={show} alt="show" />
              )}
              {!togglePayment ? (
                <p className="m-0 pl-3">Hide Payment Details</p>
              ) : (
                <p className="m-0 pl-3">Show Payment Details</p>
              )}
            </div>
            {!togglePayment ? (
              <div className="paymentType">
                <Row>
                  <Col md>
                    <Form.Group controlId="posting.currency">
                      <Form.Label>Payment Type</Form.Label>
                      <Form.Control as="select" custom>
                        <option>Electronic bank transfer</option>
                        <option>Cheque</option>
                        <option>Cash</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group controlId="posting.Account">
                      <Form.Label>Account</Form.Label>
                      <Form.Control type="text"></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Group controlId="posting.cheque">
                      <Form.Label>Cheque</Form.Label>
                      <Form.Control type="text"></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group controlId="posting.routine">
                      <Form.Label>Routine Code</Form.Label>
                      <Form.Control type="text"></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Group controlId="posting.receipt">
                      <Form.Label>Receipt</Form.Label>
                      <Form.Control type="text"></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md>
                    <Form.Group controlId="posting.bank">
                      <Form.Label>Bank</Form.Label>
                      <Form.Control type="text"></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            ) : null}
            <Row>
              <Col md>
                <Form.Group controlId="posting.receipt">
                  <Form.Label>Add Comment</Form.Label>
                  <Form.Control as="textarea" rows={5}></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-end">
              <Button variant="light" className="mr-3">
                Cancel
              </Button>
              <div className="btnSubmit">
                <img src={save} alt="Save" />
                <p className="m-0 pl-2"> Submit</p>
              </div>
            </div>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddJournalEntry;
