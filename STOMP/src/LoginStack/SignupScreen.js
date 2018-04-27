import React from 'react';
import { Alert, Linking, StyleSheet, TextInput, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SignupScreen extends React.Component {

  // These are for react navigation, like header bar and such
  static navigationOptions = {
    title: 'Sign Up',
  };

  _enterApp = () => {
    const { navigate } = this.props.navigation;
    navigate('AppSwitch', {})
  }

  render() {
    // this is the navigator we passed in from App.js
    const { navigate } = this.props.navigation;

    return (
            <View>
                <Text style={styles.title}>Sign Up Screen</Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 30,
        letterSpacing: 3,
        paddingTop: 70,
        paddingBottom: 50,
        textAlign: 'center',
    },
});
