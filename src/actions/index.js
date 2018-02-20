
export const STORE_ANSWER = 'STORE_ANSWER';
export const CORRECT_ANSWER = 'CORRECT_ANSWER';

export const storeAnswer = (answer) => {
  return {
    type: STORE_ANSWER,
    payload: answer
  }
}

export const correctAnswer = (correctAnswer) => {
  return {
    type: CORRECT_ANSWER,
    payload: correctAnswer
  }
}
