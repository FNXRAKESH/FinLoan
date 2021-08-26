import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ETEMapping.scss';
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight, faPlusCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import {Button, Modal} from 'react-bootstrap';


const Add_Entity_Mapping = ({name}) => {  
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <motion.div
        className="addETEMapping py-3 d-flex cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={handleShow}
      >
        <FontAwesomeIcon className="ml-3 mr-2 my-auto" icon={faPlusCircle} style={{fontSize: '20px'}}/>
        <h6 className="my-auto">Add</h6>
      </motion.div>
      
      <Modal show={show} onHide={handleClose} size="sm" centered>
          <div className="mx-2">
              <Modal.Body>
                  <div className="d-flex">
                  <h5 className="">Add Entity Mapping</h5>
                  <FontAwesomeIcon 
                      className="ml-auto cursor-pointer" 
                      icon={faTimes}
                      onClick={handleClose}
                  />
                  </div>
              <div className="mt-4">
                <label>
                  Office
                </label>
                <select
                    className="custom-select px-3"
                >
                  <option selected>Finexus Head Office</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mt-4">
                <label>
                  {name}
                </label>
                <select
                    className="custom-select px-3"
                >
                  <option selected>Select {name}</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mt-4">
                <label>
                  Start Date
                </label>
                <input 
                  className="form-control"
                  type="date"
                />
              </div>
              <div className="mt-4">
                <label>
                  End Date
                </label>
                <input 
                  className="form-control"
                  type="date"
                />
              </div>
              <div className="mt-3">
                  <Button 
                  onClick={handleClose}
                  className="border-0 btn-lg btn-block mb-3"
                  style={{background: '#1AC29A', color: 'white'}}>
                  <h6 className="my-1">Add Entity Mapping</h6>
                  </Button>
              </div>
              </Modal.Body>
          </div>
      </Modal>

    </div>
  );
}

ReactDOM.render(<Add_Entity_Mapping />, document.getElementById('root'));

const ETEMapping = () => {

  let history = useHistory();

  const [name, setName] = React.useState(localStorage.getItem('pageName'));

  const items = [{Office: 'Finexus Head Office', LoanProduct: '', Date: 'March 25, 2021', Time: '06:31:00 PM'},
  {Office: 'Finexus Head Office', LoanProduct: '', Date: 'March 25, 2021', Time: '06:31:00 PM'},
  {Office: 'Finexus Bangalore Office', LoanProduct: '', Date: 'March 25, 2021', Time: '06:31:00 PM'},
  {Office: 'Finexus US Office', LoanProduct: '', Date: 'March 25, 2021', Time: '06:31:00 PM'},
  {Office: 'Finexus Bangalore Office', LoanProduct: '', Date: 'March 25, 2021', Time: '06:31:00 PM'},
  {Office: 'Finexus Head Office', LoanProduct: '', Date: 'March 25, 2021', Time: '06:31:00 PM'},
  {Office: 'Finexus Head Office', LoanProduct: '', Date: 'March 25, 2021', Time: '06:31:00 PM'}
  ];

  const [users, setUsers] = React.useState([]);

  React.useEffect(() =>{
    setUsers(items);
    console.log(location.name);
  }, [location])

  return (
      <div 
        id="ETEMapping"
        className="pl-5"
      >

        <div className="d-flex py-4">
          
          <div>
            <h5 className="py-2">
              Office Access to {name}
            </h5>
          </div>

          <div 
            className="ml-auto d-flex"
          >
            <Add_Entity_Mapping name={name} />
          </div>
          
        </div>

        
        <div className="container">

          <div className="row my-4">
            <div className="col-md">
              <div 
                className="py-2 d-flex justify-content-center"
              >
                <motion.div
                  className="btn1-ETEMapping mt-2 py-3 px-4 d-flex"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h6 className="my-auto">Select Office</h6>
                  <FontAwesomeIcon className="ml-2 mr-2 my-auto" icon={faChevronDown} style={{fontSize: '16px'}}/>
                </motion.div>
              </div>
            </div>
            <div className="col-md">
              <div 
                className="py-2 px-auto d-flex justify-content-center"
              >
                <motion.div
                  className="btn1-ETEMapping mt-2 py-3 px-4 d-flex"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h6 className="my-auto">{name}</h6>
                  <FontAwesomeIcon className="ml-2 mr-2 my-auto" icon={faChevronDown} style={{fontSize: '16px'}}/>
                </motion.div>
              </div>
            </div>
            <div className="col-md">
              <div 
                className="py-2 d-flex justify-content-center"
              >
                <motion.div
                  className="btn2-ETEMapping mt-2 py-3 px-4 d-flex"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h6 className="my-auto">Search</h6>
                  <FontAwesomeIcon className="ml-2 mr-2 my-auto" icon={faArrowRight} style={{fontSize: '16px'}}/>
                </motion.div>
              </div>
            </div>
          </div>
          
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
                      Office
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 pr-4 font-weight-normal text-left" 
                    >
                      {name}
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 pr-4 font-weight-normal text-left" 
                    >
                      Start Date
                    </th>
                    <th 
                      className="py-3 pr-4 font-weight-normal text-left" 
                    >
                      End Date
                    </th>
                  </tr>

                </thead>
                
                <tbody id="table-body" className="mt-3 pt-4">
                  
                  {users.map((user) => (
                  <tr>
                    <td 
                      className="py-3" 
                    >
                      <div className="mt-3">
                        {user.Office}
                      </div>
                    </td>
                    <td 
                      className="py-3 pr-4 text-left" 
                    >
                      <div className="mt-3">
                        {user.LoanProduct}
                      </div>
                    </td>
                    <td 
                      className="py-3 pr-4 text-left" 
                    >
                      {user.Date}
                      <h6 className="mt-2" style={{fontSize: '14px', fontWeight: '400'}}>{user.Time}</h6>
                    </td>
                    <td 
                      className="py-3 pr-4 text-left" 
                    >
                      {user.Date}
                      <h6 className="mt-2" style={{fontSize: '14px', fontWeight: '400'}}>{user.Time}</h6>
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

export default ETEMapping;
