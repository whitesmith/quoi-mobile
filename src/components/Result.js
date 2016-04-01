import React from "react-native";

var {
  View
} = React;

class Result extends React.Component {

  resultStyle() {
    const { questionWasCorrect } = this.props;

    var resultColor;
    if (questionWasCorrect) {
      resultColor = 'green';
    } else {
      resultColor = 'red';
    }

    return {
      flex: 1,
      backgroundColor: resultColor
    }
  }

  render() {
    return (
      <View
        style={this.resultStyle()}>
      </View>
    );
  }
}

Result.propTypes = {
};

Result.defaultProps = {
};

export default Result;
