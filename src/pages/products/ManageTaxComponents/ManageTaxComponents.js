import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ManageTaxComponents.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faPen, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ManageTaxComponents = () => {

  let history = useHistory();

  const items = [{Name: 'Wade Warren', Percentage: '12.5%', CreditAccountType: 'Asset', StartDate: '03 April 2021'},
  {Name: 'Jane Cooper', Percentage: '12.5%', CreditAccountType: 'Liability', StartDate: '03 April 2021'},
  {Name: 'Wade Warren', Percentage: '12.5%', CreditAccountType: 'Equity', StartDate: '03 April 2021'},
  {Name: 'Jane Cooper', Percentage: '12.5%', CreditAccountType: 'Income', StartDate: '03 April 2021'},
  {Name: 'Wade Warren', Percentage: '12.5%', CreditAccountType: 'Expense', StartDate: '03 April 2021'},
  {Name: 'Leonardo Da Vinci', Percentage: '12.5%', CreditAccountType: 'Asset', StartDate: '03 April 2021'},
  {Name: 'Wade Warren', Percentage: '12.5%', CreditAccountType: 'Liability', StartDate: '03 April 2021'},
  {Name: 'Robert Fox', Percentage: '12.5%', CreditAccountType: 'Asset', StartDate: '03 April 2021'}
  ];

  const filters = [];

  const [users, setUsers] = React.useState([]);

  React.useEffect(() =>{
    setUsers(items)
  }, [])
  
  function goto_create() {
    history.push("/create-tax-components");
  }

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
        id="FloatingRates"
        className="pl-5"
      >
        <div className="col">
          <div className="row mb-2">
            <div className="col-md-6">
              <h5 className="py-4">
                Manage Tax Components
              </h5>
            </div>

            <div className="col-md-6 py-2 d-flex justify-content-end">
              <motion.button
                className="create-tc mt-2 py-2 px-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={goto_create} >
                <FontAwesomeIcon className="mr-3 mt-1" icon={faPlusCircle} style={{fontSize: '20px'}}/>
                Create Tax Component
              </motion.button>
            </div>
          </div>
        </div>
        
        <div className="container">
          
          <div className="row">
            <motion.div 
              className="mtc-search mx-auto"
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
                      Created By
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Is Base Lending Rate ?
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      StartDate
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 pr-4 font-weight-normal text-center" 
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
                      className="py-3 text-center" 
                    >
                      {user.Percentage}
                    </td>
                    <td 
                      className="py-3 text-center" 
                    >
                      {user.CreditAccountType}
                    </td>
                    <td 
                      className="py-3 text-center" 
                    >
                      <div 
                        className="pt-1 pb-1 mx-auto" 
                      >
                        {user.StartDate}                   
                      </div>
                    </td>
                    <td 
                      className="py-3 pr-4 text-center" 
                      style={{color: '#518EF8'}}
                    >
                      <FontAwesomeIcon className="mr-2" icon={faPen} />
                      Edit
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

export default ManageTaxComponents;
