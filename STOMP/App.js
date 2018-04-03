import React from 'react';
import { Alert, Button, TextInput, Text, View } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
                <View>
                    <Text>Sign In</Text>
                    <Text>Username: </Text>
                    <TextInput/>
                    <Text>Password: </Text>
                    <TextInput/>
                    <Button onPress={() => {Alert.alert('Collect data!');}} title="Sign In" />
                </View>
        );
    }
}
