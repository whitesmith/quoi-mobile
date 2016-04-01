import React, { Component } from "react-native";
import { connect } from "react-redux";
import { login } from "../actions";
import Home from "../components/Home";
import Command from "../components/Command";

class App extends Component {

   render() {
      const { gameRunning, readyToAnswer, onLogin } = this.props;

      if (gameRunning) {
        return (
          <Command
            readyToAnswer={readyToAnswer}
          />
        );
      } else {
        return (
          <Home onLogin={onLogin} />
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
