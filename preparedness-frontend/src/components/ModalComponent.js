import React from "react";

const ModalComponent = ({userName, onClose}) => {
  return( 
    //container -> components
  <div id='bG'> 
      <div className='modalHead'>
        <h1> Hello, {userName}</h1>
      </div>
      <hr/>
        <div className='modalBody'>
          <p>Lorum Ipsum</p>
        </div>
          <div className='modalFooter'>
            <button onClick= {onClose}>Close</button>
          </div>
    
  </div>
  )
}
// close needs an onClick
export default ModalComponent;
