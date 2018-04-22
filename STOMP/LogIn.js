import React from 'react';
import { Alert, Button, Linking, StyleSheet, TextInput, Text, View } from 'react-native';

// This page isn't wired into the app, but I'm keeping it here incase of merge conflicts!
// Makae sure to move this into src/ later if u wanna keep it!
export default class LogIn extends React.Component {
    render() {
        return (
                <View>
                    <Text style={styles.title}>STOMP</Text>
                    <Text style={styles.text}>Email: </Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.text}>Password: </Text>
                    <TextInput style={styles.input}/>
                    <Button style={styles.button} onPress={() => {Alert.alert('Log in pressed!');}} title="LOG IN" />

                    <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>Forgot your password?</Text>

                    <Text style={styles.subtext}>Need an account?</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('http://google.com')}>SIGN UP</Text>
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
    text: {
        color: 'black',
        fontSize: 10,
        paddingLeft: 10,
    },
    input: {
        borderWidth: 2,
        backgroundColor: 'blue',
        borderColor: 'blue',
        color: 'white',
        paddingBottom: 10,
        paddingLeft: 100,
        width: 260,
    },
    button: {
        color: 'black',
        paddingTop: 20,
        width: 260,
    },
    subtext: {
        color: 'gray',
        fontSize: 10,
        paddingBottom: 5,
        textAlign: 'center',
    },
    link: {
        color: 'gray',
        fontSize: 10,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});
