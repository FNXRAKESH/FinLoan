import React, { useState } from 'react';
import './MobileMenu.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faBraille,
  faSearch,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import profile from '../../images/profile.png';
import MenuGroup from '../Menu/MenuGroup';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const variants = {
  open: {
    transition: {
      delayChildren: 0.05,
      staggerDirection:-1
    }
  }
}
const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showTopMenu, setShowTopMenu] = useState(false);
    const [submenu, setSubmenu] = useState(false);
  return (
    <>
      <div id="mobileMenu">
        <div id="logo" className="d-flex align-items-center p-4 flex-grow-1">
          <div
            onClick={() => {
              setShowMenu(!showMenu);
              setShowTopMenu(false);
            }}
          >
            <FontAwesomeIcon icon={faBars} size="xs" />
          </div>
          <h5 style={{ flex: 1, marginBottom: 0, paddingLeft: 10 + 'px' }}>
            FinLoan.
          </h5>
        </div>
        <div className="icons">
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div
            id="profile"
            className="d-flex align-items-center"
            onClick={() => {
              setShowTopMenu(!showTopMenu);
              setShowMenu(false);
            }}
          >
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>

      {showMenu ? (
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
          <MenuGroup setShowMenu={setShowMenu} />
        </motion.div>
      ) : null}

      {showTopMenu ? (
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }}>
          <ul id="mobileTopMenu">
            <Link to="/clients" onClick={() => setShowTopMenu(false)}>
              <li>
                Clients &nbsp;
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
              </li>
            </Link>
            <Link to="/accounting" onClick={() => setShowTopMenu(false)}>
              <li>Accounting</li>
            </Link>
            <Link to="/allReports" onClick={() => setShowTopMenu(false)}>
              <li>
                Reports &nbsp;
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
              </li>
            </Link>

            <li
              onClick={() => {
                setSubmenu(!submenu);
              }}
            >
              Admin &nbsp;
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
              {submenu ? (
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', damping: 8, stiffness: 100 }}
                  className="subMenu"
                >
                  <ul>
                    <Link
                      to="/users"
                      onClick={() => {
                        setShowMenu(false);
                        setShowTopMenu(false);
                      }}
                    >
                      <li>Users</li>
                    </Link>
                    <Link
                      to="/organization"
                      onClick={() => {
                        setShowMenu(false);
                        setShowTopMenu(false);
                      }}
                    >
                      <li>Organizations</li>
                    </Link>
                    <li>System</li>
                    <li>Products</li>
                    <li>Templates</li>
                  </ul>
                </motion.div>
              ) : null}
            </li>
          </ul>
        </motion.div>
      ) : null}
    </>
  );
};

export default MobileMenu;
