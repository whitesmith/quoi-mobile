import { combineReducers } from "redux";
import * as types from '../actions/actionTypes';

/*************************
Initial state
**************************/
const initialGameState = {
  running: false,
  readyToAnswer: false,
  ended: false
};

const game = (state = initialGameState, action) => {
  switch (action.type) {

    case types.LOGIN:
      return Object.assign({}, state, {
        running: true,
        readyToAnswer: false
      });

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  game
});

export default rootReducer;
