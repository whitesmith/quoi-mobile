import { combineReducers } from "redux";
import * as types from '../actions/actionTypes';

/*************************
Initial state
**************************/
const initialGameState = {
  running: false,
  ended: false
};

const game = (state = initialGameState, action) => {
  return state;
};

const rootReducer = combineReducers({
  game
});

export default rootReducer;
