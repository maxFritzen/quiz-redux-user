//import action from '../actions/action'

const defaultState = {
    difficulty: 'easy'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'NEXT' :
    //next question
      console.log('Next question.', action.payload.data);
    case 'FINISH' :
    //finished? i dunno
    default: return state;
  }
};
