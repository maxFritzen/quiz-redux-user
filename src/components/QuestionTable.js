import React from 'react';

import Alternative from './Alternative';
import Question from './Question';

const QuestionTable = (props) => (
  <div className="question-table">
     <Question question={props.question}/>
     <div className="question-list">
       <Alternative
         alternative={props.alternatives[0]}
         storeAnswer={props.storeAnswer}
         handleClick={props.handleClick}
       />
       <Alternative
         alternative={props.alternatives[1]}
         storeAnswer={props.storeAnswer}
         handleClick={props.handleClick}
       />
     </div>

  </div>
);

export default QuestionTable;
