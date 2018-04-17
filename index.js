import React from 'react';
import { AppRegistry, View, Button, } from 'react-native';
import Header from './src/components/Header';
import InventoryList from './src/components/InventoryList';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/Home';


const App = StackNavigator({
  Home: { screen: HomeScreen },
  InventoryList: { screen: InventoryList },
});

AppRegistry.registerComponent('inventory', () => App);
