import * as types from './actionTypes';

export const login = () => {
  return {
    type: types.LOGIN
  };
}

export const questionReady = (data) => {
  return {
    type: types.QUESTION_READY,
    question_id: data.id,
    question_type: data.type
  }
}

export const questionGo = () => {
  return {
    type: types.QUESTION_GO
  }
}

export const questionAnswer = () => {
  return {
    type: types.QUESTION_ANSWER
  }
}

export const requestData = (): Object => {
  return {
    type: types.REQUEST_DATA
  };
};

export const receiveData = (data: Object): Object => {
  return {
    type: types.RECEIVE_DATA,
    data
  };
};

export const fetchData = (): Function => {
  return (dispatch) => {
    dispatch(requestData());
    return setTimeout(() => {
      const data = {message: "Home"};
      dispatch(receiveData(data));
    }, 300);
  };
};
