import React, { Component } from "react-native";

var {
  StyleSheet,
  View
} = React;

class Game extends Component {

  render() {
    const { gameRunning } = this.props;
    return (
      <View
        style={styles.view}>
      </View>
    );
  }
}

Game.propTypes = {
};

Game.defaultProps = {
};

var styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export default Game;
