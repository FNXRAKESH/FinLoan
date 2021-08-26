import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './manageSchedulerJobs.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes, faEdit, faSearch, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import {Button, Modal} from 'react-bootstrap';

const Show_Error = ({Name, Value}) => {
  
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const info = `{Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  
  
  Where does it come from?
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  
  
  Where does it come from?
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  
  
  Where does it come from?
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  
  
  Where does it come from?
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  
  
  Where does it come from?
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  
  }`;

  return (
    <div className="overflow-auto h-100">
      <div
        className="cursor-pointer"
        onClick={handleShow}
      >
        <FontAwesomeIcon className="align-middle" icon={faExclamationCircle} style={{color: '#FD5E1A', fontSize: '20px'}}/>

      </div>
      
      <Modal show={show} onHide={handleClose} size="xl" centered>
          <div className="mx-3">
              <Modal.Body>
                  <div className="d-flex my-4">
                    <h5 className="">Error Log</h5>
                    <FontAwesomeIcon 
                        className="ml-auto cursor-pointer" 
                        icon={faTimes}
                        onClick={handleClose}
                    />
                  </div>
                  <div className="overflow-auto pr-4" style={{height: '80vh'}}>
                    <p>{info}</p>
                  </div>

              </Modal.Body>
          </div>
      </Modal>

    </div>
  );
}

ReactDOM.render(<Show_Error />, document.getElementById('root'));

const manageSchedulerJobs = () => {

  let history = useHistory();

  const items = [{id: 1, Name: 'Add Accrual Transactions', Date: 'March 25, 2021', Time: '06:31:00 PM', PreviousRun: 'Success', CurrentStatus: 'Not Running', ErrorLogs: 'No'},
  {id: 2, Name: 'Add Accrual Transactions for Loans with income Posted as Transactions',  Date: 'March 25, 2021', Time: '06:31:00 PM', PreviousRun: 'Success', CurrentStatus: 'Not Running', ErrorLogs: 'No'},
  {id: 3, Name: 'Add Periodic Accrual Transactions',  Date: 'March 25, 2021', Time: '06:31:00 PM', PreviousRun: 'Success', CurrentStatus: 'Not Running', ErrorLogs: 'No'},
  {id: 4, Name: 'Apply Annual Fee for Savings', Date: 'March 25, 2021', Time: '06:31:00 PM', PreviousRun: 'Success', CurrentStatus: 'Not Running', ErrorLogs: 'No'},
  {id: 5, Name: 'Apply Holidays to Loans', Date: 'March 25, 2021', Time: '06:31:00 PM', PreviousRun: 'Success', CurrentStatus: 'Not Running', ErrorLogs: 'No'},
  {id: 6, Name: 'Apply Penalty to Loans',  Date: 'March 25, 2021', Time: '06:31:00 PM', PreviousRun: 'Success', CurrentStatus: 'Not Running', ErrorLogs: 'No'},
  {id: 7, Name: 'Execute Email',  Date: 'March 25, 2021', Time: '06:31:00 PM', PreviousRun: 'Failed', CurrentStatus: 'Not Running', ErrorLogs: 'Yes'},
  {id: 8, Name: 'Execute Report Mailing Jobs',  Date: 'March 25, 2021', Time: '06:31:00 PM', PreviousRun: 'Success', CurrentStatus: 'Not Running', ErrorLogs: 'No'}
  ];

  const [jobs, setJobs] = React.useState([]);
  const [active, setActive] = React.useState(true);

  const handleClick = () => {
    setActive(!active);
  }

  const setJobName = (url, job) => {
    history.push(url);
    localStorage.removeItem('jobName');
    localStorage.setItem('jobName',job);
  }

  React.useEffect(() =>{
    setJobs(items)
  }, [])

  return (
      <div 
        id="manageSchedulerJobs"
        className="pl-5"
      >
        <div className="d-flex py-4">
          <h5 className="pt-1">
            Manage Scheduler Jobs
          </h5>
          <p 
            className={`${active ? 'activeStatus' : 'inactiveStatus'} ml-3 px-3 py-1`}
            style={{
             
            }}
          >
            {active ? "Active" : "Inactive"}
          </p>
          <div class="custom-control custom-switch ml-auto">
            <input type="checkbox" class="custom-control-input" id="custom-switch-1" onClick={handleClick} checked={active}/>
            <label class="custom-control-label" for="custom-switch-1">
            </label>
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
                      <input
                        className="manageSchedulerJobs-checkbox mr-3"
                        type="checkbox"
                      />
                      Name
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Next Run
                      <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Previous Run
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Previous Run
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Current Status
                    </th>
                    <th 
                      className="py-3 font-weight-normal text-center" 
                    >
                      Error Logs
                    </th>
                  </tr>

                </thead>
                
                <tbody id="table-body" className="mt-3 pt-4">
                  
                  {jobs.map((user) => (
                  <tr>
                    <td 
                      className="py-3 w-25" 
                    >
                      <div className="d-flex">
                        <div className="box-div my-auto">
                        <input
                          className="manageSchedulerJobs-checkbox"
                          type="checkbox"
                        />
                        </div> 
                        <div 
                          className="ml-3 cursor-pointer"
                          onClick={()=> setJobName('/jobDetails', user.Name)}
                        >
                          {user.Name}
                        </div>
                      </div>
                      
                    </td>
                    <td 
                      className="py-3 text-center" 
                    >
                      {user.Date}
                      <p style={{fontSize: '14px'}}>{user.Time}</p>
                    </td>
                    <td 
                      className="py-3 text-center" 
                    >
                      {user.Date}
                      <p style={{fontSize: '14px'}}>{user.Time}</p>
                    </td>
                    <td 
                      className="py-3 text-center" 
                    >
                      <div
                          className="pt-1 pb-1 mx-auto"
                          style={
                            user.PreviousRun === 'Success'
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
                          {user.PreviousRun}
                        </div>
                    </td>
                    <td 
                      className="py-3 text-center" 
                    >
                      <div
                          className="pt-1 pb-1 mx-auto"
                          style={
                            user.CurrentStatus === 'Running'
                              ? {
                                  width: '80px',
                                  color: '#0A9D7A',
                                  background: 'rgba(10, 157, 122, 0.1)',
                                  borderRadius: '100px'
                                }
                              : {
                                  width: '120px',
                                  color: '#FD5E1A',
                                  background: 'rgba(253, 94, 26, 0.1)',
                                  borderRadius: '100px'
                                }
                          }
                        >
                          {user.CurrentStatus}
                        </div>
                    </td>
                    <td 
                      className="py-3 text-center" 
                    > {user.ErrorLogs == 'Yes' ?
                        <Show_Error />
                        : ''
                      }
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

export default manageSchedulerJobs;
