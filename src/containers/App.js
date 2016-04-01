import React, { Component } from "react-native";
import { connect } from "react-redux";
import { login, questionReady, questionGo, questionAnswer } from "../actions";
import Home from "../components/Home";
import Command from "../components/Command";

window.navigator.userAgent = "react-native";
var io = require('socket.io-client/socket.io');
const socket = io('http://jlbribeiro.tunnels.whitesmith.co/', {jsonp: false, transports: ['websocket']});

class App extends Component {

   render() {
      if (this.props.gameRunning) {
        return (
          <Command
            socket={socket}
            onQuestionReady={this.props.onQuestionReady}
            questionGo={this.props.questionGo}
            onQuestionGo={this.props.onQuestionGo}
            onQuestionAnswer={this.props.onQuestionAnswer}
            questionId={this.props.questionId}
          />
        );
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
    questionId: state.game.currentQuestion.id
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
