import React, { useState } from 'react';
import DeleteRed from './icons/delete-red.svg';
import DeleteWhite from './icons/delete-white.svg';
import Check from './icons/check.svg';
import Edit from './icons/edit-white.svg';
import Right from './icons/chevron-right.svg';
import './index.scss';

const data = [
    {
        sector: 'Accounting',
        selected: true
    },
    {
        sector: 'Account_transfer',
        selected: false
    },
    {
        sector: 'Authorisation',
        selected: false
    },
    {
        sector: 'Cash_mgmt',
        selected: false
    },
    {
        sector: 'Collection_sheet',
        selected: false
    },
    {
        sector: 'Configuration',
        selected: false
    },
    {
        sector: 'Datatable',
        selected: false
    },
    {
        sector: 'Externalservices',
        selected: false
    },
    {
        sector: 'Infrastructure',
        selected: false
    },
    {
        sector: 'Jobs',
        selected: false
    },
    {
        sector: 'LOAN_PROVISIONING',
        selected: false
    },
    {
        sector: 'Loan_reschedule',
        selected: false
    },
    {
        sector: 'Organisation',
        selected: false
    }
];

const permissions = [
    'CREATE ACCOUNTINGRULE',
    'DELETE ACCOUNTINGRULE',
    'READ ACCOUNTINGRULE',
    'UPDATE ACCOUNTINGRULE',
    'CREATE FINANCIALACTIVITYACCOUNT',
    'DELETE FINANCIALACTIVITYACCOUNT',
    'READ FINANCIALACTIVITYACCOUNT',
    'UPDATE FINANCIALACTIVITYACCOUNT',
    'CREATE GLACCOUNT',
    'DELETE GLACCOUNT',
    'READ GLACCOUNT',
    'UPDATE GLACCOUNT',
    'CREATE GLCLOSURE'
];

export default function RoleDetails() {
    const [active, setActive] = useState(false);
    const [sectors, setSectors] = useState(data);
    const [perm, setPerm] = useState(permissions);

    const handleActive = () => {
        setActive(!active);
    };

    const handleClick = s => {
        // let sec = sectors;

        const arr = sectors.map(item => {
            if (item.sector === s) {
                item.selected = true;
            } else {
                item.selected = false;
            }
            return item;
        });

        setSectors(arr);
    };

    return (
        <div id="roledetails" className="pl-5 mb-5">
            <h5 className="py-3">Role Details</h5>

            <div className="row w-100">
                <div className="col-12">
                    <div
                        className={`white-card d-flex justify-content-between py-4 ${
                            active ? 'blue-card' : ''
                        }`}
                    >
                        <div>
                            <h5>Loan Officer</h5>
                            <div className="text-muted">Loan Officer</div>
                        </div>
                        <div>
                            <div
                                className="red-btn d-inline-block mr-4"
                                data-toggle="modal"
                                data-target="#deletereport"
                            >
                                <img
                                    src={`${active ? DeleteWhite : DeleteRed}`}
                                    className="mr-2"
                                    alt=""
                                />
                                <span className="align-middle">Delete</span>
                            </div>
                            <div className="custom-control custom-switch d-inline-block">
                                <input
                                    type="checkbox"
                                    checked={active}
                                    onChange={handleActive}
                                    className="custom-control-input"
                                    id="role"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="role"
                                ></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row w-100 mt-5">
                <div className="col-12">
                    <div className="white-card">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
                                <div>
                                    <h6>Permissions</h6>
                                </div>
                                <div className="text-muted">
                                    <span>
                                        <img src={Check} alt="" />
                                        Check All
                                    </span>
                                    <div className="blue-btn blue-btn--filled d-inline-block ml-4">
                                        <img
                                            src={Edit}
                                            className="mr-2"
                                            alt=""
                                        />
                                        <span className="align-middle">
                                            Edit
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 border-right">
                                {sectors.map(sector => (
                                    <div
                                        className="d-flex justify-content-between mb-3 cursor-pointer"
                                        onClick={() =>
                                            handleClick(sector.sector)
                                        }
                                        key={sector.sector}
                                    >
                                        <span
                                            className={`font-weight-bolder text-muted ${
                                                sector.selected
                                                    ? 'text-blue'
                                                    : ''
                                            }`}
                                        >
                                            {sector.sector}
                                        </span>
                                        <img src={Right} alt="" />
                                    </div>
                                ))}
                            </div>
                            <div className="col-8">
                                {perm.map(p => (
                                    <div className="d-flex mb-3" key={p}>
                                        <div className="custom-control custom-switch d-inline-block mr-3">
                                            <input
                                                type="checkbox"
                                                defaultChecked={false}
                                                className="custom-control-input"
                                                id={p}
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor={p}
                                            ></label>
                                        </div>
                                        <span className="font-weight-500">
                                            {p}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
