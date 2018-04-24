import React from 'react';
import { connect } from 'react-redux';

import QuestionTable from '../components/QuestionTable';
// import { correctAnswer } from '../actions';

class QuestionHandler extends React.Component {

  questionHandler = (questions) => {

    // returns a random question, difficulty level is defined in argument
    const length = Object.keys(questions).length;
    const rand = Math.floor((Math.random() * length) + 1);
    return questions[rand];
  }


  render() {
    const question = this.questionHandler(this.props.questions.easy);
    const correctAnswer = question.correct;
    console.log('questions:', question);
    return (
      <div>
        QuestionHandler
        <QuestionTable
          question={question.question}
          alternatives={question.alternatives}
          correctAnswer={correctAnswer}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  difficulty: state.questionReducer.difficulty,
  questions: state.questions
});


export default connect(mapStateToProps)(QuestionHandler);
