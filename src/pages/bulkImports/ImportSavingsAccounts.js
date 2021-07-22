import React, { useState, useEffect } from 'react';
import './Imports.styles.scss';
import { motion } from 'framer-motion';
import { Col, Form, Row, Button } from 'react-bootstrap';
import dragndrop from '../../images/dragndrop.png';
import save from '../../images/save.png';
import excel from '../../images/excel.png';
import trash from '../../images/trash.png';
import download from '../../images/downloadIcon.png';

const ImportSavingsAccounts = () => {
  const [fileName, setFileName] = useState('');
  const [upload, setUpload] = useState(0);
  const [anim, setAnim] = useState(0);
  useEffect(() => {
    console.log('use ', fileName, upload);
    setUpload(0);
    setAnim(0);
  }, [fileName]);
  return (
    <div id="importSavingsAccounts" className="pl-5">
      <h5 className="py-3">Import Savings Accounts</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div className="import w-100 mb-5">
          <Form>
            <h6>Saving Account Template</h6>
            <Row>
              <Col md >
                <Form.Group controlId="posting.currency">
                  <Form.Label>Office</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Finexus Head Office</option>
                    <option>Finexus Branch Office</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Staff</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Staff 1</option>
                    <option>Staff 2</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md>
              <div className="downloadButton pl-2">
                <img src={download} alt="Download" />
                Download
              </div>
              </Col>
              
              {/* <Col md>
                <Form.Group controlId="posting.currency">
                  <Form.Label>Legal Form</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Form 1</option>
                    <option>Form 2</option>
                  </Form.Control>
                </Form.Group>
              </Col> */}
            </Row>
            <hr />
            <h6>Savings Repayments</h6>
            <p>
              Select Excel File
              {/* <small>{' '}
                (Please retain the value Entity/Person in the filename)
              </small> */}
            </p>
            <div className="dragndrop d-flex flex-column align-items-center">
              <img src={excel} alt=" " />
              <div className="d-flex align-items-center mb-3">
                <img src={dragndrop} alt="drag and drop" />
                <p className="m-0 pl-3">Drag and drop image here</p>
              </div>
              <div>
                <div
                  className="selectFile"
                  onClick={() => {
                    document.getElementById('uploadFile').click();
                  }}
                >
                  Choose from computer
                </div>
                <Form.Group controlId="uploadFile" hidden>
                  <Form.Control
                    type="file"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    onChange={(e) => {
                      setFileName(e.target.files[0].name);
                    }}
                  ></Form.Control>
                </Form.Group>
              </div>
            </div>
            {fileName !== '' ? (
              <motion.div
                initial={
                  upload === 0 ? { display: 'none' } : { display: 'block' }
                }
                animate={
                  upload === 1 ? { display: 'none' } : { display: 'block' }
                }
                transition={{ delay: 0.5, duration: 0.5 }}
                className="py-5"
                id="uploadContainer"
              >
                <h6>Uploading File</h6>
                <div className="fileUpload">
                  <img
                    src={excel}
                    alt="excel"
                    height={30}
                    style={{ zIndex: 1 }}
                  />
                  <p className="m-0 flex-grow-1 pl-2" style={{ zIndex: 1 }}>
                    {fileName}
                  </p>
                  <img
                    src={trash}
                    alt="trash"
                    style={{ zIndex: 1 }}
                    onClick={() => {
                      setUpload(1);
                      setAnim(100);
                    }}
                  />
                  <motion.div
                    initial={anim === 0 ? { width: 0 } : { width: 100 + '%' }}
                    animate={anim === 100 ? { width: 0 } : { width: 100 + '%' }}
                    transition={{ delay: 2, duration: 2 }}
                    className="overlay"
                  ></motion.div>
                </div>
              </motion.div>
            ) : null}
            <div className="d-flex justify-content-end mt-3">
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

export default ImportSavingsAccounts;
