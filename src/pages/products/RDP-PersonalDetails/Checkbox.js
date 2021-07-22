import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './RDP-PersonalDetails.scss';

const Checkboxes = () => {
  return (
    <div 
      className="RDP-PD-checkbox-div mx-auto d-flex my-4"
    >
      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%'}}>
          </span>
          <span className="circle" style={{borderRadius: '50%', background: '#518EF8', fontSize: '20px', color: 'white'}}>
            <p className="circle text-center" style={{padding: '3px'}}>1</p>
          </span>
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Personal Details</h6>
      </div>

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
          <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
            <p className="circle text-center" style={{padding: '3px'}}>2</p>
          </span>
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Currency</h6>
      </div>

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
          <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
            <p className="circle text-center" style={{padding: '3px'}}>3</p>
          </span>
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Terms</h6>
      </div>

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
          <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
            <p className="circle text-center" style={{padding: '3px'}}>4</p>
          </span>
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Settings</h6>
      </div>

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
          <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
            <p className="circle text-center" style={{padding: '3px'}}>5</p>
          </span>
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Interest Rate Chart</h6>
      </div>

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
          <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
            <p className="circle text-center" style={{padding: '3px'}}>6</p>
          </span>
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
        </div>
        
        <h6 className="mt-3 text-center py-1" style={{color: '#518EF8'}}>Charges</h6>
      </div>
      

      <div style={{width: '14%'}}>
        <div className="d-flex">
          <span className="my-auto" style={{height: '1px',width: '42%', border: '1px solid rgba(36, 64, 143, 0.15)', background: 'rgba(36, 64, 143, 0.15)'}}>
          </span>
          <span className="circle" style={{borderRadius: '100px', background: '#EEF4FF', fontSize: '20px', color: '#518EF8'}}>
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