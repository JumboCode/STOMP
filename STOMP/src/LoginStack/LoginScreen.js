import React from 'react';
import { Alert, Linking, StyleSheet, TextInput, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class LoginScreen extends React.Component {

  // These are for react navigation, like header bar and such
  static navigationOptions = {
    title: 'Home',
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
                <Text style={styles.title}>STOMP</Text>
                <Text style={styles.text}>Email: </Text>
                <Text style={styles.text}>Password: </Text>
                <Button
                  titleStyle={{ fontWeight: "700" }}
                  buttonStyle={styles.button}
                  onPress = {() => {this._enterApp()}}
                  containerStyle={{ marginTop: 20 }}
                  title="LOG IN">
                </Button>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
      color: 'black',
      fontSize: 50,
      letterSpacing: 3,
      paddingBottom: 30,
      textAlign: 'center',
  },
    text: {
        color: 'black',
        fontSize: 10,
        paddingLeft: 10,
    },
    button: {
      backgroundColor: "black",
      width: '100%',
      margin: 5,
      justifyContent: "center",
      alignItems: "center",
    },
});
