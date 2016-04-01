import { combineReducers } from "redux";
import * as types from '../actions/actionTypes';

/*************************
Initial state
**************************/
const initialGameState = {
  running: false,
  questionGo: false,
  currentQuestion: {
    id: -1,
    type: ''
  },
  waitingForCorrection: false,
  showQuestionCorrection: false,
  ended: false
};

const game = (state = initialGameState, action) => {
  switch (action.type) {

    case types.LOGIN:
      return Object.assign({}, state, {
        running: true
      });

    case types.QUESTION_READY:
      return Object.assign({}, state, {
        currentQuestion: {
          id: action.questionId,
          type: action.questionType
        },
        showQuestionCorrection: false
      });

    case types.QUESTION_GO:
      return Object.assign({}, state, {
        questionGo: true
      });

    case types.QUESTION_ANSWER:
      return Object.assign({}, state, {
        questionGo: false,
        currentQuestion: {
          id: -1,
          type: ''
        },
        waitingForCorrection: true
      });

    case types.QUESTION_CORRECTION:
      return Object.assign({}, state, {
        waitingForCorrection: false,
        showQuestionCorrection: true
      });

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game
});

export default rootReducer;
