import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Edit from './icons/edit.svg';
import Delete from './icons/delete.svg';
import EditBlue from './icons/edit-blue.svg';
import DeleteRed from './icons/delete-red.svg';
import ArrowRight from './icons/arrow-right.svg';
import './index.scss';

const data = [
    {
        key: 'Report Type',
        value: 'SMS'
    },
    {
        key: 'Report Subtype',
        value: 'NonTriggered'
    },
    {
        key: 'Report subtype',
        value: 'Tompe'
    },
    {
        key: 'Core Report',
        value: 'False'
    },
    {
        key: 'Use Report',
        value: 'True'
    }
];

const Delete_Report = () => {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <div
            className="red-btn d-inline-block"
            data-toggle="modal"
            data-target="#deletereport"
            onClick={handleShow}
        >
            <img src={DeleteRed} className="mr-2" alt="" />
            <span className="align-middle">Delete</span>
        </div>
  
        <Modal show={show} onHide={handleClose} size="sm" centered>
          <Modal.Body>
            <h5 className="text-center mt-2 mb-5">Delete Report?</h5>
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
  
  ReactDOM.render(<Delete_Report />, document.getElementById('root'));
  
  

export default function ReportDetails() {
    const history = useHistory();
    const [details, setDetails] = useState(data);
    const reportName = localStorage.getItem('reportName');

    return (
        <div id="reportdetails" className="pl-5 mb-5">
            <div className="py-3 d-flex align-items-center">
                <h5 className="flex-grow-1">Report Details</h5>
                <div className="d-flex">
                    <div 
                        className="blue-btn d-inline-block"
                        onClick={()=> history.push('/editreport')}
                    >
                        <img src={EditBlue} className="mr-2" alt="" />
                        <span className="align-middle">Edit</span>
                    </div>
                    <Delete_Report />
                </div>
            </div>

            <div className="row w-100">
                <div className="col-md-6">
                    <div className="white-card height-unset">
                        <div className="border-bottom pb-4 mb-4">
                            <h6 className="font-weight-bolder">
                                {reportName}
                            </h6>
                            <span className="text-muted">Report Type: SMS</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src={Edit} className="mr-3" alt="edit" />
                                <span className="text-muted align-middle">
                                    Edit Report
                                </span>
                            </div>
                            <div>
                                <img src={ArrowRight} alt="" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div>
                                <img src={Delete} className="mr-3" alt="edit" />
                                <span className="text-muted align-middle">
                                    Delete Report
                                </span>
                            </div>
                            <div>
                                <img src={ArrowRight} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="white-card height-unset">
                        <h6 className="mb-3">User Details</h6>
                        <div className="row flex-wrap">
                            {data.map(details => (
                                <div className="col-md-6 my-2">
                                    <div className="card-grey">
                                        <div className="text-muted">
                                            {details.key}
                                        </div>
                                        <h6>{details.value}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*Modals*/}
            <div
                role="dialog"
                aria-modal="true"
                className="fade modal"
                tabIndex="-1"
                id="deletereport"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title h4">Delete Report?</div>
                            <button type="button" className="close">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="delete-btn w-100 py-2 mb-3">
                                <p className="m-0 text-center w-100">
                                    Yes, Delete
                                </p>
                            </div>
                            <div className="cancel-btn py-2 w-100">
                                <p className="m-0 text-center w-100">
                                    No, Keep It
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
