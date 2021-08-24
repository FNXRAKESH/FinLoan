import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './manageSurveys.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faPen, faPlusCircle, faSearch, faTrash} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import {Button, Modal} from 'react-bootstrap';
import ReactDOM from 'react-dom';

const Delete_Survey = () => {
  
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <FontAwesomeIcon 
        className="ml-2 cursor-pointer" 
        icon={faTrash} 
        style={{color: '#FD5E1A'}}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} size="sm" centered>
        <Modal.Body>
          <h5 className="text-center mt-2 mb-5">Delete Survey?</h5>
          <div>
            <Button 
              className="border-0 btn-lg btn-block mb-3"
              style={{background: '#FD5E1A'}}>
              <h6>Yes, Delete</h6>
            </Button>
          </div>
          <div>
            <Button 
              onClick={handleClose}
              className="border-0 btn-lg btn-block mb-3"
              style={{background: '#F3F5F8', color: 'rgba(10, 33, 62, 0.6)'}}>
              <h6>No, Keep it</h6>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

ReactDOM.render(<Delete_Survey />, document.getElementById('root'));

const manageSurveys = () => {

  let history = useHistory();

  const items = [{id: 1, Name: 'Survey Name 1', Key: '1254788', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed', Code: '+91', Status: 'Success'},
  {id: 2, Name: 'Survey Name 2',  Key: '1254788', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed', Code: '+91', Status: 'Success'},
  {id: 3, Name: 'Survey Name 3',  Key: '1254788', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed', Code: '+91', Status: 'Success'},
  {id: 4, Name: 'Survey Name 4', Key: '1254788', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed', Code: '+91', Status: 'Success'},
  {id: 5, Name: 'Survey Name 5', Key: '1254788', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed', Code: '+91', Status: 'Success'},
  {id: 6, Name: 'Survey Name 6',  Key: '1254788', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed', Code: '+91', Status: 'Success'},
  {id: 7, Name: 'Survey Name 7',  Key: '1254788', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed', Code: '+91', Status: 'Success'},
  {id: 8, Name: 'Survey Name 8',  Key: '1254788', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed', Code: '+91', Status: 'Success'}
  ];

  const [users, setUsers] = React.useState([]);

  React.useEffect(() =>{
    setUsers(items)
  }, [])

  const filters = [];

  function filterFunction() {
    var input, filter, i, text;
    input = document.getElementById("filter-by-name");
    filter = input.value.toUpperCase();

    for (i = 0; i < items.length; i++) {
      text = items[i].Name;
      if (text) {
        if (text.toUpperCase().indexOf(filter) > -1) {
          filters.push(items[i]);
          setUsers(filters);
        }
      }       
    }
  }

  return (
      <div 
        id="manageSurveys"
        className="pl-5"
      >
        <div className="d-flex">
          <h5 className="py-4 mt-2 d-flex">
            Manage Surveys
          </h5>

          <div 
            className="py-3 ml-auto d-flex"
          >
            <motion.div
              className="edit-manageSurveys d-flex"
              style={{cursor: 'pointer'}}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <FontAwesomeIcon className="ml-4 mr-2 my-auto" icon={faPlusCircle} style={{fontSize: '20px'}}/>
              <h6 className="my-auto">Create Survey</h6>
            </motion.div>
          </div>
        </div>

        
        <div className="container">
        <div className="row">
              <motion.div 
                className="manageSurveys-search mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
              >
                <div className="input-group-lg d-flex">
                  <span 
                    className="input-span input-group-append bg-white border-right-0 mb-4 pl-2" 
                  >
                    <span 
                      className="input-group-text bg-transparent border-0" st>
                      <FontAwesomeIcon className="search-icon mt-1" icon={faSearch} style={{fontSize: '20px'}}/>
                    </span>
                  </span>
              
                  <input
                    id="filter-by-name"
                    onChange={filterFunction}
                    className="search-bar form-control border-left-0 mb-4 px-3" type="search" placeholder="Filter by name..."
                  />
                </div>
              
              </motion.div>
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
                      Name
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Key
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Description
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Code
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Status
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Actions
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
                      className="py-3 text-center" 
                    >
                      {user.Key}
                    </td>
                    <td 
                      className="py-3 text-center" 
                    >
                      {user.Description}
                    </td>
                    <td 
                      className="py-3 text-center" 
                    >
                      {user.Code}
                    </td>
                    <td 
                      className="py-3 text-center" 
                    >
                      <div
                          className="pt-1 pb-1 mx-auto"
                          style={
                            user.Status === 'Success'
                              ? {
                                  width: '80px',
                                  color: '#0A9D7A',
                                  background: 'rgba(10, 157, 122, 0.1)',
                                  borderRadius: '100px'
                                }
                              : {
                                  width: '80px',
                                  color: '#FD5E1A',
                                  background: 'rgba(253, 94, 26, 0.1)',
                                  borderRadius: '100px'
                                }
                          }
                        >
                          {user.Status}
                        </div>
                    </td>
                    <td 
                      className="py-3 d-flex" 
                    >
                      <div>
                        <FontAwesomeIcon className="mx-2 align-middle cursor-pointer" icon={faPen} style={{color: '#518EF8'}}/>
                      </div>
                      <Delete_Survey />
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

export default manageSurveys;
