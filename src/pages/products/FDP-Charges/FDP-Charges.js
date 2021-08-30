import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './FDP-Charges.scss';
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTimesCircle, faChevronDown, faPen } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Checkboxes from './Checkbox';
import swal from 'sweetalert';

const FDP_Charges = () => {

  let history = useHistory();
  const [charges, setCharges] = useState('');

  function goto_IRC() {
    history.push('/fdp-interest-rate-chart');
  }

  function goto_accounting() {
    if (charges == '') {
      localStorage.setItem('FDP-charges-error', 'true');
      history.push('/fdp-accountingTab');
    }
    else{
      localStorage.removeItem('FDP-charges-error');
      history.push('/fdp-accountingTab');
    }
  }

  function chargesHandler(e) {
    setCharges(e.target.value);
    add_tags(e.target.value);
    console.log(typeof(e.target.value));
  }

  const charge_types = ['First', 'Second', 'Third', 'Other'];

  const [tags_set, setTags_set] = useState(new Set([
    'A Charge Title',
    'B Charge Title',
    'C Charge Title',
    'D Charge Title',
    'E Charge Title',
    'F Charge Title',
    'G Charge Title',
    'H Charge Title'
  ]));

  function add_tags(val) {
    tags_set.forEach((el) => {
      if (el == val) {
        swal({icon: 'error', title: 'You have already added this Charge tag'});
      }
    });
    setTags_set(new Set(tags_set).add(val));
  }

  

  function delete_tags(val) {
    const filter = [];
    tags_set.forEach((el) => {
      if (el != val){
        filter.push(el);
      }
    })
    setTags_set(new Set(filter));
  }

  const items = [{Name: 'A Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021',Amount: '$745.65'},
  {Name: 'AY Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021',Amount: '$745.65'},
  {Name: 'AYY Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021',Amount: '$745.65'},
  {Name: 'B Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021', Amount: '$745.65'},
  {Name: 'C Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021', Amount: '$745.65'},
  {Name: 'D Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021', Amount: '$745.65'},
  {Name: 'E Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021', Amount: '$745.65'},
  {Name: 'F Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021', Amount: '$745.65'},
  {Name: 'G Loan Product Name', Type: 'Cash', CollectedOn: 'March 25, 2021', Amount: '$745.65'}];

  const [users, setUsers] = React.useState([]);

  React.useEffect(() =>{
    setUsers(items)
  }, [])

  
return (
      <div 
        id="FDP_Charges"
        className="pl-5"
      >

        <div 
          className="create_charges"
        >
          <h5 
            className="py-4"
          >
            Create Fixed Deposit Products
          </h5>

        
        
          <motion.div
            className="bg-white mx-auto pb-4 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{borderRadius: '15px'}}
          >
            <div className="FDP-Charges-checkbox-container">
              <Checkboxes />
            </div>

            <hr/>

            <form>
              <div className="container">
                <div className="my-4">
                  <h5>Charges</h5>
                </div>

                <div className="FDP-Charges-input-section my-4 py-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <select 
                        onChange={chargesHandler}
                        className="custom-select px-3"
                      >
                        <option selected disabled>Select Charges</option>
                        {charge_types.map((each) => (
                          <option 
                            value={each}>{each}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div 
                    className="mt-5 mb-4 px-3">
                    <h6>Added Charges</h6>
                  </div>

                  <div className="FDP-Charges-tags-div d-flex mx-3 pb-2 overflow-auto">
                    {[...tags_set].map((entry) => (
                      <div
                        className="FDP-Charges-tag pt-2 px-2 d-flex mr-3 align-items-center"
                      >
                        <p className="mt-2 px-2"
                          style={{
                            whiteSpace: 'nowrap',
                          }}>
                          {entry}
                        </p>
                        <div
                          className="ml-auto border-0"
                        >
                        <FontAwesomeIcon 
                          onClick={() => {delete_tags(entry)}}
                          className="mr-2"
                          icon={faTimesCircle}
                          style={{color: '#FD5E1A', fontSize: '22px', cursor: 'pointer'}} 
                          />
                        </div>
                      </div>
                    ))}

                  </div>

                </div>

                <hr/>

                <div 
                  className="my-4"
                >
                  <Table 
                    id="myTable"
                    borderless
                    className="w-100 mx-auto table-sm table-hover table-responsive-sm"
                    style={{background: '#FFFFFF'}}
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
                          className="py-3 font-weight-normal text-right" 
                          style={{paddingRight: '5%'}}
                        >
                          Type
                          <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                        </th>
                        <th 
                          className="py-3 font-weight-normal text-center" 
                        >
                          Amount
                          <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
                        </th>
                        <th 
                          className="py-3 font-weight-normal" 
                        >
                          Collected On                  </th>
                        <th 
                          className="py-3 font-weight-normal text-right" 
                          style={{paddingRight: '6%'}}
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
                          style={{paddingTop: '2%'}}
                        >
                          {user.Name}
                        </td>
                        <td 
                          className="py-3 text-right" 
                          style={{paddingTop: '2%', paddingRight: '7%'}}
                        >
                          {user.Type}
                        </td>
                        <td 
                          className="py-3 text-right" 
                          style={{paddingTop: '2%', paddingRight: '7%'}}
                        >
                          {user.Amount}
                        </td>
                        <td 
                          className="py-3 text-center" 
                          style={{paddingTop: '2%', marginLeft: '80px'}}
                        >
                          <div 
                            className="pt-1 pb-1 mx-auto" 
                            style={{paddingTop: '2%', paddingRight: '10%'}}
                          >
                            {user.CollectedOn}                   
                          </div>
                        </td>
                        <td 
                          className="py-3 text-right" 
                          style={{paddingTop: '2%', color: '#518EF8', paddingRight: '6%'}}
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

              <hr/>

              <div className="container">
                <div 
                  className="FDP-Charges-btn-section my-5 w-100"
                >
                  <Button 
                    onClick={goto_IRC}
                    className="py-2 btn-prev border-0 rounded font-weight-medium"
                  >
                    <FontAwesomeIcon className="mr-3" icon={faArrowLeft} />
                    Previous
                  </Button>
                  <Button 
                    onClick={goto_accounting}
                    className="py-2 btn-next border-0 rounded font-weight-semibold"
                  >
                    Next
                    <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                  </Button>
                </div>

              
              </div>
            </form>
          </motion.div>
        </div>
      </div>
);
}

export default FDP_Charges;