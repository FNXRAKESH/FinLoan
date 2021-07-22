import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Plus from './icons/plus-circle.svg';
import ArrowDown from './icons/chevron-down.svg';
import './index.scss';

const data = [
    {
        name: 'CodeValueName',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
        position: 'Position details',
        active: true
    },
    {
        name: 'CodeValueName',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
        position: 'Position details',
        active: true
    },
    {
        name: 'CodeValueName',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
        position: 'Position details',
        active: false
    },
    {
        name: 'CodeValueName',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
        position: 'Position details',
        active: true
    },
    {
        name: 'CodeValueName',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
        position: 'Position details',
        active: true
    },
    {
        name: 'CodeValueName',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
        position: 'Position details',
        active: true
    }
];

export default function EditCode() {
    const history = useHistory();
    const [values, setValues] = useState(data);

    return (
        <div id="editcode" className="pl-5 mb-5">
            <div className="py-3 d-flex align-items-center">
                <h5 className="flex-grow-1">ADDRESS_TYPE</h5>
                <div
                    className="blue-btn"
                    onClick={() => history.push('/addcodevalue')}
                >
                    <img src={Plus} className="mr-2" alt="" />
                    Add Code Values
                </div>
            </div>

            <div className="row my-5 w-100">
                <div className="col-12 d-flex justify-content-center">
                    <div className="table-responsive-sm">
                        <table className="table table-borderless table-hover bg-white overflow-hidden">
                            <thead>
                                <tr className="py-4">
                                    <th scope="col" className="pl-4">
                                        Name
                                        <span>
                                            <img src={ArrowDown} alt="" />
                                        </span>
                                    </th>
                                    <th scope="col">Description</th>
                                    <th scope="col">
                                        Position
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
                                </tr>
                            </thead>
                            <tbody>
                                {values.map(record => (
                                    <tr key={record.name}>
                                        <td className="name-col">
                                            {record.name}
                                        </td>
                                        <td className="desc-col">
                                            {record.description}
                                        </td>
                                        <td className="pos-col">
                                            {record.position}
                                        </td>
                                        <td className="status-col">
                                            <div
                                                className={`${
                                                    record.active
                                                        ? 'active'
                                                        : 'inactive'
                                                } text-center d-inline-block`}
                                            >
                                                {record.active
                                                    ? 'Active'
                                                    : 'Inactive'}
                                            </div>
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
