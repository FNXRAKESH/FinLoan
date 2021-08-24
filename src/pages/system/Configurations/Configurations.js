import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Configurations.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faPen, faTimes, faSearch} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import {Button, Modal} from 'react-bootstrap';

const Edit_Value = () => {
  
  const [show, setShow] = React.useState(false);

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
                      Code Name
                  </label>
                  <input 
                      className="form-control"
                      type="text"
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


const Configurations = () => {

  let history = useHistory();

  const items = [{id: 1, Name: 'allow-transactions-on-holiday', Value: '0'},
  {id: 2, Name: 'amazon-S3', Value: '0'},
  {id: 3, Name: 'backdate-penalties-enabled', Value: '0'},
  {id: 4, Name: 'change-emi-if-repayment-date-same-as-disbursmentdate', Value: '1'},
  {id: 5, Name: 'constraint_approach_for_datatables', Value: '0'},
  {id: 6, Name: 'daily-tpt-limit', Value: '1'},
  {id: 7, Name: 'Enable-Address', Value: '0'}
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
        id="Configurations"
        className="pl-5"
      >
        <div>
          <h5 className="py-4">
            Configurations
          </h5>
        </div>

        
        <div className="container">
          <div className="row">
              <motion.div 
                className="configuration-search mx-auto"
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
                      Value
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Action
                    </th>
                    <th 
                      className="py-3 pr-4 font-weight-normal text-center" 
                    >
                      Edit
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
                      className="py-3 text-center" 
                    >
                      <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id={user.id} />
                        <label class="custom-control-label" for={user.id}>
                        </label>
                      </div>
                    </td>
                    <td 
                      className="py-3 pr-4 text-center" 
                      style={{color: '#518EF8'}}
                    >
                      <Edit_Value />
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

export default Configurations;
