import React from 'react';

const Action = (props) => (
  <div className="action">
     <button
       className={props.className}
       disabled={props.disabled}
       onClick={props.handleClick}
       >Starta quiz!
     </button>
  </div>
);

export default Action;
