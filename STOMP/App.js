import React from 'react';
import { StackNavigator } from 'react-navigation';

// These are the screens we want to navigate between!
// Make sure to have any screen you want accessible added to the StackNavigator Here!
//import HomeScreen from './src/HomeScreen'
import ListScreen from './src/ListScreen'
import InfoScreen from './src/InfoScreen' // This is just an example of somethign

// This is the main entry point into the app!
// This file should just set up navigation, so all actual content is in src/
export default StackNavigator({
  Home: {
    screen: HomeScreen,
    screen: ListScreen,
    screen: InfoScreen,
  },
});
