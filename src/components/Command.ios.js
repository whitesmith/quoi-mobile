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
    const { socket, onQuestionReady, onQuestionGo } = this.props;
    CommandHelper.componentDidMount(socket, onQuestionReady, onQuestionGo);
  }

  buttonClicked() {
    const { questionGo } = this.props;
    if (questionGo) {
      console.log('button clicked');
    }
  }

  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>A</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>B</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>C</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.buttonClicked.bind(this)}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>D</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.buttonClicked.bind(this)}>
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
