import React from 'react';
import { connect } from 'react-redux';

import Action from './Action';
import Results from './Results';
import QuestionHandler from '../containers/QuestionHandler';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      actionClassName: 'btn btn--start',
      hasStarted: true,
      showResult: false,
      disabled: false,
      isLoading: false,
      error: null
    }
    this.numberOfQuestions = 2;
  }

  handleClickAction = () => {
      this.setState({ actionClassName: 'btn btn--start--clicked'}, () => {
        setTimeout(() => {
          this.setState({ hasStarted: true })
        }, 300);
      });
  };

  render() {

    const showResult = this.props.userAnswers.length === this.numberOfQuestions;
    
    if (showResult){
      return (
        <Results
          correctAnswers={this.props.correctAnswers}
          userAnswers={this.props.userAnswers}
        />
      );
    }

    if (!this.state.hasStarted){
      return (
        <Action
          className={this.state.actionClassName}
          disabled={this.state.disabled}
          handleClick={this.handleClickAction}
          title="Starta quiz!"
        />
      );
    }

    return (
      <div>
        Game
        <QuestionHandler />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    userAnswers: state.questionReducer.userAnswers,
    correctAnswers: state.questionReducer.correctAnswers
});

export default connect(mapStateToProps)(Game);
