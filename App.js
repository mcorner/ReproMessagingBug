import React from 'react';

import messaging from '@react-native-firebase/messaging';

import {
  Text,
} from 'react-native';


class App extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    messaging().getToken()
      .then(token => {
        console.log(token);
      });

    messaging().getInitialNotification()
      .then(remoteMessage => {
        console.log(JSON.stringify(remoteMessage));
      });

  }
  render() {
    return (
      <Text>Foo</Text>      
    );
  }
}

export default App;
