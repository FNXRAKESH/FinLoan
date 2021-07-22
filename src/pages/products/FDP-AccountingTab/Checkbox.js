import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './FDP-AccountingTab.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Checkboxes = () => {

  const check_icon = <FontAwesomeIcon className="icon" icon={faCheck} style={{color: 'white'}} />;
  const cross_icon = <FontAwesomeIcon className="icon" icon={faTimes} style={{color: 'white'}} />;

  const[pd_color, setPd_color] = useState('#1AC29A');
  const[pd_icon, setPd_icon] = useState(check_icon);

  const[c_color, setC_color] = useState('#1AC29A');
  const[c_icon, setC_icon] = useState(check_icon);

  const[t_color, setT_color] = useState('#1AC29A');
  const[t_icon, setT_icon] = useState(check_icon);

  const[s_color, setS_color] = useState('#1AC29A');
  const[s_icon, setS_icon] = useState(check_icon);

  const[irc_color, setIrc_color] = useState('#1AC29A');
  const[irc_icon, setIrc_icon] = useState(check_icon);

  const[charges_color, setCharges_color] = useState('#1AC29A');
  const[charges_icon, setCharges_icon] = useState(check_icon);


  useEffect(() => {
    if(localStorage.getItem('FDP-personal-details-error')){
      setPd_color('#FD5E1A');
      setPd_icon(cross_icon);
    }

    if(localStorage.getItem('FDP-currency-error')){
      setC_color('#FD5E1A');
      setC_icon(cross_icon);
    }

    if(localStorage.getItem('FDP-terms-error')){
      setT_color('#FD5E1A');
      setT_icon(cross_icon);
    }


    if(localStorage.getItem('FDP-settings-error')){
      setS_color('#FD5E1A');
      setS_icon(cross_icon);
    }

    if(localStorage.getItem('FDP-IRC-error')){
      setIrc_color('#FD5E1A');
      setIrc_icon(cross_icon);
    }

    if(localStorage.getItem('FDP-charges-error')){
      setCharges_color('#FD5E1A');
      setCharges_icon(cross_icon);
    }



  }, [])
  
  return (
    <div 
      className="FDP-Accounting-checkbox-div mx-auto d-flex my-4"
    >
      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%'}}>

          </span>
          <span className="circle" style={{borderRadius: '100px', background: `${pd_color}`, fontSize: '20px', color: 'white'}}>
            <p className="circle text-center" style={{padding: '3px'}}>
              {pd_icon}
            </p>
          </span>
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>

          </span>

        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: `${pd_color}`}}>Personal Details</h6>
      </div>

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>
          </span>

          <span className="circle" style={{borderRadius: '100px', background: `${c_color}`, fontSize: '20px', color: '#EEF4FF'}}>
            <p className="circle text-center" style={{padding: '3px'}}>
              {c_icon}
            </p>
          </span>
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>

          </span>

        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: `${c_color}`}}>Currency</h6>
      </div>

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>
          </span>

          <span className="circle" style={{borderRadius: '100px', background: `${t_color}`, fontSize: '20px', color: '#EEF4FF'}}>
            <p className="circle text-center" style={{padding: '3px'}}>
              {t_icon}
            </p>
          </span>
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>

          </span>

        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: `${t_color}`}}>Terms</h6>
      </div>

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>
          </span>

          <span className="circle" style={{borderRadius: '100px', background: `${s_color}`, fontSize: '20px', color: '#EEF4FF'}}>
            <p className="circle text-center" style={{padding: '3px'}}>
              {s_icon}
            </p>
          </span>
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>

          </span>

        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: `${s_color}`}}>Settings</h6>
      </div>

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>
          </span>

          <span className="circle" style={{borderRadius: '100px', background: `${irc_color}`, fontSize: '20px', color: '#518EF8'}}>
            <p className="circle text-center" style={{padding: '3px'}}>
              {irc_icon}
            </p>
          </span>
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>

          </span>

        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: `${irc_color}`}}>Interest Rate Chart</h6>
      </div>

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>
          </span>

          <span className="circle" style={{borderRadius: '100px', background: `${charges_color}`, fontSize: '20px', color: '#EEF4FF'}}>
            <p className="circle text-center" style={{padding: '3px'}}>
              {charges_icon}
            </p>
          </span>

          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>
          </span>

        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: `${charges_color}`}}>Charges</h6>
      </div>
      

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid #1AC29A', background: '#1AC29A'}}>
          </span>

          <span className="circle" style={{borderRadius: '100px', background: '#518EF8', fontSize: '20px', color: '#EEF4FF'}}>
            <p className="circle text-center" style={{padding: '3px'}}>7</p>
          </span>

          <span className="my-auto" style={{height: '1px',width: '42%'}}>
          </span>

        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Accounting</h6>
      </div>

    </div>
  );
}

export default Checkboxes;