import React from 'react';
import { Alert, Linking, StyleSheet, TextInput, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button, Input } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SignupScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        password: '',
        passwordConfirm: '',
        email: '',

        // all valid so that we don't shake the first time.
        valid: {
          firstName: true,
          lastName: true,
          password: true,
          passwordConfirm: true,
          email: true,
        }
      }
    }

    // These are for react navigation, like header bar and such
    static navigationOptions = {
        title: 'Sign Up',
    };

    _enterApp = () => {
        const { navigate } = this.props.navigation;
        navigate('AppSwitch', {})
    }

    _goToLogIn = () => {
        const { navigate } = this.props.navigation;
        navigate('Login', {})
    }

    _submitSignUp = () => {
      let valid = this._validateFields();

      // then we attempt to sign up with the server...
      if (valid) {
        Alert.alert("All fields valid, signing up!");
      }

    }

    _validateFields = () => {
      let _valid = {
        firstName: true,
        lastName: true,
        password: true,
        passwordConfirm: true,
        email: true,
      }

      if (this.state.firstName == '') {
        this.firstNameInput.shake();
        _valid.firstName = false;
      }
      if (this.state.lastName == '') {
        this.lastNameInput.shake();
        _valid.lastName = false;
      }
      if (this.state.email == '') {
        this.emailInput.shake();
        _valid.email = false;
      }
      // for no password
      if (this.state.password == '') {
        this.passwordConfirmInput.shake();
        this.passwordInput.shake();
        _valid.password = false;
      }
      // for non matching confirmation
      if (this.state.password != this.state.passwordConfirm) {
        this.passwordConfirmInput.shake();
        this.passwordInput.shake();
        _valid.passwordConfirm = false;
      }

      this.setState({valid: _valid});
      return (_valid.firstName && _valid.lastName && _valid.email && _valid.password && _valid.passwordConfirm);
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
                            <Input
                            containerStyle={{flex: 1, marginRight:5}}
                            placeholderTextColor={'#EFEFF3'}
                            inputStyle={{color:'#FFFFFF'}}
                            labelStyle={styles.labelStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            label='First Name'
                            placeholder='Foo'
                            onChangeText={(text) => this.setState({firstName: text})}
                            ref = {input=>this.firstNameInput = input }
                            errorMessage = {this.state.valid.firstName ? " " : "Required"}
                            />
                            <Input
                            containerStyle={{flex: 1, marginLeft:5}}
                            placeholderTextColor={'#EFEFF3'}
                            inputStyle={{color:'#FFFFFF'}}
                            labelStyle={styles.labelStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            label='Last Name'
                            placeholder='Bar'
                            onChangeText={(text) => this.setState({lastName: text})}
                            ref = {input=>this.lastNameInput = input }
                            errorMessage = {this.state.valid.lastName ? " " : "Required"}
                            />
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
                    <View style={styles.formRow}>
                        <Input
                        containerStyle={{flex: 1}}
                        labelStyle={styles.labelStyle}
                        inputContainerStyle={styles.inputContainerStyle_password}
                        label='Confirm Password'
                        placeholder='foobitydoobity'
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({passwordConfirm: text})}
                        ref = {input=>this.passwordConfirmInput = input }
                        errorMessage = {this.state.valid.passwordConfirm ? " " : "Passwords Must Match"}
                        />
                    </View>

                    <Button
                        containerStyle={{flex: 1, justifyContent: 'center'}}
                        buttonStyle={styles.button}
                        onPress = {() => {this._submitSignUp()}}
                        title="SIGN UP">
                    </Button>
                </View>

                <View style={styles.linkContainer}>
                    <Text style={{color: '#48797C'}}>Already have an account?</Text>
                    <Text style={styles.link} onPress = {() => {this._goToLogIn()}}>LOG IN</Text>
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
