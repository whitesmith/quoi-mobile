import React from "react-native";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import Home from "../components/Home";

const mapStateToProps = (state) => {
  return {
    gameRunning: state.game.running,
    gameEnded: state.game.ended
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default App
