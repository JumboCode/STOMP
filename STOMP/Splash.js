import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// This page isn't wired into the app, but I'm keeping it here incase of merge conflicts!
// Makae sure to move this into src/ later if u wanna keep it!
export default class Splash extends React.Component {
    render() {
        return (
                <View>
                    <Text style={styles.title}>STOMP</Text>
                    <Button style={styles.button} onPress={() => {Alert.alert('Sign up pressed!');}} title="SIGN UP" />
                    <Button style={styles.button} onPress={() => {Alert.alert('Login pressed!');}} title="LOG IN" />
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
    button: {
        color: 'black',
        paddingTop: 20,
        width: 260,
    },
});
