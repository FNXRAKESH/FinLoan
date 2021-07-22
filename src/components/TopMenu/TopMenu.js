import React, { useState } from 'react';
import './TopMenu.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faBell, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import  profile  from '../../images/profile.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const TopMenu = () => {
  const[submenu, setSubmenu] = useState(false)
  return (
    <div>
      <div className="topMenu pr-3 pl-5">
        <ul>
          <Link to="/clients">
            <li
              onClick={() => {
                setSubmenu(false);
              }}
            >
              Clients &nbsp;
            </li>
          </Link>
          <Link to="/accounting">
            <li
              onClick={() => {
                setSubmenu(false);
              }}
            >
              Accounting
            </li>
          </Link>
          <Link to="/allReports">
            <li
              onClick={() => {
                setSubmenu(false);
              }}
            >
              Reports &nbsp;
            </li>
          </Link>
          <li
            onClick={() => {
              setSubmenu(!submenu);
            }}
          >
            Admin &nbsp;
            <FontAwesomeIcon icon={faChevronDown} size="xs" />
            {submenu ? (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 8, stiffness: 100 }}
                className="subMenu"
              >
                <ul>
                  <Link to="/users">
                    <li>Users</li>
                  </Link>
                  <Link to="/organization">
                    <li>Organizations</li>
                  </Link>
                  <Link to="/system">
                    <li>System</li>
                  </Link>
                  <Link to="/products">
                    <li>Products</li>
                  </Link>
                  <li>Templates</li>
                </ul>
              </motion.div>
            ) : null}
          </li>
        </ul>
        <div className="icons">
          <Link to="/advanceSearch">
            <div className="icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </Link>
          <div className="icon">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div id="profile" className="d-flex align-items-center">
            <img src={profile} alt="profile" />
            <h6>Kevin McKinney</h6>
            <div className="chevron">
              <FontAwesomeIcon icon={faChevronDown} size="sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
