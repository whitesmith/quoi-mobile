import React from "react-native";
import Dimensions from 'Dimensions';

import CommandHelper from '../lib/CommandHelper';

var {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} = React;

class Command extends React.Component {

  componentDidMount() {
    const { socket, questionGo, onQuestionReady, onQuestionGo } = this.props;
    this.commandHelper = new CommandHelper();
    this.commandHelper.waitForQuestion(socket, questionGo, onQuestionReady, onQuestionGo);
  }

  componentDidUpdate() {
    const { socket, questionGo, onQuestionReady, onQuestionGo } = this.props;
    this.commandHelper.waitForQuestion(socket, questionGo, onQuestionReady, onQuestionGo);
  }

  buttonClicked(option) {
    const { socket, questionGo, onQuestionAnswer, questionId } = this.props;
    this.commandHelper.handleButtonClick(socket, questionGo, option, questionId, onQuestionAnswer);
  }

  render() {

    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>

        <TouchableNativeFeedback
          style={styles.touchableNativeFeedback}
          onPress={() => this.buttonClicked(1)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>A</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={styles.touchableNativeFeedback}
          onPress={() => this.buttonClicked(2)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>B</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={styles.touchableNativeFeedback}
          onPress={() => this.buttonClicked(3)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>C</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={styles.touchableNativeFeedback}
          onPress={() => this.buttonClicked(4)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>D</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          style={styles.touchableNativeFeedback}
          onPress={() => this.buttonClicked(5)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>E</Text>
          </View>
        </TouchableNativeFeedback>

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
  contentContainer: {
    height: Dimensions.get('window').height,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    borderWidth: 2
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: Dimensions.get('window').height / 6
  }
});

export default Command;
