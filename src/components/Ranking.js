import React from "react-native";
import Button from 'react-native-button';

var {
  StyleSheet,
  Text,
  View
} = React;

class Ranking extends React.Component {

  onPress(event) {
    const { onGameFinished } = this.props;
    onGameFinished();
  }

  render() {
    const { ranking } = this.props
    return (
      <View
        style={styles.view}>
        <Text>Your ranking: {ranking}</Text>
        <Button
          containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
          style={{fontSize: 20, color: 'white'}}
          onPress={() => this.onPress()}
        >
          Finish!
        </Button>
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
