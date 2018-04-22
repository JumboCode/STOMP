import React from 'react';
import { StackNavigator } from 'react-navigation';

// These are the screens we want to navigate between!
// Make sure to have any screen you want accessible added to the StackNavigator Here!
import HomeScreen from './src/HomeScreen'
import InfoScreen from './src/InfoScreen' // This is just an example of somethign

// Group screens together in file structure when appropriate!
import ListScreen from './src/List/ListScreen'
import ItemScreen from './src/List/ItemScreen'


// This file should just set up navigation, so all actual content is in src/

// Define what views the stack navigator will use
const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Info: { screen: InfoScreen },
    List: { screen: ListScreen },
    Item: { screen: ItemScreen },
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
