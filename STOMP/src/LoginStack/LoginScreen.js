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

    _goToLogIn = () => {
        const { navigate } = this.props.navigation;
        navigate('Login', {})
    }

    render() {
    // this is the navigator we passed in from App.js
    const { navigate } = this.props.navigation;

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>STOMP</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input}/>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true}/>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={styles.button}
                    onPress = {() => {this._enterApp()}}
                    containerStyle={{ marginTop: 20 }}
                    title="LOG IN">
                </Button>
            </View>

            <View style={styles.linkContainer}>
                <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>Forgot your password?</Text>
                <Text style={styles.text, {color: '#48797C', marginTop: 10}}>Need an account?</Text>
                <Text style={styles.link} onPress = {() => {this._goToSignUp()}}>SIGN UP</Text>
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
      flex: 3,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    text: {
        alignSelf: 'flex-start',
        fontSize: 14,
        color: '#272727',
        marginTop: 20,
    },
    inputContainer: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    input: {
        color: '#FFFFFF',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#48797C',
        borderColor: '#80CBC4',
        borderWidth: 1,
        flex: .15,
        width: 285,
    },
    buttonContainer: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    button: {
      backgroundColor: "black",
      width: '100%',
      margin: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    linkContainer: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      },
    link: {
        color: '#48797C',
        textDecorationLine: 'underline',
    }
});
