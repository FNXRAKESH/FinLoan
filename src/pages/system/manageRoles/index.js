import React, { useState } from 'react';
import swal from 'sweetalert';
import Plus from './icons/plus-circle.svg';

const data = [
    {
        role: 'Loan Officer',
        desc: 'Loan Officer',
        checked: false
    },
    {
        role: 'Self Service User',
        desc: 'Self service user role',
        checked: true
    },
    {
        role: 'Super User',
        desc: 'This role provides all Application permissions.',
        checked: true
    }
];

export default function ManageRoles() {
    const [roles, addRoles] = useState(data);
    const [newRole, setNewRole] = useState({
        name: '',
        desc: ''
    });

    const addNewRole = () => {
        let unique = 1;
        const regexp = new RegExp(`^${newRole.name}$`, 'i');

        roles.forEach(role => {
            if (role.role.match(regexp)) {
                unique = 0;
                swal({
                    icon: 'error',
                    title: 'This role already exists'
                });
                return;
            }
        });

        if (unique) {
            addRoles(roles => [
                ...roles,
                { role: newRole.name, desc: newRole.desc, checked: false }
            ]);
            setNewRole({
                name: '',
                desc: ''
            });
        }
    };

    const handleAddRole = (e, key) => {
        setNewRole(newRole => ({
            ...newRole,
            [key]: e.target.value.trim()
        }));
    };

    return (
        <div id="manageroles" className="pl-5 mb-5">
            <div className="py-3 d-flex align-items-center">
                <h5 className="flex-grow-1">Manage Roles & Permissions</h5>
                <div>
                    <div
                        className="blue-btn d-inline-block"
                        data-toggle="modal"
                        data-target="#addnewrole"
                    >
                        <img src={Plus} className="mr-2" alt="" />
                        <span className="align-middle">Add Role</span>
                    </div>
                </div>
            </div>
            <div className="row w-100">
                {roles.map(role => (
                    <div className="col-sm-6 col-lg-4 my-3" key={role.role}>
                        <div className="white-card d-flex align-items-center justify-content-between">
                            <div className="overflow-hidden">
                                <h6>{role.role}</h6>
                                <div className="text-muted text-truncate">
                                    {role.desc}
                                </div>
                            </div>
                            <div className="align-self-start">
                                <div className="custom-control custom-switch">
                                    <input
                                        type="checkbox"
                                        defaultChecked={role.checked}
                                        className="custom-control-input"
                                        id={role.role}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor={role.role}
                                    ></label>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/*Modals*/}
            <div
                className="modal fade"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="addrole"
                aria-hidden="true"
                id="addnewrole"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h5 className="modal-title" id="addCodeModal">
                                New Role
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label className="form-label" htmlFor="addCode">
                                Role Title
                            </label>
                            <input
                                type="text"
                                id="addCode"
                                value={newRole.roleName}
                                onChange={e => handleAddRole(e, 'name')}
                                className="form-control"
                            />
                        </div>
                        <div className="modal-body">
                            <label className="form-label" htmlFor="addCode">
                                Role Description
                            </label>
                            <textarea
                                type="text"
                                id="roleDesc"
                                value={newRole.desc}
                                onChange={e => handleAddRole(e, 'desc')}
                                rows={6}
                                className="form-control"
                            />
                        </div>
                        <div className="modal-footer border-top-0">
                            <button
                                type="button"
                                className="green-btn w-100"
                                data-dismiss="modal"
                                onClick={addNewRole}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
