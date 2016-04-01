import React, { Component } from "react-native";
import { connect } from "react-redux";
import { login, questionReady, questionGo, questionAnswer, questionCorrection } from "../actions";
import Home from "../components/Home";
import Command from "../components/Command";
import Result from "../components/Result";

window.navigator.userAgent = "react-native";
var io = require('socket.io-client/socket.io');
const socket = io('http://192.168.2.16:3000', {jsonp: false, transports: ['websocket']});

class App extends Component {

   render() {
      if (this.props.gameRunning) {
        if (this.props.showQuestionCorrection) {
          return (
            <Result />
          );
        } else {
          return (
            <Command
              socket={socket}
              onQuestionReady={this.props.onQuestionReady}
              questionGo={this.props.questionGo}
              onQuestionGo={this.props.onQuestionGo}
              onQuestionAnswer={this.props.onQuestionAnswer}
              questionId={this.props.questionId}
              waitingForCorrection={this.props.waitingForCorrection}
              onQuestionCorrection={this.props.onQuestionCorrection}
            />
          );
        }
      } else {
        return (
          <Home
            socket={socket}
            onLogin={this.props.onLogin}
          />

        );
      }
   }

}


const mapStateToProps = (state) => {
  return {
    gameRunning: state.game.running,
    questionGo: state.game.questionGo,
    gameEnded: state.game.ended,
    questionId: state.game.currentQuestion.id,
    waitingForCorrection: state.game.waitingForCorrection,
    showQuestionCorrection: state.game.showQuestionCorrection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => {
      dispatch(login());
    },
    onQuestionReady: (data) => {
      dispatch(questionReady(data));
    },
    onQuestionGo: () => {
      dispatch(questionGo());
    },
    onQuestionAnswer: () => {
      dispatch(questionAnswer());
    },
    onQuestionCorrection: () => {
      dispatch(questionCorrection());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
