import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './externalServices.scss';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import OS from './ESImages/orangeSMS.png';
import GE from './ESImages/greenEnvelope.png';
import RC from './ESImages/redCubes.png';
import BN from './ESImages/blueNotify.png';

const Service = ({Address, Name, Detail, Icon, Background}) => {
  let history = useHistory();

  return(
    <div 
      className="bg-white py-3"
      style={{width: '350px', borderRadius: '15px', cursor: 'pointer'}}
      onClick={() => {history.push(Address)}}
    >
      <div className="col">
        <div className="row">
          <div 
            className="col-3 pt-2"
          >
            <div 
              className="product-icon mx-auto d-flex justify-content-center"
              style={{background: `${Background}`}}>
              <img 
                className="h-100 w-100"
                src={Icon}
              />
            </div>
          </div>
          <div className="col-9 py-1">
            <h6>
              {Name}
            </h6>
            <p style={{fontSize: '14px'}}>
              {Detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const externalServices = () => {
  return(
    <div 
        id="externalServices"
        className="pl-5"
    >
      <h5 className="py-3">
          External Services
      </h5>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >

        <div className="d-flex flex-wrap justify-content-between">
          <div 
            className="pr-4 pb-4"
          >
            <Service 
              Address='/amazonServices_table'
              Name="Amazon Services" 
              Detail="S3 Amazon service Configuration" 
              Icon={RC} 
              Background="rgba(218, 71, 62, 0.1)"/>
          </div>
          <div 
            className="pr-4 pb-4"
          >
            <Service
              Address='/EmailServices_table'
              Name="Email Services" 
              Detail="Email service Configuration" 
              Icon={GE} 
              Background="rgba(10, 157, 122, 0.1)"/>
          </div>
          <div 
            className="pr-4 pb-4"
          >
            <Service 
              Address='/SMSservices_table'
              Name="SMS Services" 
              Detail="SMS Service configuration" 
              Icon={OS} 
              Background="rgba(253, 94, 26, 0.1)"/>
          </div>
          <div 
            className="pr-4 pb-4"
          >
            <Service
              Address="/notificationServices_table"
              Name="Notifications" 
              Detail="Notification Configuration" 
              Icon={BN} 
              Background="rgba(0, 180, 216, 0.1)"/>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

export default externalServices;