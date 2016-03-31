import React from "react-native";

var {
  StyleSheet,
  Text,
  View
} = React;

class Ranking extends React.Component {

  render() {
    return (
      <View
        style={styles.view}>
        <Text>Your ranking: 5</Text>
      </View>
    );
  }
}

Ranking.propTypes = {
};

Ranking.defaultProps = {
};

var styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Ranking;
