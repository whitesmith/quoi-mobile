import { createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
import devTools from "remote-redux-devtools";

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  devTools()
)(createStore);

const configureStore = function (initialState: Object = {}): Function {
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;
