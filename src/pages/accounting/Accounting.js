import React, { useState } from 'react';
import './Accounting.styles.scss';
import { motion } from 'framer-motion';
import accurals from '../../images/accounting/accurals.svg';
import chart from '../../images/accounting/chart.svg';
import entries from '../../images/accounting/entries.svg';
import journal from '../../images/accounting/journal.svg';
import link from '../../images/accounting/link.svg';
import migrate from '../../images/accounting/migrate.svg';
import posting from '../../images/accounting/posting.svg';
import provisioning from '../../images/accounting/provisioning.svg';
import rules from '../../images/accounting/rules.svg';
import search from '../../images/accounting/search.svg';
const Accounting = () => {
  const [accounting, setAccounting] = useState('');
  return (
    
      <div id='accounting' className="pl-5">
        <h5 className="py-3">Accounting</h5>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="d-flex flex-wrap justify-content-between"
        >
          <div
            className="accounting d-flex align-items-center"
            onClick={() => {
              setAccounting('Frequent Posting');
            }}
            style={
              accounting === 'Frequent Posting'
                ? { backgroundColor: '#0A213E' }
                : { backgroundColor: '#fff' }
            }
          >
            <div
              className="icons"
              style={
                accounting === 'Frequent Posting'
                  ? { backgroundColor: '#112c51' }
                  : { backgroundColor: '#bad0f7' }
              }
            >
              <img src={posting} alt="frequent posting" />
            </div>
            <div
              className="content"
              style={
                accounting === 'Frequent Posting'
                  ? { color: '#fff' }
                  : { color: '#000' }
              }
            >
              <h6>Frequent Posting</h6>
              <p>These are predefined postings</p>
            </div>
          </div>
          <div
            className="accounting d-flex align-items-center"
            onClick={() => {
              setAccounting('Chart of Accounts');
            }}
            style={
              accounting === 'Chart of Accounts'
                ? { backgroundColor: '#0A213E' }
                : { backgroundColor: '#fff' }
            }
          >
            <div
              className="icons"
              style={
                accounting === 'Chart of Accounts'
                  ? { backgroundColor: '#112c51' }
                  : { backgroundColor: '#e7f5f2' }
              }
            >
              <img src={chart} alt="chart of accounts" />
            </div>
            <div
              className="content"
              style={
                accounting === 'Chart of Accounts'
                  ? { color: '#fff' }
                  : { color: '#000' }
              }
            >
              <h6>Chart of Accounts</h6>
              <p>List of accounts used by the Organization</p>
            </div>
          </div>
          <div
            className="accounting d-flex align-items-center"
            onClick={() => {
              setAccounting('Add Journal Entries');
            }}
            style={
              accounting === 'Add Journal Entries'
                ? { backgroundColor: '#0A213E' }
                : { backgroundColor: '#fff' }
            }
          >
            <div
              className="icons"
              style={
                accounting === 'Add Journal Entries'
                  ? { backgroundColor: '#112c51' }
                  : { backgroundColor: '#ffefe8' }
              }
            >
              <img src={journal} alt="Add Journal Entries" />
            </div>
            <div
              className="content"
              style={
                accounting === 'Add Journal Entries'
                  ? { color: '#fff' }
                  : { color: '#000' }
              }
            >
              <h6>Add Journal Entries</h6>
              <p>Manual journal entry transactions records</p>
            </div>
          </div>
          <div
            className="accounting d-flex align-items-center"
            onClick={() => {
              setAccounting('Closing Entries');
            }}
            style={
              accounting === 'Closing Entries'
                ? { backgroundColor: '#0A213E' }
                : { backgroundColor: '#fff' }
            }
          >
            <div
              className="icons"
              style={
                accounting === 'Closing Entries'
                  ? { backgroundColor: '#112c51' }
                  : { backgroundColor: '#e5f7fb' }
              }
            >
              <img src={entries} alt="Closing Entries" />
            </div>
            <div
              className="content"
              style={
                accounting === 'Closing Entries'
                  ? { color: '#fff' }
                  : { color: '#000' }
              }
            >
              <h6>Closing Entries</h6>
              <p>Journal entries made at the end of an accounting</p>
            </div>
          </div>
          <div
            className="accounting d-flex align-items-center"
            onClick={() => {
              setAccounting('Search Journal Entries');
            }}
            style={
              accounting === 'Search Journal Entries'
                ? { backgroundColor: '#0A213E' }
                : { backgroundColor: '#fff' }
            }
          >
            <div
              className="icons"
              style={
                accounting === 'Search Journal Entries'
                  ? { backgroundColor: '#112c51' }
                  : { backgroundColor: '#f1edf4' }
              }
            >
              <img src={search} alt="Search Journal Entries" />
            </div>
            <div
              className="content"
              style={
                accounting === 'Search Journal Entries'
                  ? { color: '#fff' }
                  : { color: '#000' }
              }
            >
              <h6>Search Journal Entries</h6>
              <p>Advance search option for journal entries</p>
            </div>
          </div>
          <div
            className="accounting d-flex align-items-center"
            onClick={() => {
              setAccounting('Accounting Rules');
            }}
            style={
              accounting === 'Accounting Rules'
                ? { backgroundColor: '#0A213E' }
                : { backgroundColor: '#fff' }
            }
          >
            <div
              className="icons"
              style={
                accounting === 'Accounting Rules'
                  ? { backgroundColor: '#112c51' }
                  : { backgroundColor: '#fdf5df' }
              }
            >
              <img src={rules} alt="Accounting Rules" />
            </div>
            <div
              className="content"
              style={
                accounting === 'Accounting Rules'
                  ? { color: '#fff' }
                  : { color: '#000' }
              }
            >
              <h6>Accounting Rules</h6>
              <p>List of all Accounting rules</p>
            </div>
          </div>
          <div
            className="accounting d-flex align-items-center"
            onClick={() => {
              setAccounting('Accounts linked to financial activities');
            }}
            style={
              accounting === 'Accounts linked to financial activities'
                ? { backgroundColor: '#0A213E' }
                : { backgroundColor: '#fff' }
            }
          >
            <div
              className="icons"
              style={
                accounting === 'Accounts linked to financial activities'
                  ? { backgroundColor: '#112c51' }
                  : { backgroundColor: '#fcebf3' }
              }
            >
              <img src={link} alt="Accounts linked to financial activities" />
            </div>
            <div
              className="content"
              style={
                accounting === 'Accounts linked to financial activities'
                  ? { color: '#fff' }
                  : { color: '#000' }
              }
            >
              <h6>Accounts linked to financial activities</h6>
              <p>Financial Activity and GL</p>
            </div>
          </div>
          <div
            className="accounting d-flex align-items-center"
            onClick={() => {
              setAccounting('Accurals');
            }}
            style={
              accounting === 'Accurals'
                ? { backgroundColor: '#0A213E' }
                : { backgroundColor: '#fff' }
            }
          >
            <div
              className="icons"
              style={
                accounting === 'Accurals'
                  ? { backgroundColor: '#112c51' }
                  : { backgroundColor: '#e4f7f6' }
              }
            >
              <img src={accurals} alt="Accurals" />
            </div>
            <div
              className="content"
              style={
                accounting === 'Accurals'
                  ? { color: '#fff' }
                  : { color: '#000' }
              }
            >
              <h6>Accurals</h6>
              <p>Accurals income, expenses and liabilities as on the </p>
            </div>
          </div>
          <div
            className="accounting d-flex align-items-center"
            onClick={() => {
              setAccounting('Migrate Opening Balance');
            }}
            style={
              accounting === 'Migrate Opening Balance'
                ? { backgroundColor: '#0A213E' }
                : { backgroundColor: '#fff' }
            }
          >
            <div
              className="icons"
              style={
                accounting === 'Migrate Opening Balance'
                  ? { backgroundColor: '#112c51' }
                  : { backgroundColor: '#eaf0f8' }
              }
            >
              <img src={migrate} alt="Migrate Opening Balance" />
            </div>
            <div
              className="content"
              style={
                accounting === 'Migrate Opening Balance'
                  ? { color: '#fff' }
                  : { color: '#000' }
              }
            >
              <h6>Migrate Opening Balance</h6>
              <p>Set or update office-level opening balances for GL</p>
            </div>
          </div>
          <div
            className="accounting d-flex align-items-center"
            onClick={() => {
              setAccounting('Provisioning Entries');
            }}
            style={
              accounting === 'Provisioning Entries'
                ? { backgroundColor: '#0A213E' }
                : { backgroundColor: '#fff' }
            }
          >
            <div
              className="icons"
              style={
                accounting === 'Provisioning Entries'
                  ? { backgroundColor: '#112c51' }
                  : { backgroundColor: '#ebf1f0' }
              }
            >
              <img src={provisioning} alt="Provisioning Entries" />
            </div>
            <div
              className="content"
              style={
                accounting === 'Provisioning Entries'
                  ? { color: '#fff' }
                  : { color: '#000' }
              }
            >
              <h6>Provisioning Entries</h6>
              <p>Create Provisioning Entries</p>
            </div>
          </div>
        </motion.div>
       
    </div>
  );
};

export default Accounting;
