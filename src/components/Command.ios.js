import React from "react-native";
import Dimensions from 'Dimensions';

import CommandHelper from '../lib/CommandHelper';

var {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

class Command extends React.Component {

  componentDidMount() {
    this.commandHelper = new CommandHelper();
  }

  componentDidUpdate() {
    const { questionGo } = this.props;
    if (questionGo) {
      this.commandHelper.setQuestionGoTime(new Date());
    }
  }

  buttonClicked(option) {
    const { socket, questionGo, onQuestionAnswer, questionId } = this.props;
    this.commandHelper.handleButtonClick(socket, questionGo, option, questionId, onQuestionAnswer);
  }

  contentContainerStyle() {
    const { questionGo } = this.props;

    var resultColor;
    if (questionGo) {
      resultColor = 'white';
    } else {
      resultColor = 'grey';
    }

    return {
      height: Dimensions.get('window').height,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: resultColor
    }
  }

  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={this.contentContainerStyle()}>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={() => this.buttonClicked(1)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>A</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={() => this.buttonClicked(2)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>B</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={() => this.buttonClicked(3)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>C</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={() => this.buttonClicked(4)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>D</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={() => this.buttonClicked(5)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>E</Text>
          </View>
        </TouchableHighlight>

      </ScrollView>
    );
  }
}

Command.propTypes = {
};

Command.defaultProps = {
};

var styles = StyleSheet.create({
  scrollView: {
  },
  touchableHighlight: {
    flex: 1,
    width: Dimensions.get('window').width,
    borderWidth: 2
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: Dimensions.get('window').height / 6
  }
});

export default Command;
