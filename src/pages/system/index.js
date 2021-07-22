import React from 'react';
import { useHistory } from 'react-router-dom';
import Grid from './icons/grid.svg';
import Audit from './icons/file.svg';
import Code from './icons/code.svg';
import Reports from './icons/file-2.svg';
import Permissions from './icons/lock.svg';
import Calendar from './icons/calendar.svg';
import Config from './icons/config.svg';
import Settings from './icons/settings.svg';
import Hook from './icons/hook.svg';
import Account from './icons/hash.svg';
import Entity from './icons/people.svg';
import Service from './icons/settings-2.svg';
import Surveys from './icons/file-3.svg';
import TwoFA from './icons/settings-2.svg';
 

export default function System() {
  const history = useHistory();

  return (
    <div id="system" className="pl-5 mb-5">
      <h5 className="py-3">System</h5>
      <div className="row w-100">
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img grid mr-4">
              <img src={Grid} alt="" />
            </div>
            <div>
              <h6>Manage Data Tables</h6>
              <p className="mb-0">
                Add new extra fields to any entity in the form of data table
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img audit mr-4">
              <img src={Audit} alt="" />
            </div>
            <div>
              <h6>Audit Trails</h6>
              <p className="mb-0">
                Audit logs of all the activities, such as create client,
                disburse loans etc
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-lg-4 my-3"
          onClick={() => history.push('/managecodes')}
        >
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img code mr-4">
              <img src={Code} alt="" />
            </div>
            <div>
              <h6>Manage Codes</h6>
              <p className="mb-0">Codes are used to define drop down values</p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-lg-4 my-3"
          onClick={() => history.push('/managereports')}
        >
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img grid mr-4">
              <img src={Reports} alt="" />
            </div>
            <div>
              <h6>Manage Reports</h6>
              <p className="mb-0">Add new report and classify reports</p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-lg-4 my-3"
          onClick={() => history.push('/manageroles')}
        >
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img audit mr-4">
              <img src={Permissions} alt="" />
            </div>
            <div>
              <h6>Manage Roled and Permissions</h6>
              <p className="mb-0">
                Define or modify roles and associated permissions
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-lg-4 my-3"
          onClick={() => history.push('/managejobs')}
        >
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img code mr-4">
              <img src={Calendar} alt="" />
            </div>
            <div>
              <h6>Scheduler Jobs</h6>
              <p className="mb-0">Schedule a job, modify or delete jobs</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img settings mr-4">
              <img src={Settings} alt="" />
            </div>
            <div>
              <h6>Configure Maker Checker Tasks</h6>
              <p className="mb-0">Define or modify maker checker tasks</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img config mr-4">
              <img src={Config} alt="" />
            </div>
            <div>
              <h6>Configurations</h6>
              <p className="mb-0">Global configurations and Cache settings</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img hook mr-4">
              <img src={Hook} alt="" />
            </div>
            <div>
              <h6>Manage Hooks</h6>
              <p className="mb-0">Define hooks</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img account mr-4">
              <img src={Account} alt="" />
            </div>
            <div>
              <h6>Account Number Preferences</h6>
              <p className="mb-0">
                Preferences for generating account numbers for client, loan and
                savings accounts
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img entity mr-4">
              <img src={Entity} alt="" />
            </div>
            <div>
              <h6>Entity to Entity Mapping</h6>
              <p className="mb-0">Define or modify entity to entity mappings</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img service mr-4">
              <img src={Service} alt="" />
            </div>
            <div>
              <h6>External Services</h6>
              <p className="mb-0">External Services Configuration</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img survey mr-4">
              <img src={Surveys} alt="" />
            </div>
            <div>
              <h6>Manage Surveys</h6>
              <p className="mb-0">Manage your surveys</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 my-3">
          <div className="white-card d-flex align-items-center justify-content-start cursor-pointer">
            <div className="icon-img TwoFA mr-4">
              <img src={TwoFA} alt="" />
            </div>
            <div>
              <h6>2-Factor Configuration</h6>
              <p className="mb-0">
                Two-factor authentication configuration settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
