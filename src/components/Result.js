import React from "react-native";

var {
  StyleSheet,
  View
} = React;

class Result extends React.Component {

  render() {
    return (
      <View
        style={styles.view}>
      </View>
    );
  }
}

Result.propTypes = {
};

Result.defaultProps = {
};

var styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export default Result;
