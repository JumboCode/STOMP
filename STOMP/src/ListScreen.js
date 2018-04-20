import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ListScreen extends React.Component {

  // These are for react navigation, like header bar and such
  static navigationOptions = {
    title: 'List',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>List Screen</Text>
      </View>
    );
  }
}
