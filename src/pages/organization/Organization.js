import React, { useState } from 'react';
import './Organization.styles.scss';
import { motion } from 'framer-motion';
import offices from '../../images/organization/offices.png';
import holidays from '../../images/organization/holidays.png';
import employees from '../../images/organization/employees.png';
import history from '../../images/organization/history.png';
import fundMapping from '../../images/organization/fundMapping.png';
import password from '../../images/organization/password.png';
import loan from '../../images/organization/loan.png';
import entity from '../../images/organization/entity.png';
import configuration from '../../images/organization/configuration.png';
import manageFunds from '../../images/organization/manageFunds.png';
import reassignment from '../../images/organization/reassignment.png';
import workingDays from '../../images/organization/workingDays.png';
import paymentType from '../../images/organization/paymentType.png';
import teller from '../../images/organization/teller.png';
import sms from '../../images/organization/sms.png';
import adHoc from '../../images/organization/adHoc.png';
import bulkImport from '../../images/organization/bulkImport.png';
const Organization = (props) => {
  return (
    <div id="organization" className="pl-5">
      <h5 className="py-3">Organization</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div
          className="organization d-flex align-items-center"
          onClick={() => props.history.push('/manageOffice')}
        >
          <div className="icons">
            <img src={offices} alt="Manage Offices" />
          </div>
          <div className="content">
            <h6>Manage Offices</h6>
            <p>
              Add new office or modify or deactivate office or modify office
              hierarchy
            </p>
          </div>
        </div>
        <div className="organization d-flex align-items-center">
          <div className="icons">
            <img src={holidays} alt="Manage Holidays" />
          </div>
          <div className="content">
            <h6>Manage Holidays</h6>
            <p>Define Holidays for Office</p>
          </div>
        </div>
        <div
          className="organization d-flex align-items-center"
          onClick={() => props.history.push('/manageEmployees')}
        >
          <div className="icons">
            <img src={employees} alt="Manage Employees" />
          </div>
          <div className="content">
            <h6>Manage Employees</h6>
            <p>
              An employee represents loan officers with no access to systems
            </p>
          </div>
        </div>
        <div className="organization d-flex align-items-center">
          <div className="icons">
            <img src={history} alt="Standing Instructions History" />
          </div>
          <div className="content">
            <h6>Standing Instructions History</h6>
            <p>View logged history of standing instructions</p>
          </div>
        </div>
        <div className="organization d-flex align-items-center">
          <div className="icons">
            <img src={fundMapping} alt="Fund Mapping" />
          </div>
          <div className="content">
            <h6>Fund Mapping</h6>
            <p>Bulk entry screen for mapping fund sources to loans</p>
          </div>
        </div>
        <div 
          className="organization d-flex align-items-center"
          onClick={() => props.history.push('/passwordpreference')}
        >
          <div className="icons">
            <img src={password} alt="Password Preferences" />
          </div>
          <div className="content">
            <h6>Password Preferences</h6>
            <p>
              Define standards for enforcing the usage of stronger passwords
            </p>
          </div>
        </div>
        <div className="organization d-flex align-items-center">
          <div className="icons">
            <img src={loan} alt="Loan Provisioning Criteria" />
          </div>
          <div className="content">
            <h6>Loan Provisioning Criteria</h6>
            <p>Define Loan Provisioning Criteria for Organization</p>
          </div>
        </div>
        <div className="organization d-flex align-items-center">
          <div className="icons">
            <img src={entity} alt="Entity Data Table Checks" />
          </div>
          <div className="content">
            <h6>Entity Data Table Checks</h6>
            <p>Define Entiity Data Table Checks for Organization</p>
          </div>
        </div>
        <div
          className="organization d-flex align-items-center"
          onClick={() => props.history.push('/currency')}
        >
          <div className="icons">
            <img src={configuration} alt="Currency Configuration" />
          </div>
          <div className="content">
            <h6>Currency Configuration</h6>
            <p>
              Currencies available across organization for different products
            </p>
          </div>
        </div>
        <div className="organization d-flex align-items-center">
          <div className="icons">
            <img src={manageFunds} alt="Manage Funds" />
          </div>
          <div className="content">
            <h6>Manage Funds</h6>
            <p>Funds are associated with loans</p>
          </div>
        </div>
        <div className="organization d-flex align-items-center">
          <div className="icons">
            <img src={reassignment} alt="Bulk Loan Reassignment" />
          </div>
          <div className="content">
            <h6>Bulk Loan Reassignment</h6>
            <p>Easy way to reassign all the loan from one LO to another LO</p>
          </div>
        </div>
        <div className="organization d-flex align-items-center">
          <div className="icons">
            <img src={teller} alt="Teller / Cashier Management" />
          </div>
          <div className="content">
            <h6>Teller / Cashier Management</h6>
            <p>Manage Tellers / Cashier and Cash Allocation and Settlement</p>
          </div>
        </div>
        <div 
          className="organization d-flex align-items-center"
          onClick={() => props.history.push('/workingdays')}
        >
          <div className="icons">
            <img src={workingDays} alt="Working Days" />
          </div>
          <div className="content">
            <h6>Working Days</h6>
            <p>
              Define working days and configure behavior of payments due on
              holidays
            </p>
          </div>
        </div>
        <div className="organization d-flex align-items-center">
          <div className="icons">
            <img src={paymentType} alt="Payment Type" />
          </div>
          <div className="content">
            <h6>Payment Type</h6>
            <p>Manage Payment Types</p>
          </div>
        </div>
        <div className="organization d-flex align-items-center">
          <div className="icons">
            <img src={sms} alt="SMS Campaigns" />
          </div>
          <div className="content">
            <h6>SMS Campaigns</h6>
            <p>Define SMS Campaigns for Organization</p>
          </div>
        </div>
        <div className="organization d-flex align-items-center">
          <div className="icons">
            <img src={adHoc} alt="AdHocQuery" />
          </div>
          <div className="content">
            <h6>AdHocQuery</h6>
            <p>Define AdHocQuery for Organization</p>
          </div>
        </div>
        <div 
          className="organization d-flex align-items-center"
          onClick={() => props.history.push('/bulkimport')}
        >
          <div className="icons">
            <img src={bulkImport} alt="Bulk Import" />
          </div>
          <div className="content">
            <h6>Bulk Import</h6>
            <p>
              Bulk data import using excel spreadsheet templates for clients,
              office, etc
            </p>
          </div>
        </div>
        <div className="organization bg-transparent d-md-block d-none"></div>
      </motion.div>
    </div>
  );
};

export default Organization;
