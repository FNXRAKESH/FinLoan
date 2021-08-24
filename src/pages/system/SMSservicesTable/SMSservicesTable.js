import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './SMSservicesTable.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faPen, faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import {Button, Modal} from 'react-bootstrap';

const Edit_Value = ({Name, Value}) => {
  
  const [show, setShow] = React.useState(false);
  const [val, setVal] = React.useState(Value);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div
        className="cursor-pointer"
        onClick={handleShow}
      >
        <FontAwesomeIcon className="mr-2" icon={faPen} />
        Edit
      </div>
      
      <Modal show={show} onHide={handleClose} size="sm" centered>
          <div className="mx-2">
              <Modal.Body>
                  <div className="d-flex">
                  <h5 className="">Edit Value</h5>
                  <FontAwesomeIcon 
                      className="ml-auto cursor-pointer" 
                      icon={faTimes}
                      onClick={handleClose}
                  />
                  </div>
              <div className="mt-4">
                  <label>
                      {Name}
                  </label>
                  <input 
                      id="val-input"
                      className="form-control"
                      type="text"
                      value={val}
                      onChange={e => setVal(e.target.value)}
                  />
              </div>
              <div className="mt-3">
                  <Button 
                  onClick={handleClose}
                  className="border-0 btn-lg btn-block mb-3"
                  style={{background: '#1AC29A', color: 'white'}}>
                  <h6 className="my-1">Change Value</h6>
                  </Button>
              </div>
              </Modal.Body>
          </div>
      </Modal>

    </div>
  );
}

ReactDOM.render(<Edit_Value />, document.getElementById('root'));

const SMSservicesTable = () => {

  let history = useHistory();

  const items = [{Name: 'host_name', Value: 'localhost'},
  {Name: 'port_number', Value: '9191'},
  {Name: 'end_point', Value: '/'},
  {Name: 'tenant_app_key', Value: ''},
  {Name: 'Others', Value: ''},
  ];

  const filters = [];

  const [users, setUsers] = React.useState([]);

  React.useEffect(() =>{
    setUsers(items)
  }, [])

  return (
      <div 
        id="SMSservicesTable"
        className="pl-5"
      >

        <div className="d-flex mb-2">
              <div>
                <h5 className="py-4">
                  SMS Services
                </h5>
              </div>

              <div 
                className="py-2 ml-auto d-flex"
                style={{width: '100px'}}
              >
                <motion.div
                  className="edit-SMSservicesTable mt-2 d-flex"
                  style={{cursor: 'pointer'}}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <FontAwesomeIcon className="ml-4 mr-2 my-auto" icon={faEdit} style={{fontSize: '20px'}}/>
                  <h6 className="my-auto">Edit</h6>
                </motion.div>
              </div>

        </div>

        
        <div className="container">
          
          <motion.div
            className="mx-auto pt-1 pb-4 mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{borderRadius: '15px'}}
          >
            <div className="table-div row bg-white">
              <div className="col">

              <Table 
                id="myTable"
                borderless 
                className="table-sm table-hover table-responsive-sm" 
              >
                <thead style={{color: 'rgba(10, 33, 62, 0.6)', borderBottom: '0.5px solid rgba(10, 33, 62, 0.1)'}}>

                  <tr>
                    <th 
                      className="py-3 font-weight-normal" 
                    >
                      Name
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Value
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 pr-4 font-weight-normal text-right" 
                    >
                      Action
                    </th>
                  </tr>

                </thead>
                
                <tbody id="table-body" className="mt-3 pt-4">
                  
                  {users.map((user) => (
                  <tr>
                    <td 
                      className="py-3" 
                    >
                      {user.Name}
                    </td>
                    <td 
                      className="py-3 pr-4 text-center" 
                    >
                      {user.Value}
                    </td>
                    <td 
                      className="py-3 pr-4 text-right" 
                      style={{color: '#518EF8'}}
                    >
                      <Edit_Value Name={user.Name} Value={user.Value} />
                    </td>
                    
                  </tr>
                  ))}

                </tbody>
              </Table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    
  );
}

export default SMSservicesTable;
