import React from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

import App from './App';

const store = configureStore();

window.navigator.userAgent = "react-native";
var io = require('socket.io-client/socket.io');
const socket = io('http://192.168.2.16:3000', {jsonp: false, transports: ['websocket']});

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App socket={socket}/>
      </Provider>
    );
  }
}

export default Root;
