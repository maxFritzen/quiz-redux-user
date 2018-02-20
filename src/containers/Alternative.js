import React from 'react';
import { connect } from 'react-redux';

import { storeAnswer, correctAnswer } from '../actions';

class Alternative extends React.Component {
  // Tar in alternativet ifrån QuestionTable
  constructor(props){
    super(props);
  }

  handleOnClick = () => {
    this.props.storeAnswer(this.props.alternative);
    this.props.storeCorrectAnswer(this.props.correctAnswer);
  }
  render() {
    const alternative = this.props.alternative;

    return (
      <div className="alternative">
        <button
          onClick={this.handleOnClick}
          >
          {alternative}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeAnswer: (answer) => dispatch(storeAnswer(answer)),
  storeCorrectAnswer: (input) => dispatch(correctAnswer(input))
});

export default connect(null, mapDispatchToProps)(Alternative);
