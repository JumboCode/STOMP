import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {

  // These are for react navigation, like header bar and such
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    // this is the navigator we passed in from App.js
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to List Screen"
          onPress={() =>
            navigate('List', {})
          }
        />
        <Button
          title="Go to Info Screen"
          onPress={() =>
            navigate('Info', {})
          }
        />
      </View>
    );
  }
}
