import React from 'react';
import {  StackNavigator, SwitchNavigator, TabNavigator, TabBarBottom} from 'react-navigation';

// These are the screens we want to navigate between!
// Group screens together in file structure when appropriate!
import ListScreen from './src/inventory/ListScreen'
import ItemScreen from './src/inventory/ItemScreen'

import LoginScreen from './src/LoginStack/LoginScreen'
import SplashScreen from './src/LoginStack/SplashScreen'
import SignupScreen from './src/LoginStack/SignupScreen'

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
        let iconName = (routeName === "InventoryTab") ? 'md-list' : "md-person";
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),

    // TODO: STYLING
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: 'gray',
            style: {
        backgroundColor: '#272727',
      },
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
    Splash: { screen: SplashScreen },
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
  },
  {
    initialRouteName: 'Splash',
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
