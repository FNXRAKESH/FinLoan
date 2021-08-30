import React, { useState } from 'react';
import './bulkImport.scss';
import { motion } from 'framer-motion';
import bulkImp from '../../../images/organization/bulkImport.png';

const bulkImport = (props) => {
  return (
    <div id="bulkImport" className="pl-5">
      <h5 className="py-3">Bulk Import</h5>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="d-flex flex-wrap justify-content-between"
      >
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importcenters')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Center</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Centers
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importchartofaccounts')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Chart of Accounts</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Chart of Accounts
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importclients')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Client</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Clients
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importemployee')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Employee</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Employees
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importfixeddepositaccounts')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Fixed Deposit Accounts</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Fixed Deposit Accounts
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importfixeddeposittransactionsrepayments')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Fixed Deposit Transaction Repayment</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Fixed Deposit Transactions Repayments
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importgroups')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Groups</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Groups
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importguarantors')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Guarantors</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Guarantors
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importjournalentries')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Journal Entries</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Journal Entries
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importloanaccounts')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Loan Accounts</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Loan Accounts
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importloanrepayments')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Loan Repayments</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Loan Repayments
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importoffices')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Office</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Offices
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importrecurringdepositaccounts')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Recurring Deposit Account</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Recurring Deposit Accounts
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importrecurringdeposittransactions')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Recurring Deposit Transactions</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Recurring Deposit Transactions
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importsavingsaccounts')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Saving Accounts</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Saving Accounts
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importsavingstransactionsrepayments')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Saving Transaction Repayment</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Saving Transaction Repayments
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importshareaccounts')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import Share Account</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Share Accounts
            </p>
          </div>
        </div>
        <div
          className="bulkImport d-flex align-items-center"
          onClick={() => props.history.push('/importusers')}
        >
          <div className="icons">
            <img src={bulkImp} alt="bulk import" />
          </div>
          <div className="content">
            <h6>Import User</h6>
            <p>
              Bulk data import using excel spreadsheet templates for Users
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default bulkImport;

