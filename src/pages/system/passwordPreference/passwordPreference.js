import React from 'react';
import './passwordPreference.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import CC from './checkcircle.png';
const passwordPreference = () => {
  const [active, setActive] = React.useState(false);
  const [active1, setActive1] = React.useState(false);

  const handleClick = () => {
    setActive(!active);
  }

  const handleClick1 = () => {
    setActive1(!active1);
  }

  return (
    <div id="advanceSearch" className="pl-5">
      <h5 className="py-3">Password Preference</h5>

      <div>
        <div className="row">
          <div 
            className={`col ${active ? 'cmp-active': 'cmp-inactive'} d-flex pt-4 pb-2 px-4 cursor-pointer`}
            style={{borderRadius: '15px'}}
            onClick={handleClick}
          >
            <div className="mr-4">
              <div className={`${active ? 'lock-div-active' : 'lock-div-inactive'} py-3 px-4`}>
                {active ? <FontAwesomeIcon icon={faUnlock} style={{fontSize: '20px'}}/> : <FontAwesomeIcon icon={faLock} style={{fontSize: '20px'}}/>}
              </div>
            </div>
            <div className="mr-4">
              <h5>Simple & Secure</h5>
              <p>Password must be at least 1 character and not more than 50 characters long</p>
            </div>
            <div className="ml-auto mt-2">
              {active ? <FontAwesomeIcon icon={faCheckCircle} style={{color: 'white', fontSize: '28px'}}/> : <img className="passwordCheckImg" src={CC}/>}
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div 
            className={`col ${active1 ? 'cmp-active': 'cmp-inactive'} d-flex pt-4 pb-2 px-4 cursor-pointer`}
            style={{borderRadius: '15px'}}
            onClick={handleClick1}
          >
            <div className="mr-4">
              <div className={`${active1 ? 'lock-div-active' : 'lock-div-inactive'} py-3 px-4`}>
                {active1 ? <FontAwesomeIcon icon={faUnlock} style={{fontSize: '20px'}}/> : <FontAwesomeIcon icon={faLock} style={{fontSize: '20px'}}/>}
              </div>
            </div>
            <div className="mr-4">
              <h5>Complex & Secure</h5>
              <p>Password must be at least 6 characters, no more than 50 characters long, must include at least one upper case letter, one lower case letter, one numeric digit and no space</p>
            </div>
            <div className="ml-auto mt-2">
              {active1 ? <FontAwesomeIcon icon={faCheckCircle} style={{color: 'white', fontSize: '28px'}}/> : <img className="passwordCheckImg" src={CC}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default passwordPreference;