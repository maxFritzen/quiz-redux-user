import React from 'react';

const Alternative = (props) => (
  <div className="alternative">
    <button

      onClick={() => props.handleClick(props.alternative)}
      >
      {props.alternative}
    </button>
  </div>
);

export default Alternative;
