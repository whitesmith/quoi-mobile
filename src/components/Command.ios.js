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
    const { socket, questionGo, onQuestionReady, onQuestionGo } = this.props;
    this.commandHelper = new CommandHelper();
    this.commandHelper.waitForQuestion(socket, questionGo, onQuestionReady, onQuestionGo);
  }

  componentDidUpdate() {
    const { socket, questionGo, onQuestionReady, onQuestionGo } = this.props;
    this.commandHelper.waitForQuestion(socket, questionGo, onQuestionReady, onQuestionGo);
  }

  buttonClicked(option) {
    const { questionGo, onQuestionAnswer } = this.props;
    this.commandHelper.handleButtonClick(questionGo, option, onQuestionAnswer);
  }

  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={() => this.buttonClicked('A')}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>A</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={() => this.buttonClicked('B')}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>B</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={() => this.buttonClicked('C')}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>C</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={() => this.buttonClicked('D')}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>D</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={() => this.buttonClicked('E')}>
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
  contentContainer: {
    height: Dimensions.get('window').height,
    justifyContent: "center",
    alignItems: "center"
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
