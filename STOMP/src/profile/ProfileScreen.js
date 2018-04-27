import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

export default class ProfileScreen extends React.Component {

  // These are for react navigation, like header bar and such
  static navigationOptions = {
    title: 'My Account',
  };

  render() {
    // this is the navigator we passed in from App.js
    const { navigate } = this.props.navigation;

    return (
      // An example of how to use flex to get 2 vetrically aligned boxes with things in the middles
      <View style={{ flex: 1, alignItems: 'center', }}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', }}>

          // NOTE: this is a React-Native-Elements Button! Slightly different than a React-Native Button,
          // It builds off touchable opacity and generally looks better! (And has more accessible styling)
          <Text> Profile stuff </Text>

        </View>
      </View>
    );
  }
}
