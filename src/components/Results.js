import React from 'react';

const Results = (props) => (
  <div className="results">
    <h1 className="results-title">Results:</h1>
    <div>
      <p className="results-paragraph">
        {props.points} / {props.maxPoints}
      </p>
    </div>
  </div>
);

export default Results;
