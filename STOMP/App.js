import React from 'react';
import {  StackNavigator, SwitchNavigator, TabNavigator, TabBarBottom} from 'react-navigation';

// These are the screens we want to navigate between!
// Make sure to have any screen you want accessible added to the StackNavigator Here!
import HomeScreen from './src/HomeScreen'
import InfoScreen from './src/InfoScreen' // This is just an example of somethign

// Group screens together in file structure when appropriate!
import ListScreen from './src/inventory/ListScreen'
import ItemScreen from './src/inventory/ItemScreen'

import LoginScreen from './src/LoginScreen'
import ProfileScreen from './src/profile/ProfileScreen'

import Ionicons from 'react-native-vector-icons/Ionicons';
// This file should just set up navigation, so all actual content is in src/

// Define what views / tabs / stacks the navigator will use


const _InventoryStack = StackNavigator(
  {
    List: { screen: ListScreen },
    Item: { screen: ItemScreen },
  },
  {
    initialRouteName: 'List',
  }
);

const _ProfileStack = StackNavigator(
  {
    Profile: { screen: ProfileScreen },
  }
)

const _AppTabs = TabNavigator(
  {
    InventoryTab : { screen: _InventoryStack },
    ProfileTab : { screen: _ProfileStack}
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = (routeName === "InventoryTab") ? 'md-mic' : "md-paw";
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),

    // TODO: STYLING
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
)

// this probably won't need to be a full stack
const _LoginStack = StackNavigator(
  {
    Login: { screen: LoginScreen },
  },
  {
    initialRouteName: 'Login',
  }
)

export default SwitchNavigator(
  {
    AppSwitch: _AppTabs,
    LoginSwitch: _LoginStack,
  },
  {
    initialRouteName: 'LoginSwitch',
  },

)
