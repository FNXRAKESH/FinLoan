import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {motion } from 'framer-motion';
import './Dashboard.styles.scss'

const Dashboard = () => {
    return (
      <div id="dashboard" className="pl-5">
        <h5 className="py-3">Dashboard</h5>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          id="dashboardContent"
          className="d-flex"
        >
          <div className="flex-grow-1">
            <div id="activityList" className="d-flex justify-content-between">
              <div className="pr-3 w-50">
                <div className="activities ">
                  <h6>Recent Activities</h6>
                  <hr />
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Help</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Centers</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Create Center</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Create Group</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Create Client</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Clients</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Charts of Accounts</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Account Closure</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="w-50">
                <div className="activities ">
                  <h6>Frequent Activities</h6>
                  <hr />
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.25 }}
                  >
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Dashboard</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Help</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Collection Sheet</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Journal Entries</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Account Closure</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Create Client</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Create Center</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                    <div className="d-flex align-items-center py-1">
                      <p className="flex-grow-1 m-0">Navigation</p>
                      <FontAwesomeIcon icon={faChevronRight} size="xs" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div className="activities ">
                <h6>Client Trends for Head Office (Days)</h6>
                <hr />
              </div>
            </div>
          </div>
          <div id="rightPanel" className="flex-grow-1 ">
            <div id="amountDisbursed" className="px-3">
              <div className="activities">
                <h6>Amount Disbursed for Today</h6>
                <hr />
              </div>
            </div>
            <div id="amountCollected" className="p-3">
              <div className="activities">
                <h6>Amount Collected for Today</h6>
                <hr />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
}
 
export default Dashboard;