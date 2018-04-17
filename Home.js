import React, { Component } from 'react';
import { AppRegistry, View, Button, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
 // more items
];

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <ListItem
              onPress={() =>
                navigate('InventoryList', {})
              }
              key={i}
              title={l.name}
            />
          ))
        }
      </List>
    );
  }
}

