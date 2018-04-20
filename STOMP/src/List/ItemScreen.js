import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ItemScreen extends React.Component {

  // These are for react navigation, like header bar and such
  // Here, let's have the title use props passed in:
  static navigationOptions = ({ navigation }) => {
      const { params } = navigation.state;

      return {
        title: "Item: " + params.name,
      }
  };

  render() {
    // Get parameters passed in from previous screen
    const { params } = this.props.navigation.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{"Item Screen"}</Text>
        <Text>{"This is a screen for the '" + params.name + "' item!"}</Text>
      </View>
    );
  }
}
