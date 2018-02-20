import { STORE_ANSWER, CORRECT_ANSWER } from '../actions'

const defaultState = {
    difficulty: 'easy',
    userAnswers: [],
    correctAnswers: []

}

export default (state = defaultState, action) => {
  switch (action.type) {
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
