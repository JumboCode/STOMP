import React from 'react';
import { TextInput, Text } from 'react-native';

// This page isn't wired into the app, but I'm keeping it here incase of merge conflicts!
// Makae sure to move this into src/ later if u wanna keep it!
export default class App extends React.Component {
    render() {
        return (
                <div>
                    <Text>Register</Text>
                    <br/>
                    <Text>First name: </Text>
                    <TextInput/>
                    <Text>Last name: </Text>
                    <TextInput/>
                    <Text>Email: </Text>
                    <TextInput/>
                    <Text>Username: </Text>
                    <TextInput/>
                    <Text>Password: </Text>
                    <TextInput/>
                    <Text>Confirm Password: </Text>
                    <TextInput/>
                    <Button onPress={() => {Alert.alert('Collect data!');}} title="Register" />
                </div>
        );
    }
}
