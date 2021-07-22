import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './LP-Preview.scss';
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight, faEdit } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const LP_Preview = () => {

  let history = useHistory();
  
  return (
      <div 
        id="LP-Preview"
        className="pl-5"
      >
        
        <div 
          className="LP-Preview"
        >
          <div className="col">
          <div className="row py-3">
            <div className="col-md-6">
              <h5 
                className="mt-3"
              >
                Preview Loan Products
              </h5>
            </div>
            <div className="col-md-6 py-1 d-flex justify-content-end">
              <motion.button
                className="preview-lp mt-2 py-2 px-3"
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
            className="CLP-rounded bg-white mx-auto pt-1 pb-4 mb-4"
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
                    <h6>Include in Customer Loan Counter</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

              </div>

              <hr/>

              <div className="col">
                <div className="row mt-5 mb-3">
                  <h5>Currency</h5>
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
                    <h6>Installment in multiples of</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

              </div>

              <hr/>

              <div className="col">
                <div className="row mt-5 mb-3">
                  <h5>Terms</h5>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Terms vary based on loan cycle</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Principal</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Number of Repayments</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Repay Every</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Nominal Interest Rate</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Minimum days between disbursal and first repayment date</h6>
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
                    <h6>Amortization</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Interest Method</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Is Equal Amortization</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Interest Calculation Period</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Allow Partial Interest Claculation with same as repayment</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Arrers Tolerance</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Repayment Strategy</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Grace</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Interest Free Period</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Grace on Arrears Ageing</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>overdue Days for NPA</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Account moves out of NPA only after all arrears have been cleared?</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Days in year</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Days in month</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Principal Thresold (%) for Last Installment</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Allow fixing of the installment amount</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Is allowed to be used for providing Topup Loans?</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <hr/>
                
              </div>

              <div className="col">

                <div className="row mt-5 mb-3">
                  <h5>Interest Recalculation</h5>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Recalculate Interest</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>
              </div>

              <hr/>

              <div className="col">

                <div className="row mt-5 mb-3">
                  <h5>Guarantee Requirements</h5>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Place Guarantee Funds On-Hold?</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>
              </div>

              <hr/>

              <div className="col">

                <div className="row mt-5 mb-3">
                  <h5>Loan Tranche Details</h5>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Enable Multiple Disbursals</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>
              </div>

              <hr/>

              <div className="col">
                <div className="row mt-5 mb-3">
                  <h5>Configurable Terms ans Settings</h5>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Allow overriding select terms and settings in loan accounts</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Amortization</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Interest method</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Repayment strategy</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Interest calculation period</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Arrears tolerance</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Repaid every</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Moratorium</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Number of days a loan may be overdue before moving into arrears</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>
                
              </div>

              <hr/>

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
                  <h5>Overdue Charges</h5>
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
                    <h6>Fund Sources</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Loan Portfolio</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Receivable Fees</h6>
                  </div>
                  <div className="col text-break py-3 text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Receivable Penalties</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Transfers in suspense</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>
              
                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Income from Interest</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>
              
                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Income from Fees</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Income from Penalties</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Income from Recovery Repayments</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="whitediv row">
                  <div className="col text-break py-3">
                    <h6>Losses Written Off</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

                <div className="greydiv row">
                  <div className="col text-break py-3">
                    <h6>Over payments</h6>
                  </div>
                  <div className="col py-3 text-break text-right">
                    <h6>False</h6>
                  </div>
                </div>

              </div>

              <hr/>

              <div className="col">
                <div className="row mt-5 mb-3">
                  <h5>Advanced Accounting Rule</h5>
                </div>

                <div className="row mb-3">
                  <h6>Fund Sources for Payment</h6>
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
                            Payment Type
                          </th>
                          <th className="py-3 font-weight-medium text-right" >
                            Fund Source
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="py-3">
                            Payment Type
                          </td>
                          <td className="py-3 text-right" >
                            Fund Source
                          </td>
                        </tr>

                        <tr>
                          <td className="py-3">
                            Payment Type
                          </td>
                          <td className="py-3 text-right" >
                            Fund Source
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                </div>

                <hr/>

                <div className="row mt-4 mb-3">
                  <h6>Fees to Specific Income Account</h6>
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
                            Fees
                          </th>
                          <th className="py-3 font-weight-medium text-right" >
                            Income Account
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="py-3">
                            Fees
                          </td>
                          <td className="py-3 text-right" >
                            Income Account
                          </td>
                        </tr>

                        <tr>
                          <td className="py-3">
                            Fees
                          </td>
                          <td className="py-3 text-right" >
                            Income Account
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                </div>

                <hr/>

                <div className="row mt-4 mb-3">
                  <h6>Penalties to Specific Income Account</h6>
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
                            Penalty
                          </th>
                          <th className="py-3 font-weight-medium text-right" >
                            Income Account
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="py-3">
                            Penalty
                          </td>
                          <td className="py-3 text-right" >
                            Income Account
                          </td>
                        </tr>

                        <tr>
                          <td className="py-3">
                            Penalty
                          </td>
                          <td className="py-3 text-right" >
                            Income Account
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                </div>
              </div>
            </div> 

            <hr/>

            <div className="container"
            >
              <div 
                className="LP-Preview-btns my-5 w-100"
              >
                <Button
                  className="py-2 LP-Preview-btn-edit font-weight-medium text-break" 
                >
                  <FontAwesomeIcon className="mr-3" icon={faEdit} />
                  Edit
                </Button>
                <Button 
                  className="py-2 LP-Preview-btn-confirm rounded border-0 font-weight-semibold text-break"
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

export default LP_Preview;
