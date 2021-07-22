import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Edit from './icons/edit.svg';
import History from './icons/history.svg';
import ArrowRight from './icons/arrow-right.svg';
import './index.scss';

const data = [
    {
        key: 'Job Name',
        value: 'Add Accrual Transactions'
    },
    {
        key: 'Cron Expression',
        value: '0 1 0 1/1 * ? *'
    },
    {
        key: 'Is Active Job?',
        value: 'Yes'
    },
    {
        key: 'Follow',
        value: 'Click Here To Generate Cron Expression'
    }
];

export default function JobDetails() {
    const history = useHistory();

    const [details, setDetails] = useState(data);

    return (
        <div id="jobdetails" className="pl-5 mb-5">
            <div className="py-3 d-flex align-items-center">
                <h5 className="flex-grow-1">Job Details</h5>
                <div>
                    <div className="custom-control custom-switch mr-md-5">
                        <input
                            type="checkbox"
                            defaultChecked={true}
                            className="custom-control-input"
                            id="jobactive"
                        />
                        <label
                            className="custom-control-label"
                            htmlFor="jobactive"
                        ></label>
                    </div>
                </div>
            </div>

            <div className="row w-100">
                <div className="col-md-6">
                    <div className="white-card height-unset">
                        <div className="border-bottom pb-4 mb-4">
                            <h6 className="font-weight-bolder">
                                Add Accrual Transactions
                            </h6>
                            <span className="text-muted"> 0 1 0 1/1 * ? *</span>
                        </div>
                        <div
                            className="d-flex justify-content-between cursor-pointer"
                            onClick={() => history.push('/editjob')}
                        >
                            <div>
                                <img src={Edit} className="mr-3" alt="edit" />
                                <span className="text-muted align-middle">
                                    Edit Job
                                </span>
                            </div>
                            <div>
                                <img src={ArrowRight} alt="" />
                            </div>
                        </div>
                        <div
                            className="d-flex justify-content-between mt-2 cursor-pointer"
                            onClick={() => history.push('/jobhistory')}
                        >
                            <div>
                                <img
                                    src={History}
                                    className="mr-3"
                                    alt="history"
                                />
                                <span className="text-muted align-middle">
                                    View History
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
                        <h6 className="mb-3">Job Details</h6>
                        <div className="row flex-wrap">
                            {data.map(details => (
                                <div
                                    className="col-md-6 my-2"
                                    key={details.key}
                                >
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
        </div>
    );
}
