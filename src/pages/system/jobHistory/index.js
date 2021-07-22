import React, { useState } from 'react';
import Search from './icons/search.svg';
import ArrowDown from './icons/chevron-down.svg';
import './index.scss';

const data = [
    {
        version: '1',
        timeStart: 'Feb 18, 2021 6:31:00 PM',
        status: true,
        type: 'cron',
        error: null
    },
    {
        version: '2',
        timeStart: 'Feb 18, 2021 6:31:00 PM',
        status: true,
        type: 'cron',
        err: null
    },
    {
        version: '3',
        timeStart: 'Non Feb 18, 2021 6:31:00 PM',
        status: true,
        type: 'cron',
        err: null
    },
    {
        version: '4',
        timeStart: 'Feb 18, 2021 6:31:00 PM',
        status: true,
        type: 'cron',
        err: null
    },
    {
        version: '5',
        timeStart: 'Feb 18, 2021 6:31:00 PM',
        status: true,
        type: 'cron',
        err: null
    },
    {
        version: '6',
        timeStart: 'Feb 18, 2021 6:31:00 PM',
        status: true,
        type: 'cron',
        err: null
    },
    {
        version: '7',
        timeStart: 'Feb 18, 2021 6:31:00 PM',
        status: true,
        type: 'cron',
        err: null
    }
];

export default function JobHistory() {
    const [values, setValues] = useState(data);

    return (
        <div id="jobhistory" className="pl-5 mb-5">
            <h5 className="py-3">Job History</h5>

            <div className="row my-5 w-100">
                <div className="col-12 d-flex justify-content-center search-box">
                    <form className="align-items-center py-sm-4 flex-grow-1 w-100">
                        <div className="input-group bg-transparent">
                            <div className="input-group-prepend bg-transparent">
                                <span className="searchIcon input-group-text bg-white pl-3">
                                    <img src={Search} alt="" />
                                </span>
                            </div>

                            <input
                                placeholder="Filter by version"
                                id="inlineFormInputGroup"
                                className="search-input form-control border-0"
                            />
                        </div>
                    </form>
                </div>
            </div>

            <div className="row my-5 w-100">
                <div className="col-12 d-flex justify-content-center">
                    <div className="table-responsive-sm">
                        <table className="table table-borderless table-hover bg-white overflow-hidden">
                            <thead>
                                <tr className="py-4">
                                    <th scope="col" className="pl-4">
                                        Version
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                    <th scope="col">
                                        Run Start Time
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                    <th scope="col">
                                        Status
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                    <th scope="col">
                                        Run Type
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                    <th scope="col">
                                        Error Log
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {values.map(record => (
                                    <tr key={record.version}>
                                        <td className="version-col">
                                            {record.version}
                                        </td>
                                        <td className="time-col font-weight-500">
                                            {record.timeStart}
                                        </td>
                                        <td>
                                            <div
                                                className={`${
                                                    record.status
                                                        ? 'active'
                                                        : 'inactive'
                                                } text-center d-inline-block`}
                                            >
                                                {record.status
                                                    ? 'Success'
                                                    : 'Failed'}
                                            </div>
                                        </td>
                                        <td className="font-weight-500">
                                            {record.type}
                                        </td>
                                        <td>{record.err}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
