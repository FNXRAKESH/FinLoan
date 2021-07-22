import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,  faChevronRight} from '@fortawesome/free-solid-svg-icons';
import MenuGroup from './MenuGroup';


const Menu = (props) => {
  
   
    return (
      <>
        <div id="logo" className="d-flex align-items-center p-4">
          <h5 style={{ flex: 1, marginBottom: 0 }}>FinLoan.</h5>
          <FontAwesomeIcon icon={faBars} size="xs" />
        </div>
        <hr />
        <MenuGroup />
      </>
    );
}
 
export default Menu;