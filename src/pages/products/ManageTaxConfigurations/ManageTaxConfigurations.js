import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ManageTaxConfigurations.scss';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import GS from './greenSetting.png';
import RMB from './redMoneyBag.png';

const ManageTaxConfiguration = ({Address, Name, Detail, Icon, Background}) => {
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
              className="MTC-icon mx-auto d-flex justify-content-center"
              style={{background: `${Background}`}}>
              <img 
                className="h-100 w-100"
                src={Icon}
              />
            </div>
          </div>
          <div className="col-9 pt-2">
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

const ManageTaxConfigurations = () => {
  return(
    <div 
        id="Products"
        className="pl-5"
    >

      <h5 className="py-3">
        Manage Tax Configurations
      </h5>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >

        <div className="d-flex flex-wrap">
          <div 
            className="pr-4 pb-4"
          >
            <ManageTaxConfiguration 
              Address="/manage-tax-components"
              Name="Manage Tax Components" 
              Detail="Define Tax Components" 
              Icon={RMB} 
              Background="rgba(218, 71, 62, 0.1)"/>
          </div>
          <div 
            className="pr-4 pb-4"
          >
            <ManageTaxConfiguration
              Name="Manage Tax Groups" 
              Detail="Define Tax Groups" 
              Icon={GS} 
              Background="rgba(10, 157, 122, 0.1)"/>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

export default ManageTaxConfigurations;