import { STORE_ANSWER, CORRECT_ANSWER, SELECT_QUIZ } from '../actions'

const defaultState = {
    difficulty: 'easy',
    userAnswers: [],
    correctAnswers: [],
    currentQuiz : ''

}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_QUIZ:
      return {
        ...state,
        currentQuiz: action.title
      }

    case STORE_ANSWER :
      return {
        ...state,
        userAnswers: [
          ...state.userAnswers,
          action.payload
        ]
      };
      case CORRECT_ANSWER: {
        return {
          ...state,
          correctAnswers: [
            ...state.correctAnswers,
            action.payload
          ]
        }
      }
    default: return state;
  }
};
