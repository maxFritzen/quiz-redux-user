//import action from '../actions/action'
export default (state = [], action) => {
  switch (action.type) {
    case 'NEXT' :
    //next question
      console.log('Next question.', action.payload.data);
    case 'FINISH' :
    //finished? i dunno
    default: return state;
  }
};
