import React, { Component } from "react-native";
import { connect } from "react-redux";
import { login, newQuestion } from "../actions";
import Home from "../components/Home";
import Command from "../components/Command";

class App extends Component {

   render() {
      if (this.props.gameRunning) {
        return (
          <Command
            readyToAnswer={this.props.readyToAnswer}
            onNewQuestion={this.props.onNewQuestion}
          />
        );
      } else {
        return (
          <Home onLogin={this.props.onLogin} />
        );
      }
   }

}


const mapStateToProps = (state) => {
  return {
    gameRunning: state.game.running,
    readyToAnswer: state.game.readyToAnswer,
    gameEnded: state.game.ended
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => {
      dispatch(login());
    },
    onNewQuestion: () => {
      dispatch(newQuestion());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
