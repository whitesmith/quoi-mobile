import React from "react-native";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import Command from "../components/Command";
import Home from "../components/Home";

const mapStateToProps = (state) => {
  return {
    isFetching: state.data.isFetching,
    message: state.data.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentDidMount: () => {
      dispatch(fetchData())
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default App
