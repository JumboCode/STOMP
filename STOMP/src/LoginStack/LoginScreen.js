import React from 'react';
import { Alert, Linking, StyleSheet, TextInput, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button, Input } from 'react-native-elements';
import { Base64 } from 'js-base64';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SignupScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        password: '',
        email: '',
        token: ''

        // all valid so that we don't shake the first time.
        valid: {
          password: true,
          email: true,
        }
      }
    }

    // These are for react navigation, like header bar and such
    static navigationOptions = {
        title: 'Log in',
    };

     _login = () => {
        this.setState({password: Base64.encode(this.state.password)})
        fetch('https://shrouded-crag-14655.herokuapp.com/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'email': this.state.email,
            'password': this.state.password,
          }),
        }).then((response) => {console.log(response.token); 
                                this.setState({token: response.token})})
          .catch((error) => {
            console.error(error);
          });
      }

    _enterApp = () => {
        const { navigate } = this.props.navigation;
        navigate('AppSwitch', {})
    }

    _goToSignUp = () => {
        const { navigate } = this.props.navigation;
        navigate('Signup', {})
    }

    _signIn = () => {
      let valid = this._validateFields();

      // then we attempt to sign up with the server...
      if (valid) {
        // TODO: check with server that this is valid, get a token back, etc...

        this._enterApp();
      }
    }

    _forgotPassword = () => {
      Alert.alert("Do you remember the last place had it?");
    }

    _validateFields = () => {
      let _valid = {
        password: true,
        email: true,
      }

      if (this.state.email == '') {
        this.emailInput.shake();
        _valid.email = false;
      }
      // for no password
      if (this.state.password == '') {
        this.passwordInput.shake();
        _valid.password = false;
      }

      this.setState({valid: _valid});
      return (_valid.email && _valid.password);
    }

    render() {
    // this is the navigator we passed in from App.js
    const { navigate } = this.props.navigation;

    return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>STOMP</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.formRow}>

                    </View>
                    <View style={styles.formRow}>
                        <Input
                        containerStyle={{flex: 1}}
                        placeholderTextColor={'#EFEFF3'}
                        inputStyle={{color:'#FFFFFF'}}
                        labelStyle={styles.labelStyle}
                        inputContainerStyle={styles.inputContainerStyle}
                        label='Email'
                        placeholder='foo@bar.foo'
                        onChangeText={(text) => this.setState({email: text})}
                        ref = {input=>this.emailInput = input }
                        errorMessage = {this.state.valid.email ? " " : "Required"}
                        />
                    </View>
                    <View style={styles.formRow}>
                        <Input
                        containerStyle={{flex: 1}}
                        labelStyle={styles.labelStyle}
                        inputContainerStyle={styles.inputContainerStyle_password}
                        label='Password'
                        placeholder='barfoo'
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({password: text})}
                        ref = {input=>this.passwordInput = input }
                        errorMessage = {this.state.valid.password ? " " : "Required"}
                        />
                    </View>

                    <Button
                        containerStyle={{flex: 1, justifyContent: 'center'}}
                        buttonStyle={styles.button}
                        onPress = {() => {this._signIn()}}
                        title="LOG IN">
                    </Button>
                </View>

                <View style={styles.linkContainer}>
                    <Text style={styles.link} onPress = {() => {this._forgotPassword()}}>Forgotten your password?</Text>
                    <Text style={{color: '#48797C', marginTop: 10}}>Need an account?</Text>
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
        padding: 30,
    },
    title: {
        color: '#272727',
        fontSize: 50,
        letterSpacing: 3,
        textAlign: 'center',
    },
    titleContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: "#272727",
      width: '100%',
      justifyContent: "center",
      alignItems: "center",
    },
    form: {
      width: '100%',
      flex: 5,
      justifyContent: 'center'
    },
    formRow: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    inputContainerStyle: {
      backgroundColor: '#48797C',
      borderColor: '#80CBC4',
      borderWidth: 1,
      borderRadius: 3,
    },
    inputContainerStyle_password: {
      backgroundColor: '#FFFFFF',
      borderColor: '#80CBC4',
      borderRadius: 3,
      borderWidth: 1,
    },
    labelStyle: {
      fontSize: 12,
      color:'#272727',
    },
    linkContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      },
    link: {
        marginTop: 10,
        color: '#48797C',
        textDecorationLine: 'underline',
    }
});
