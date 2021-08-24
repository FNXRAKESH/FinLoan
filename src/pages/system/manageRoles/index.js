import React, { useState } from 'react';
import swal from 'sweetalert';
import Plus from './icons/plus-circle.svg';
import ReactDOM from 'react-dom';
import {Button, Modal} from 'react-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const Add_Role = () => {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
        <div
            className="blue-btn d-inline-block"
            data-toggle="modal"
            data-target="#addnewrole"
            onClick={handleShow}
        >
            <img src={Plus} className="mr-2" alt="" />
            <span className="align-middle">Add Role</span>
        </div>

        
        <Modal show={show} onHide={handleClose} size="sm" centered>
            <div className="mx-2">
                <Modal.Body>
                    <div className="d-flex">
                    <h5 className="">New Role</h5>
                    <FontAwesomeIcon 
                        className="ml-auto cursor-pointer" 
                        icon={faTimes}
                        onClick={handleClose}
                    />
                    </div>
                <div className="mt-4">
                    <label>
                        Role Title
                    </label>
                    <input 
                        className="form-control"
                        type="text"
                    />
                </div>
                <div className="mt-3">
                    <label>
                        Role Description
                    </label>
                    <textarea
                        className="form-control"
                        rows="3"
                        type="text"
                    />
                </div>
                <div className="mt-3">
                    <Button 
                    onClick={handleClose}
                    className="border-0 btn-lg btn-block mb-3"
                    style={{background: '#1AC29A', color: 'white'}}>
                    <h6 className="my-1">Add Role</h6>
                    </Button>
                </div>
                </Modal.Body>
            </div>
        </Modal>

      </div>
    );
  }
  
  ReactDOM.render(<Add_Role />, document.getElementById('root'));
  

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
                    <Add_Role />
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
            
        </div>
    );
}
