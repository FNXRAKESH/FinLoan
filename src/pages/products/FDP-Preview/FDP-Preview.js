import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './FDP-Preview.scss';
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight, faEdit } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const FDP_Preview = () => {

  let history = useHistory();

  
  return (
      <div 
        id="FDP-Preview"
        className="pl-5"
      >
        
        <div 
          className="FDP-Preview"
        >
          <div className="col">
          <div className="row py-3">
            <div className="col-md-6">
              <h5 
                className="mt-3"
              >
                Preview Fixed Deposit Products
              </h5>
            </div>
            <div className="col-md-6 py-1 d-flex justify-content-end">
              <motion.button
                className="preview-fdp mt-2 py-2 px-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <FontAwesomeIcon className="mr-3 mt-1" icon={faEdit} style={{fontSize: '20px'}}/>
                Edit
              </motion.button>
            </div>
            </div> 
          </div>
          
        
          <motion.div
            className="CFDP-rounded bg-white mx-auto pt-1 pb-4 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{borderRadius: '15px'}}
          >
          
            <div className="container">
              <div className="col">
                <div className="row mt-5 mb-3">
                  <h5>Details</h5>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Description</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Short Name</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>
              </div>

              <hr/>

              <div className="col">
                <div className="row mt-5 mb-3">
                  <h5>Items</h5>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Currency</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Decimal Places</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Currency in Multiples Of</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Minimum Deposit Amount</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Default Deposit Amount</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Maximum Deposit Amount</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Interest Compounding Period</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Interest Posting Period</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Interest Calculated Using</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Days in Years</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>
              </div>

              <hr/>

              <div className="col">
                <div className="row mt-5 mb-3">
                  <h5>Settings</h5>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Lock-in Period</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Minimum Deposit Term</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Maximum Deposit Term</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Deposit Terms in multiple of</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Recurring Deposit Type</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Is withold tax Applicable</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>
                
              </div>

              <hr/>


              <div className="">
                <div className="mt-5 mb-3">
                  <h5>Interest Rate Chart</h5>
                </div>

                <div 
                  className="" 
                >
                  <div className="">
                    <Table 
                      borderless 
                      className="table-sm rounded table-responsive-sm"
                    >
                      <thead style={{color: 'rgba(10, 33, 62, 0.6)'}}>
                        <tr className="greydiv">
                          <th className="py-3">
                            Date Range
                          </th>
                          <th className="py-3">
                            Period
                          </th>
                          <th className="py-3">
                            Amount Range
                          </th>
                          <th className="py-3">
                            Interest
                          </th>
                          <th className="py-3 text-right">
                            Description
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="greydiv">
                          <td className="py-3">
                            <p>March 25, 2021</p>
                            <p>March 25, 2021</p>
                          </td>
                          <td className="py-3">
                            <p>March 25, 2021</p>
                            <p>March 27, 2021</p>
                          </td>
                          <td className="py-3">
                            <p>$7850.02</p>
                            <p>$7850.02</p>
                          </td>
                          <td className="py-3">
                            7.5%
                          </td>
                          <td className="py-3 text-right">
                            Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed
                          </td>
                        </tr>
                        <tr className="whitediv">
                        <td className="py-3">
                            <p>March 25, 2021</p>
                            <p>March 25, 2021</p>
                          </td>
                          <td className="py-3">
                            <p>March 25, 2021</p>
                            <p>March 27, 2021</p>
                          </td>
                          <td className="py-3">
                            <p>$7850.02</p>
                            <p>$7850.02</p>
                          </td>
                          <td className="py-3">
                            7.5%
                          </td>
                          <td className="py-3 text-right">
                            Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>

                <hr/>

              </div>

              <div className="col">
                <div className="row mt-5 mb-3">
                  <h5>Charges</h5>
                </div>

                <div 
                  className="row"
                  style={{background: '#F3F5F8'}}
                >
                  <div className="col">
                    <Table 
                      borderless 
                      className="table-sm rounded table-responsive-sm"
                      style={{}}
                    >
                      <thead style={{color: 'rgba(10, 33, 62, 0.6)'}}>
                        <tr>
                          <th className="py-3 font-weight-medium">
                            Name
                          </th>
                          <th className="py-3 font-weight-medium text-right">
                            Type
                          </th>
                          <th className="py-3 font-weight-medium text-right">
                            Amount
                          </th>
                          <th className="py-3 font-weight-medium text-right" >
                            Collected On
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="py-3">
                            Some Random Name
                          </td>
                          <td className="py-3 text-right">
                            Cash
                          </td>
                          <td className="py-3 text-right">
                            $7850.02
                          </td>
                          <td className="py-3 text-right" >
                            March 25, 2021
                          </td>
                        </tr>

                        <tr>
                          <td className="py-3">
                            Some Random Name
                          </td>
                          <td className="py-3 text-right">
                            Cash
                          </td>
                          <td className="py-3 text-right">
                            $7850.02
                          </td>
                          <td className="py-3 text-right" >
                            March 25, 2021
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                </div>

                <hr/>
              </div>

              <div className="col">
                <div className="row mt-5 mb-3">
                  <h5>Accounting</h5>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Saving Reference (Assets)</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Overdraft Portfolio (Assets)</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Saving Control (Liabilities)</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Transfer in suspense (Liabilities)</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Interest on Savings (Expense)</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>
              
                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Write-off (Expense)</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>
              
                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Income from Fee (Income)</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Income from Penalties (Income)</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Overdraft Interest Income (Income)</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

              </div>
            </div> 

            <hr/>

            <div className="container"
            >
              <div 
                className="FDP-Preview-btns my-5 w-100"
              >
                <Button
                  className="py-2 FDP-Preview-btn-edit font-weight-medium text-break" 
                >
                  <FontAwesomeIcon className="mr-3" icon={faEdit} />
                  Edit
                </Button>
                <Button 
                  className="py-2 FDP-Preview-btn-confirm rounded border-0 font-weight-semibold text-break"
                >
                  Confirm
                  <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                </Button>
              
              </div>
            </div>  
          </motion.div>
        </div>
      </div>
    
  );
}

export default FDP_Preview;
