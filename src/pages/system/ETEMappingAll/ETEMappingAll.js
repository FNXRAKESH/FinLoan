import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ETEMappingAll.scss';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ETEMappingAll = () => {
  
  return (
    <div 
        id="ETEMappingAll"
        className="pl-5"
      >

        <div className="d-flex">
          
          <div>
            <h5 className="py-3">
              Entity to Entity Mapping
            </h5>
          </div>
          
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="ete_object bg-white py-4 px-3">
              <div className="d-flex">
                <h6>Offices</h6>
                <FontAwesomeIcon icon={faArrowRight} className="ete_icon mx-3"/>
                <h6>Loan Products</h6>
                <FontAwesomeIcon icon={faChevronRight} className="ete_icon ml-auto mr-3"/>
              </div>
              <p style={{fontSize: '14px'}}>Office access to Loan products</p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="ete_object bg-white py-4 px-3">
              <div className="d-flex">
                <h6>Offices</h6>
                <FontAwesomeIcon icon={faArrowRight} className="ete_icon mx-3"/>
                <h6>Saving Products</h6>
                <FontAwesomeIcon icon={faChevronRight} className="ete_icon ml-auto mr-3"/>
              </div>
              <p style={{fontSize: '14px'}}>Office access to savings products</p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
            <div className="ete_object bg-white py-4 px-3">
              <div className="d-flex">
                <h6>Offices</h6>
                <FontAwesomeIcon icon={faArrowRight} className="ete_icon mx-3"/>
                <h6>Charges / Fees</h6>
                <FontAwesomeIcon icon={faChevronRight} className="ete_icon ml-auto mr-3"/>
              </div>
              <p style={{fontSize: '14px'}}>Office access to charges</p>
            </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
            <div className="ete_object bg-white py-4 px-3">
              <div className="d-flex">
                <h6>Roles</h6>
                <FontAwesomeIcon icon={faArrowRight} className="ete_icon mx-3"/>
                <h6>Loan Products</h6>
                <FontAwesomeIcon icon={faChevronRight} className="ete_icon ml-auto mr-3"/>
              </div>
              <p style={{fontSize: '14px'}}>Office access to Loan products</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
            <div className="ete_object bg-white py-4 px-3">
              <div className="d-flex">
                <h6>Roles</h6>
                <FontAwesomeIcon icon={faArrowRight} className="ete_icon mx-3"/>
                <h6>Saving Products</h6>
                <FontAwesomeIcon icon={faChevronRight} className="ete_icon ml-auto mr-3"/>
              </div>
              <p style={{fontSize: '14px'}}>Office access to savings products</p>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ETEMappingAll;