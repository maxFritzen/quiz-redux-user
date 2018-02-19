import React from 'react';

import Alternative from './Alternative';
import Question from './Question';

export default class QuestionTable extends React.Component {
  constructor(props) {
    super(props);
  }

  alternativeHandler = (alternatives) => {
    // returns a shuffled array
    let ctr = alternatives.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
        index = Math.floor(Math.random() * ctr);
      // Decrease length by 1
        ctr--;
      // And swap the last element with it
        temp = alternatives[ctr];
        alternatives[ctr] = alternatives[index];
        alternatives[index] = temp;
    }
    return alternatives;
  }

 render() {
   console.log('QuestionTable render');
   const alternatives = this.alternativeHandler(this.props.alternatives);

    return (
      <div className="question-table">

         <Question question={this.props.question}/>
         <div className="question-list">
           <Alternative
             alternative={alternatives[0]}
           />
           <Alternative
             alternative={alternatives[1]}
           />
           <Alternative
             alternative={alternatives[2]}
           />
         </div>

      </div>
    );
  }
}
