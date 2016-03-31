import React, { Component, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Model = t.struct({
  teamName: t.String
});

class Home extends Component {

  onPress = () => {
    var value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Model}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Join!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default Home;
