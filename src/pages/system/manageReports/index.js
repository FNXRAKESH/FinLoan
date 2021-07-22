import React, { useState } from 'react';
import Plus from './icons/plus-circle.svg';
import Search from './icons/search.svg';
import ArrowDown from './icons/chevron-down.svg';
import ArrowDownBlue from './icons/chevron-down-blue.svg';
import Filter from './icons/filter.svg';
import './index.scss';

const data = [
    {
        name: 'Active Clients',
        type: 'SMS',
        subtype: 'Non Triggered',
        category: 'Clients',
        core: 'False',
        user: 'True'
    },
    {
        name: 'Active Group Leaders',
        type: 'SMS',
        subtype: 'Non Triggered',
        category: 'Clients',
        core: 'False',
        user: 'True'
    },
    {
        name: 'Active Loan Clients',
        type: 'SMS',
        subtype: 'Non Triggered',
        category: 'Clients',
        core: 'False',
        user: 'True'
    },
    {
        name: 'Active Loan Summary per Branch',
        type: 'Pentaho',
        subtype: 'Triggered',
        category: 'Loan',
        core: 'False',
        user: 'True'
    },
    {
        name: 'Active Loans - Details',
        type: 'Table',
        subtype: 'Triggered',
        category: 'Loan',
        core: 'False',
        user: 'True'
    },
    {
        name: 'Active Loans - Details (Pentaho)',
        type: 'Pentaho',
        subtype: 'Triggered',
        category: 'Loan',
        core: 'False',
        user: 'True'
    },
    {
        name: 'Active Loans - Summary',
        type: 'Table',
        subtype: 'Triggered',
        category: 'Loan',
        core: 'False',
        user: 'True'
    }
];

export default function ManageReports() {
    const [values, setValues] = useState(data);

    const handleSearch = e => {};

    return (
        <div id="managereports" className="pl-5 mb-5">
            <div className="py-3 d-flex align-items-center">
                <h5 className="flex-grow-1">Manage Reports</h5>
                <div
                    className="blue-btn"
                    // onClick={() => triggerModal('addcode')}
                >
                    <img src={Plus} className="mr-2" alt="" />
                    Create Report
                </div>
            </div>

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
                                placeholder="Search by name, status, office"
                                id="inlineFormInputGroup"
                                className="search-input form-control border-0"
                                onChange={e => handleSearch(e)}
                            />
                            <div class="align-items-center pl-3 bg-white input-group-append filter">
                                <img src={Filter} />
                                <button
                                    type="button"
                                    class="btn btn-white btn-filter"
                                >
                                    Filter
                                    <span>
                                        <img
                                            src={ArrowDownBlue}
                                            className="px-2"
                                            alt=""
                                        />
                                    </span>
                                </button>
                            </div>
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
                                        Report Name
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                    <th scope="col">
                                        Type
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                    <th scope="col">
                                        Sub Type
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                    <th scope="col">
                                        Category
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                    <th scope="col">
                                        Core report
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                    <th scope="col">
                                        User report
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {values.map(record => (
                                    <tr key={record.name}>
                                        <td className="name-col">
                                            {record.name}
                                        </td>
                                        <td className="desc-col">
                                            {record.type}
                                        </td>
                                        <td className="pos-col">
                                            {record.subtype}
                                        </td>
                                        <td className="pos-col">
                                            {record.category}
                                        </td>
                                        <td className="pos-col">
                                            {record.core}
                                        </td>
                                        <td className="pos-col">
                                            {record.user}
                                        </td>
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
