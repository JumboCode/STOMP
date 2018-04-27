import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

export default class ItemScreen extends React.Component {

  // These are for react navigation, like header bar and such
  // Here, let's have the title use props passed in:
  static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

       return {
        title: "Item: " + params.name,
      }
  };

   state = {
        Quantity: '',
        Dates: ''
      }
      handleQuantity = (text) => {
        this.setState({ Quantity: text })
      }
      handleDates =  (text) => {
        this.setState({ Dates: text })
      }

  render() {
    // Get parameters passed in from previous screen
    const { params } = this.props.navigation.state;

    return (
      <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Quantity"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handleQuantity}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Dates"
               placeholderTextColor = "gray"
               autoCapitalize = "none"
               onChangeText = {this.handleDates}/>

             <Button
              large
              backgroundColor = 'blue'
              title="RESERVE"
              onPress={() => 
                Alert.alert(
                  'Reserved ' + params.name
                )  
              }
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText:{
    color: 'white'
  }
})
