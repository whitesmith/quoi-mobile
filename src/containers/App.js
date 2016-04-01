import React, { Component } from "react-native";
import { connect } from "react-redux";
import { login, newQuestion } from "../actions";
import Home from "../components/Home";
import Command from "../components/Command";

window.navigator.userAgent = "react-native";
var io = require('socket.io-client/socket.io');
const socket = io('http://jlbribeiro.tunnels.whitesmith.co/', {jsonp: false});

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
