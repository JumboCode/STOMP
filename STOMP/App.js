import React from 'react';
import { StackNavigator } from 'react-navigation';

// These are the screens we want to navigate between!
// Make sure to have any screen you want accessible added to the StackNavigator Here!
import HomeScreen from './src/HomeScreen'
import ListScreen from './src/ListScreen'
import InfoScreen from './src/InfoScreen' // This is just an example of somethign

// This file should just set up navigation, so all actual content is in src/

// Define what views the stack navigator will use
const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Info: { screen: InfoScreen },
    List: { screen: ListScreen },
  },
  {
    initialRouteName: 'Home',
  }
);

// This is the main entry point into the app!
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
