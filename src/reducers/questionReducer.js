import storeAnswer from '../actions'

const defaultState = {
    difficulty: 'easy',
    userAnswers: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'STORE' :
    //next question
      console.log('STORE ANSWER', action.payload);
      return {
        ...state,
        userAnswers: action.payload
      };
    default: return state;
  }
};
