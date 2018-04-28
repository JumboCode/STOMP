import React from 'react';
import { Alert, Linking, StyleSheet, TextInput, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SplashScreen extends React.Component {

    // These are for react navigation, like header bar and such
    static navigationOptions = {
    };

    _goToLogIn = () => {
        const { navigate } = this.props.navigation;
        navigate('Login', {})
    }

    _goToSignUp = () => {
        const { navigate } = this.props.navigation;
        navigate('Signup', {})
    }

    render() {
    // this is the navigator we passed in from App.js
    const { navigate } = this.props.navigation;

    return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>STOMP</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={styles.button}
                        onPress = {() => {this._goToLogIn()}}
                        containerStyle={{ marginTop: 20 }}
                        title="LOG IN">
                    </Button>

                    <Button
                        titleStyle={{ fontWeight: "700" }}
                        buttonStyle={styles.button}
                        onPress = {() => {this._goToSignUp()}}
                        containerStyle={{ marginTop: 20 }}
                        title="SIGN UP">
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 50,
        letterSpacing: 3,
        paddingBottom: 30,
        textAlign: 'center',
    },
    textContainer: {
      flex: 4,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    buttonContainer: {
      flex: 6,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    button: {
      backgroundColor: "black",
      width: '100%',
      margin: 5,
      justifyContent: "center",
      alignItems: "center",
    },
});
