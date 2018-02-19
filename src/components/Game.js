import React from 'react';

import Action from './Action';
import Results from './Results';
import QuestionHandler from '../containers/QuestionHandler';



const path = require('path');
const API = path.join(__dirname, 'questions.json');

let DATA = {};


export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      actionClassName: 'btn btn--start',
      hasStarted: true,
      showResult: false,
      level: '',
      question: '',
      alternatives: [],
      correct: '',
      disabled: false,
      isLoading: false,
      error: null
    }
    this.number = 1;
    this.level = 'easy';
    this.answers = [];
    this.correctAnswers = [];
    this.numberOfQuestions = 2;
    this.points = 0;
    this.maxPoints = this.numberOfQuestions;
    this.easyPoints = 1;
    this.mediumPoints = 2;
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API)
    .then(response => { //byt ut mot async senare?
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        DATA = data;

        })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  correct = () => {
    console.log('correcting');
    const array = this.answers;
    array.map((number, index) => {
      console.log(number, index);
      console.log(this.correctAnswers[index]);
      const res = number === this.correctAnswers[index];
      console.log(res);
      if (res) {
        this.points++;
      }
    });
    console.log('Points: ', this.points);
    this.setState( {
      showResult: true
    });
  };

  handleClickAction = () => {
    console.log('clicked');
    console.log(this);
      this.newQuestion(this.number, this.level);
      this.number++;
      this.newLevel('medium');
      this.setState({ actionClassName: 'btn btn--start--clicked'}, () => {
        setTimeout(() => {
          this.setState({ hasStarted: true })
        }, 300);
      });

  };

  handleClickAlternative = (answer) => {
    setTimeout(() => {
      this.storeAnswer(answer);
      this.newQuestion(this.number, this.level);
      this.number++;
      this.newLevel('medium');
    }, 100);

  };

  storeAnswer = (answer) => {
    console.log('handleAnswer');
    console.log(answer);
    this.answers = [
      ...this.answers,
      answer
    ];
    //console.log(this.answers);
  };

  storeCorrectAnswers = (correctAnswer) => {
    this.correctAnswers = [
      ...this.correctAnswers,
      correctAnswer
    ];
    //console.log('Correct answer:', this.correctAnswers);
  };

  newLevel = (newLevel) => {
    this.level = newLevel;
  };

  newQuestion = (number, level = 'easy') => {

    if (number === this.numberOfQuestions + 1) {
      //correct and show results
      this.correct();
    } else if(DATA[level][number]) {
      this.storeCorrectAnswers(DATA[level][number].correct);
      this.setState({
        question: DATA[level][number].question,
        alternatives: DATA[level][number].alternatives,
        correct: DATA[level][number].correct
      });
    } else {

      console.log('Something went wrong with the questions');
    }


  };

  render() {
    //if showresult , visa resultat. typ.
    if (this.state.showResult){
      return (
        <Results points={this.points} maxPoints={this.maxPoints} />
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
;
