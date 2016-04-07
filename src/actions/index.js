import * as types from './actionTypes';

export const login = () => {
  return {
    type: types.LOGIN
  };
}

export const questionReady = (data) => {
  return {
    type: types.QUESTION_READY,
    questionId: data.id,
    questionType: data.type
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

export const questionCorrection = (data) => {
  return {
    type: types.QUESTION_CORRECTION,
    questionWasCorrect: data.correct
  }
}

export const gameEnd = (data) => {
  return {
    type: types.GAME_END,
    ranking: data.ranking
  }
}

export const saveToken = (data) => {
  return {
    type: types.SAVE_TOKEN,
    name: data.name,
    token: data.token
  }
}

export const foundServer = (data) => {
  return {
    type: types.FOUND_SERVER,
    serverIP: data.serverIP,
    token: data.token
  }
}

export const gameFinished = () => {
  return {
    type: types.GAME_FINISHED
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
