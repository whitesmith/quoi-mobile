import React, { Component } from "react-native";
import { connect } from "react-redux";
import { login } from "../actions";
import Home from "../components/Home";
import Command from "../components/Command";

class App extends Component {

   render() {
      const { gameRunning, onLogin } = this.props;

      if (gameRunning) {
        return (
          <Command />
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
