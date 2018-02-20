import React from 'react';

const Results = (props) => (
  <div className="results">
    <h1 className="results-title">Results:</h1>
    <div>
      <table className="results__table">
        <tbody>
          <tr className="results__table-row">
            <th>Question</th>
            <th>Correct answer</th>
            <th>Users answer</th>
          </tr>

            {props.correctAnswers.map((answer, index) => {
              const row = (
                <tr key={index}>
                  <td >{index + 1}</td>
                  <td >{answer}</td>
                  <td >{props.userAnswers[index]}</td>
                </tr>);
              return row;
            })}

        </tbody>
      </table>
    </div>
  </div>
);

export default Results;
