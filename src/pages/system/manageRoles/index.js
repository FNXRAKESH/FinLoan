import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import Plus from './icons/plus-circle.svg';
import ReactDOM from 'react-dom';
import {Button, Modal} from 'react-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Add_Role = ({data, setData}) => {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newRole, setNewRole] = useState({
        role: '',
        desc: '',
        checked: true
    });

    const addNewRole = () => {

        var f = 0;

        data.forEach(el => {

            if (newRole.role == el.role) {
                f = 1;
                swal({
                    icon: 'error',
                    title: 'This role already exists'
                });
            }
        });

        setData([...data, newRole]);
    }
  
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
                        onChange={(e)=> {setNewRole({role: e.target.value, desc: newRole.desc, checked: newRole.checked})}}
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
                        onChange={(e)=> {setNewRole({role: newRole.role, desc: e.target.value, checked: newRole.checked})}}
                    />
                </div>
                <div className="mt-3">
                    <Button 
                    onClick={handleClose}
                    className="border-0 btn-lg btn-block mb-3"
                    style={{background: '#1AC29A', color: 'white'}}>
                    <h6 className="my-1" onClick={addNewRole}>Add Role</h6>
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
    const history = useHistory();
    //const [roles, addRoles] = useState(data);

    const [data, setData] = useState([
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
    ]);
    
    const setRole = (url, role, roleDesc) => {
        history.push(url);
        localStorage.removeItem('roleName');
        localStorage.removeItem('roleDesc');
        localStorage.setItem('roleName', role);
        localStorage.setItem('roleDesc', roleDesc);
    }

    return (
        <div id="manageroles" className="pl-5 mb-5">
            <div className="py-3 d-flex align-items-center">
                <h5 className="flex-grow-1">Manage Roles & Permissions</h5>
                <div>
                    <Add_Role data={data} setData={setData}/>
                </div>
            </div>
            <div className="row w-100">
                {data.map(role => (
                    <div className="col-sm-6 col-lg-4 my-3" key={role.role}>
                        <div 
                            className="white-card d-flex align-items-center justify-content-between" 
                        >
                            <div 
                                className="overflow-hidden cursor-pointer"
                                onClick={()=>{setRole('/roledetails', role.role, role.desc)}}
                            >
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
