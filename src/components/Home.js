import React from "react-native";

var {
  Text,
  ScrollView,
  StyleSheet
} = React;

class Home extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount();
  }
  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Text>{this.props.isFetching ? "Loading" : this.props.message}</Text>
      </ScrollView>
    );
  }
}

Home.propTypes = {
  isFetching: React.PropTypes.bool,
  message: React.PropTypes.string,
  onComponentDidMount: React.PropTypes.func
};

Home.defaultProps = {
  isFetching: false,
  message: "",
  onComponentDidMount: () => {}
};

var styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Home;
