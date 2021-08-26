import React, { useState } from 'react';
import DeleteRed from './icons/delete-red.svg';
import DeleteWhite from './icons/delete-white.svg';
import Check from './icons/check.svg';
import Edit from './icons/edit-white.svg';
import Right from './icons/chevron-right.svg';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

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

    const roleName = localStorage.getItem('roleName');
    const roleDesc = localStorage.getItem('roleDesc');

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

            <div
                className={`row mb-4 mx-auto ${active ? 'activeBg' : 'bg-white'} py-3 px-3`}
                style={{ borderRadius: '15px' }}
            >
                <div className="col">
                    <div>
                        <h5
                            style={{
                                color: `${active ? 'white' : ''}`
                            }}
                        >
                            {roleName}
                        </h5>
                        <h6 style={{ color: `${active ? 'white' : 'rgba(10, 33, 62, 0.6)'}` }}>{roleDesc}</h6>
                    </div>

                </div>

                <div className="col d-flex justify-content-end my-auto">
                    <div
                        className={`${active ? 'roleActive' : 'roleInactive'} d-flex mr-4`}
                    >
                        <div className="d-flex" style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon className="ml-3 mr-2 my-auto" icon={faTrash} />
                            <h6 className="my-2">Delete</h6>
                        </div>
                    </div>
                    <div class="custom-control custom-switch py-2">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1" onChange={handleActive} />
                        <label class="custom-control-label editSurvey-text-small" for="customSwitch1"></label>
                    </div>
                </div>

            </div>

            <div
                className="row w-100 mt-5 mx-auto px-3 py-3 bg-white"
                style={{ borderRadius: "15px" }}
            >
                <div className="col-12">
                    <div>
                        <div className="row py-3 border-bottom">
                            <div className="col-md">
                                <div>
                                    <h5>
                                        Permissions
                                    </h5>
                                </div>

                            </div>

                            <div className="col-md d-flex justify-content-end my-auto">
                                
                                <div className="d-flex mr-4">
                                    <img src={Check} />
                                    <h6 
                                        className="pt-2 pl-1 cursor-pointer"
                                        style={{color: 'rgba(10, 33, 62, 0.6)'}}
                                    >
                                        Check All
                                    </h6>
                                </div>
                                <div
                                    className={`roleActive d-flex mr-4`}
                                >
                                    <div className="d-flex py-2" style={{ cursor: 'pointer' }}>
                                        <FontAwesomeIcon className="ml-3 mr-2 my-auto" icon={faPen} />
                                        <h6 className="my-auto">Edit</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row pt-4">
                            <div className="col-4 border-right">
                                {sectors.map(sector => (
                                    <div
                                        className="d-flex justify-content-between mb-3 cursor-pointer overflow-auto"
                                        onClick={() =>
                                            handleClick(sector.sector)
                                        }
                                        key={sector.sector}
                                    >
                                        <h6
                                            className={`font-weight-bolder ${sector.selected
                                                    ? 'text-blue'
                                                    : 'text-muted'
                                                }`}
                                        >
                                            {sector.sector}
                                        </h6>
                                        <img src={Right} alt="" />
                                    </div>
                                ))}
                            </div>
                            <div className="col-8">
                                {perm.map(p => (
                                    <div className="d-flex mb-3 text-break" key={p}>
                                        <div className="custom-control custom-switch d-inline-block mr-3 text-break">
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
