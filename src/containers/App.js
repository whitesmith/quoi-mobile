import React, { Component } from "react-native";
import { connect } from "react-redux";
import { login, questionReady, questionGo, questionAnswer, questionCorrection, gameEnd, saveToken, foundServer, gameFinished } from "../actions";
import Home from "../components/Home";
import Command from "../components/Command";
import Result from "../components/Result";
import Ranking from "../components/Ranking";
import WaitingServer from "../components/WaitingServer";

window.navigator.userAgent = "react-native";
var io = require('socket.io-client/socket.io');
var socket;

class App extends Component {

  componentDidMount() {
    const { name, token } = this.props;

    // socket.on('reconnect', () => {
    //   socket.emit('login', {name: name, token: token});
    // });
  }

  render() {
    if (!this.props.foundServer) {
      return (
        <WaitingServer
          onFoundServer={this.props.onFoundServer}
        />
      );
    } else {
      if (this.props.gameRunning) {
        if (this.props.showQuestionCorrection) {
          return (
            <Result
              questionWasCorrect={this.props.questionWasCorrect}
            />
          );
        } else {
          return (
            <Command
              socket={socket}
              questionGo={this.props.questionGo}
              onQuestionAnswer={this.props.onQuestionAnswer}
              questionId={this.props.questionId}
            />
          );
        }
      } else {
        if (this.props.showRanking) {
          return (
            <Ranking
              ranking={this.props.ranking}
              onGameFinished={this.props.onGameFinished}
            />
          );
        } else {
          return (
            <Home
              socket={socket}
              onSaveToken={this.props.onSaveToken}
            />
          );
        }
      }
    }
  }
}


const mapStateToProps = (state) => {
  return {
    foundServer: state.game.foundServer,
    gameRunning: state.game.running,
    questionGo: state.game.questionGo,
    gameEnded: state.game.ended,
    questionId: state.game.currentQuestion.id,
    showQuestionCorrection: state.game.showQuestionCorrection,
    questionWasCorrect: state.game.questionWasCorrect,
    showRanking: state.game.showRanking,
    name: state.game.name,
    token: state.game.token,
    ranking: state.game.ranking
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onQuestionAnswer: () => {
      dispatch(questionAnswer());
    },
    onSaveToken: (data) => {
      dispatch(saveToken(data));
    },
    onGameFinished: () => {
      socket.close();
      socket = null;
      dispatch(gameFinished());
    },
    onFoundServer: (data) => {
      const ip = data.serverIP;
      socket = io(ip, {jsonp: false, transports: ['websocket']});

      socket.on('connect', () => {

        socket.on('game_wait_start', () => {
          dispatch(login());
        });

        socket.on('question_ready', (data) => {
          dispatch(questionReady(data));
        });

        socket.on('question_go', () => {
          dispatch(questionGo());
        });

        socket.on('question_correction', (data) => {
          dispatch(questionCorrection(data));
        });

        socket.on('game_end', (data) => {
          dispatch(gameEnd(data));
        });

        dispatch(foundServer(data));

      });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
