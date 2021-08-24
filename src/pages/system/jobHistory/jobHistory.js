import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './jobHistory.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faPen, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const jobHistory = () => {

  let history = useHistory();

  const items = [{Version: '1', RunStartTime: 'Feb 18, 2021 6:31:00 PM', Status: 'Success', RunType: 'cron'},
  {Version: '2', RunStartTime: 'Feb 18, 2021 6:31:00 PM', Status: 'Success', RunType: 'cron'},
  {Version: '3', RunStartTime: 'Feb 18, 2021 6:31:00 PM', Status: 'Success', RunType: 'cron'},
  {Version: '4', RunStartTime: 'Feb 18, 2021 6:31:00 PM', Status: 'Success', RunType: 'cron'},
  {Version: '5', RunStartTime: 'Feb 18, 2021 6:31:00 PM', Status: 'Success', RunType: 'cron'},
  {Version: '6', RunStartTime: 'Feb 18, 2021 6:31:00 PM', Status: 'Failed', RunType: 'cron'},
  {Version: '7', RunStartTime: 'Feb 18, 2021 6:31:00 PM', Status: 'Success', RunType: 'cron'}];

  const filters = [];

  const [users, setUsers] = React.useState([]);

  React.useEffect(() =>{
    setUsers(items)
  }, [])
  
  function goto_pd() {
    history.push("/sap-personal-details");
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
    <div id="jobHistory" className="pl-5">
      <div className="py-3 row d-flex">
        <h5 className="col-md-6 mt-3 mb-4">Job History</h5>
      </div>

      <div className="container">
        <div className="row">
          <motion.div
            className="jobHistory-search mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
          >
            <div className="input-group-lg d-flex">
              <span className="input-span input-group-append bg-white border-right-0 mb-4 pl-2">
                <span className="input-group-text bg-transparent border-0" st>
                  <FontAwesomeIcon
                    className="search-icon mt-1"
                    icon={faSearch}
                    style={{ fontSize: '20px' }}
                  />
                </span>
              </span>

              <input
                id="filter-by-name"
                onChange={filterFunction}
                className="search-bar form-control border-left-0 mb-4 px-3"
                type="search"
                placeholder="Filter by name..."
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto pt-1 pb-4 mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ borderRadius: '15px' }}
        >
          <div className="table-div row bg-white">
            <div className="col">
              <Table
                id="myTable"
                borderless
                className="table-sm table-hover table-responsive-sm"
              >
                <thead
                  style={{
                    color: 'rgba(10, 33, 62, 0.6)',
                    borderBottom: '0.5px solid rgba(10, 33, 62, 0.1)'
                  }}
                >
                  <tr>
                    <th className="py-3 font-weight-normal">
                      Version
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th className="py-3 font-weight-normal text-center">
                      Run Start Time
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th className="py-3 font-weight-normal text-center">
                      Status
                    </th>
                    <th className="py-3 font-weight-normal text-center">
                      Run Type
                    </th>
                    <th className="py-3 font-weight-normal text-center">
                      Error Log
                    </th>
                  </tr>
                </thead>

                <tbody id="table-body" className="mt-3 pt-4">
                  {users.map((user) => (
                    <tr>
                      <td className="py-3 pl-4">{user.Version}</td>
                      <td className="py-3 text-center pr-4">{user.RunStartTime}</td>
                      <td className="py-3 text-center">
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
                        className="py-3 text-center"
                      >
                        {user.RunType}
                      </td>
                      <td
                        className="py-3 text-center"

                      >
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

export default jobHistory;
