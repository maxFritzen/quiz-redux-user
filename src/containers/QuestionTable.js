import React from 'react';
import { connect } from 'react-redux';

import Alternative from '../components/Alternative';
import Question from '../components/Question';

class QuestionTable extends React.Component {

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


  questionHandler = (questions) => {
    // returns a random question, difficulty level is defined in argument
    const length = Object.keys(questions).length;
    const rand = Math.floor((Math.random() * length) + 1);
    return questions[rand].question;
  }

 render() {
   console.log(this.alternativeHandler(this.props.questions.easy[1].alternatives));
   const question = this.questionHandler(this.props.questions.easy);
    return (
      <div className="question-table">

         <Question question={question}/>
         <div className="question-list">
           <Alternative
             alternative={this.props.questions.easy[1].alternatives[0]}
             // storeAnswer={this.props.storeAnswer}
             // handleClick={this.props.handleClick}
           />
           <Alternative
             alternative={this.props.questions.easy[1].alternatives[1]}
             // storeAnswer={this.props.storeAnswer}
             // handleClick={this.props.handleClick}
           />
         </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions
});

export default connect(mapStateToProps)(QuestionTable);
