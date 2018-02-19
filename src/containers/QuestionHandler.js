import React from 'react';
import { connect } from 'react-redux';
import QuestionTable from '../components/QuestionTable';

class QuestionHandler extends React.Component {
  // Kolla svårighetsgrad.
  // Välj fråga
  // skicka vidare fråga + tillhörande alternativ.
  questionHandler = (questions) => {
    // returns a random question, difficulty level is defined in argument
    const length = Object.keys(questions).length;
    const rand = Math.floor((Math.random() * length) + 1);
    return questions[rand];
  }
  render() {
    console.log('QuestionHandler render');
    console.log('Users answers:', this.props.userAnswers);
    console.log('Difficulty:', this.props.difficulty);
    const question = this.questionHandler(this.props.questions.easy);
    return (
      <div>
        QuestionHandler
        <QuestionTable
          question={question.question}
          alternatives={question.alternatives}
          // handleClick={this.handleClickAlternative}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userAnswers: state.questionReducer.userAnswers,
  difficulty: state.questionReducer.difficulty,
  questions: state.questions
});

export default connect(mapStateToProps)(QuestionHandler);
