import React, { Component } from "react-native";
import { connect } from "react-redux";
import { login, questionReady, questionGo, questionAnswer, questionCorrection, gameEnd, saveToken } from "../actions";
import Home from "../components/Home";
import Command from "../components/Command";
import Result from "../components/Result";
import Ranking from "../components/Ranking";

class App extends Component {

  componentDidMount() {
    const { socket, onLogin, onQuestionReady, onQuestionGo, onQuestionCorrection, onGameEnd, name, token } = this.props;

    // socket.on('reconnect', () => {
    //   socket.emit('login', {name: name, token: token});
    // });

    socket.on('game_wait_start', () => {
      onLogin();
    });

    socket.on('question_ready', (data) => {
      onQuestionReady(data);
    });

    socket.on('question_go', () => {
      this.questionGoTime = new Date().getTime();
      onQuestionGo();
    });

    socket.on('question_correction', (data) => {
      onQuestionCorrection(data);
    });

    socket.on('game_end', (data) => {
      onGameEnd(data);
    });
  }

   render() {
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
              socket={this.props.socket}
              questionGo={this.props.questionGo}
              onQuestionAnswer={this.props.onQuestionAnswer}
              questionId={this.props.questionId}
            />
          );
        }
      } else {
        if (this.props.showRanking) {
          return (
            <Ranking ranking={this.props.ranking}/>
          );
        } else {
          return (
            <Home
              socket={this.props.socket}
              onSaveToken={this.props.onSaveToken}
            />
          );
        }
      }
   }

}


const mapStateToProps = (state) => {
  return {
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
    onQuestionCorrection: (data) => {
      dispatch(questionCorrection(data));
    },
    onGameEnd: (data) => {
      dispatch(gameEnd(data));
    },
    onSaveToken: (data) => {
      dispatch(saveToken(data));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
