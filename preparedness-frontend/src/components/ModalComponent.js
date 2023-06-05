import React from "react";

const ModalComponent = ({userName, onClose}) => {
  return( 
    //container -> components
<div id="bG">
      <div className="modalHead">
        <h1>
          Hello, {userName} !
          <button className="close" onClick={onClose}>
            X
          </button>
        </h1>
      </div>
      <hr />
      <div className="modalBody">
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>  )
}
// close needs an onClick
export default ModalComponent;
