import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Edit from './icons/edit.svg';
import History from './icons/history.svg';
import ArrowRight from './icons/arrow-right.svg';
import Save from './icons/save.svg';

const data = [
    {
        key: 'Job Name',
        value: 'Add Accrual Transactions'
    },
    {
        key: 'Cron Expression',
        value: '0 1 0 1/1 * ? *'
    }
];

export default function EditJob() {
    const history = useHistory();
    const [details, setDetails] = useState(data);
    const [active, setActive] = useState(true);

    const jobDataChange = (e, key) => {
        // setDetails(details => ({...details, [key]: e.target.value}))

        const arr = details.map(item => {
            if (item.key === key) {
                item.value = e.target.value;
            }
            return item;
        });
        setDetails(arr);
    };

    const toggleActive = () => {
        setActive(!active);
    };

    return (
        <div id="editJob" className="pl-5 mb-5">
            <div className="py-3 d-flex align-items-center">
                <h5 className="flex-grow-1">Job Details</h5>
                <div>
                    <div className="custom-control custom-switch mr-md-5">
                        <input
                            type="checkbox"
                            checked={active}
                            onChange={toggleActive}
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
                            <span className="text-muted">0 1 0 1/1 * ? *</span>
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
                                    alt="edit"
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
                            {details.map(param => (
                                <div className="col-md-6 my-2" key={param.key}>
                                    <div className="card-grey">
                                        <div className="form-group">
                                            <label
                                                className="form-label font-weight-500"
                                                htmlFor="name"
                                            >
                                                {param.key}
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control h-50px"
                                                value={param.value}
                                                onChange={e =>
                                                    jobDataChange(e, param.key)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row my-3">
                            <div className="col-12">
                                <div className="custom-control custom-switch">
                                    <input
                                        type="checkbox"
                                        checked={active}
                                        onChange={toggleActive}
                                        className="custom-control-input"
                                        id="job"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="job"
                                    >
                                        Is job active?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end mt-2">
                                <button
                                    type="button"
                                    className="mr-3 btn btn-light"
                                    onClick={() => history.push('/jobdetails')}
                                >
                                    Cancel
                                </button>
                                <div className="green-btn">
                                    <img
                                        src={Save}
                                        className="mr-2 align-bottom"
                                        alt=""
                                    />
                                    Submit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
