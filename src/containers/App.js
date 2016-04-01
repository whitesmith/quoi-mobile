import React, { Component } from "react-native";
import { connect } from "react-redux";
import { login, questionReady, questionGo, questionAnswer, questionCorrection } from "../actions";
import Home from "../components/Home";
import Command from "../components/Command";
import Result from "../components/Result";

class App extends Component {

  componentDidMount() {
    console.log('componentDidMount');
    const { socket, onQuestionReady, onQuestionGo, onQuestionCorrection } = this.props;

    socket.on('question_correction', (data) => {
      console.log(data);
      onQuestionCorrection(data);
    });

    socket.on('question_ready', (data) => {
      onQuestionReady(data);
    });

    socket.on('question_go', () => {
      this.questionGoTime = new Date().getTime();
      onQuestionGo();
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
        return (
          <Home
            socket={this.props.socket}
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
    showQuestionCorrection: state.game.showQuestionCorrection,
    questionWasCorrect: state.game.questionWasCorrect
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
