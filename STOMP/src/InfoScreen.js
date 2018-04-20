import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class InfoScreen extends React.Component {

  // These are for react navigation, like header bar and such
  static navigationOptions = {
    title: 'Info',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{"Another example of a screen!"}</Text>
      </View>
    );
  }
}
